import { z } from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url(),
  name: z.string().min(3).max(30),
  username: z.string().min(3).max(30),
  bio: z.string().min(3).max(1000),
});

export const PostThreadValidation = z.object({
  thread: z.string().min(3, { message: "Please enter 3 characters" }),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  thread: z.string().min(3, { message: "Please enter 3 characters" }),
});
