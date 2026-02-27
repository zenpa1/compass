import { db } from '@/lib/prisma';

import { NextResponse } from 'next/server';

export async function GET() {
  const user = await db.user.findFirst();
  return NextResponse.json(user);
}
