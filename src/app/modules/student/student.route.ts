import express from 'express'
import { StudentControllers } from './student.controller'
import validateRequest from '../../middlewares/validatedRequest'
import { updateStudentValidationSchema } from '../student/student.validation'

const router = express.Router()

//will call controller function

router.get('/', StudentControllers.getAllStudents)

router.get('/:studentId', StudentControllers.getSingleStudent)

router.patch(
  '/:studentId',
  validateRequest(updateStudentValidationSchema),
  StudentControllers.updateStudent,
)

router.delete('/:studentId', StudentControllers.deleteStudent)

export const StudentRoutes = router
