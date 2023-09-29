import { nextOptions } from '@/lib/auth';
import { createPost } from '@/lib/prisma/posts';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
//creae handlers src/comp/form
export async function POST(request: NextRequest) {
  const session = await getServerSession(nextOptions);
//actios/posts-iig orlono gsen vg post create input
  const post = await request.json();
//createdPost huwisagch
  const createdPost = await createPost({
    ...post,
    userId: session?.user.id,
  });

  return NextResponse.json(createdPost);
}
