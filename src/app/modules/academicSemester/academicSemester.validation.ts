import { z } from 'zod'

const createAcademicValidationSchema = z.object({
  body : z.object({
    name : z.enum({
      
    })
  })
})

export const AcademicSemesterValidation = {
  createAcademicValidationSchema,
}
