// frontend/src/components/RoleSetup.tsx

import React, { useState } from 'react';
import './RoleSetup.css'; // Optional: add styling

type PrimaryRole = 'PHOTO' | 'VIDEO' | 'EDITOR';
type SecondaryRole = 'PHOTO' | 'VIDEO' | 'EDITOR' | 'ASSISTANT' | 'ANY';

interface RoleSetupProps {
  userId: number;
}

export const RoleSetup: React.FC<RoleSetupProps> = ({ userId }) => {
  const [primaryRole, setPrimaryRole] = useState<PrimaryRole | ''>('');
  const [secondaryRole, setSecondaryRole] = useState<SecondaryRole | ''>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const primaryRoles: PrimaryRole[] = ['PHOTO', 'VIDEO', 'EDITOR'];
  const secondaryRoles: SecondaryRole[] = ['PHOTO', 'VIDEO', 'EDITOR', 'ASSISTANT', 'ANY'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!primaryRole || !secondaryRole) {
      setError('Please select both primary and secondary roles');
      return;
    }

    if (primaryRole === secondaryRole) {
      setError('Primary and secondary roles must be different');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/auth/setup-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId,
          primaryRole,
          secondaryRole
        })
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = data.redirectTo || '/dashboard';
      } else {
        setError(data.message || 'Failed to setup profile');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="role-setup-container">
      <div className="role-setup-card">
        <h2>Complete Your Profile</h2>
        <p>Select your primary and secondary roles for The North Studio</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="primaryRole">Primary Role *</label>
            <select
              id="primaryRole"
              value={primaryRole}
              onChange={(e) => setPrimaryRole(e.target.value as PrimaryRole)}
              required
            >
              <option value="">Select primary role</option>
              {primaryRoles.map(role => (
                <option key={role} value={role}>
                  {role.charAt(0) + role.slice(1).toLowerCase()}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="secondaryRole">Secondary Role *</label>
            <select
              id="secondaryRole"
              value={secondaryRole}
              onChange={(e) => setSecondaryRole(e.target.value as SecondaryRole)}
              required
              disabled={!primaryRole}
            >
              <option value="">Select secondary role</option>
              {secondaryRoles
                .filter(role => role !== primaryRole)
                .map(role => (
                  <option key={role} value={role}>
                    {role.charAt(0) + role.slice(1).toLowerCase()}
                  </option>
                ))}
            </select>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" disabled={loading}>
            {loading ? 'Setting up...' : 'Complete Setup'}
          </button>
        </form>
      </div>
    </div>
  );
};