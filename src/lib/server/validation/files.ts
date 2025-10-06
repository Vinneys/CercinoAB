import { z } from 'zod';
export const UploadUrlInput = z.object({
  filename: z.string(),
  mime: z.string(),
  visibility: z.enum(['public','private']).default('private')
});
export const FinalizeFile = z.object({
  key: z.string(),
  size: z.number().positive(),
  mime: z.string(),
  visibility: z.enum(['public','private']).default('private'),
  title: z.string().optional(),
  tags: z.array(z.string()).optional()
});


