import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .max(254, "Email address is too long.")
    .email("Please enter a valid email address."),
  website: z.string().max(200).optional().default(""),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
