import { z } from 'zod'

// Define Zod schema for Guardians
const guardiansValidationSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"),
  fatherOccupation: z.string().min(1, "Father's occupation is required"),
  motherName: z.string().min(1, "Mother's name is required"),
  motherOccupation: z.string().min(1, "Mother's occupation is required"),
})

// Define Zod schema for UserName
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, 'First name is must required')
    .max(15, 'First name maximum length is 15'),
  middleName: z.string().trim().optional(),
  lastName: z
    .string()
    .trim()
    .min(1, 'Last name is required')
    .max(15, 'Last name maximum length is 15'),
})

// Define Zod schema for Student
const studentValidationSchema = z.object({
  body: z.object({
    id: z.string().min(1, 'ID is required'),
    name: userNameValidationSchema,
    gender: z.enum(['male', 'female'], {
      errorMap: () => ({ message: 'Invalid gender value' }),
    }),
    dateOfBirth: z.string().optional(),
    email: z.string().email('Invalid email address'),
    contactNo: z.string().min(1, 'Contact number is required'),
    bloodGroup: z
      .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
      .optional(),
    presentAddress: z.string().min(1, 'Present Address is required'),
    permanentAddress: z.string().min(1, 'Permanent Address is required'),
    guardians: guardiansValidationSchema,
    profileImg: z
      .string()
      .url('Invalid URL for profile image')
      .min(1, 'Profile image URL is required'),
    isActive: z.enum(['active', 'irregular']).default('active'),
  }),
})

export const studentValidations = {
  studentValidationSchema,
}
