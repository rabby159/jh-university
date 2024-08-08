import express, { NextFunction, Request, Response } from 'express'
import { UserControllers } from './user.controller'
import { AnyZodObject } from 'zod'
import { studentValidations } from '../student/studentZod.validation'

const router = express.Router()

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, Next: NextFunction) => {
    try {
      //data validation using zod
      await schema.parseAsync({
        body: req.body,
      })

      Next()
    } catch (err) {
      Next(err)
    }
  }
}

router.post(
  '/create-student',
  validateRequest(studentValidations.studentValidationSchema),
  UserControllers.createStudent,
)

export const UserRoutes = router
