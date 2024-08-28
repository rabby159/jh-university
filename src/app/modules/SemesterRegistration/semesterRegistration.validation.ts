import { z } from 'zod'
import { SemesterRegistrationStatus } from './semesterRegistration.constant'

const createSemesterRegistrationValidationSchema = z.object({
  body: z.object({
    academicSemester: z.string(),
    status: z.enum([...(SemesterRegistrationStatus as [string, ...string[]])]),
    startDate: z.string().datetime(),
    endData: z.string().datetime(),
    maxCredit: z.number(),
    minCredit: z.number(),
  }),
})

export const SemesterRegistrationValidations = {
  createSemesterRegistrationValidationSchema,
}

/* boil plate

const createSemesterRegistrationValidationSchema = z.object({
  body: z.object({}),
})

export const SemesterRegistrationValidations = {
  createSemesterRegistrationValidationSchema,
}


*/
