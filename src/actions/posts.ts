 'use server';

import { createPost, updatePost, deletePost } from '@/lib/prisma/posts';
import { Prisma } from '@prisma/client';

//db deer create hiine ui deer add hiine.

export const addPost = async (post: Prisma.PostCreateInput) => {
  return createPost(post);
};

export const editPost = async (id: string, post: Prisma.PostUpdateInput) => {
  return updatePost(id, post);
};

export const removePost = async (id: string) => {
  return deletePost(id);
};


















// db and ui medium suspension