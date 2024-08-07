import { z } from 'zod'

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Name must be a string',
    })
    .max(15, { message: 'Not more then 15 character' })
    .optional(),
})

export const UserValidation = {
  userValidationSchema,
}
