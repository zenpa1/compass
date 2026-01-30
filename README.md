# COMPASS Development Setup

## 1. Prerequisites

- Install Node.js
- Install MySQL server and host it on your PC

## 2. Getting Started

1. Clone the repository: `git clone https://github.com/zenpa1/compass.git`
   1.1 In case there are updates: `git pull origin main`
2. Install dependencies: `npm install`
3. Create a `.env` file in the root folder and add:
   `DATABASE_URL="mysql://root:@localhost:3306/compass_db"`
   _(Note: Add password after root: if you have one)_

## 3. Database Setup

1. Initialize your local database:
   `npx prisma migrate dev`
2. Update your local tools:
   `npx prisma generate`

## 4. How to Run

- Start Server: `npm run dev`
- View Database: `npx prisma studio`

## 5. Branching Rules

- NEVER push to `main` directly.
- Create a branch for your feature: `git checkout -b feat/my-feature`
