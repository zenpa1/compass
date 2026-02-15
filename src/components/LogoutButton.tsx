'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    //Call the logout API
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
    router.refresh(); // Forces middleware to re-run
  };

  return (
    <button onClick={handleLogout} className="text-red-500 hover:text-red-700">
      Sign Out
    </button>
  );
}