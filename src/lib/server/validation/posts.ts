import { z } from 'zod';
export const CreatePost = z.object({
  title: z.string().min(1),
  body: z.string().optional(),
  tags: z.array(z.string()).default([])
});
export const UpdatePost = z.object({
  title: z.string().min(1).optional(),
  body: z.string().optional(),
  tags: z.array(z.string()).optional()
});


