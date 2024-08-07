import { z } from 'zod'

const userValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(15, { message: 'Not more then 15 character' }),
  needPasswordChange: z.boolean().optional().default(true),
  role: z.enum(['student', 'faculty', 'admin']),
  status: z.enum(['in-progress', 'blocked']).default('in-progress'),
  isDeleted: z.boolean().optional().default(false),
})

export const UserValidation = {
  userValidationSchema,
}
