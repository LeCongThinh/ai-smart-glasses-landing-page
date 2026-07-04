import { z } from "zod";

export const engagementEventSchema = z.object({
  type: z.enum(["click", "scroll", "submit"]),
  label: z.string().trim().min(1).max(80),
  path: z.string().trim().max(200).default("/"),
});
