import express from 'express'
import validateRequest from '../../middlewares/validatedRequest'
import { SemesterRegistrationController } from './semesterRegistration.controller'
import { SemesterRegistrationValidations } from './semesterRegistration.validation'

const router = express.Router()

router.post(
  '/create-semester-registration',
  validateRequest(
    SemesterRegistrationValidations.createSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationController.createSemesterRegistration,
)

// router.get(
//   '/:semesterId',
//   AcademicSemesterControllers.getSingleAcademicSemester,
// )

// router.patch(
//   '/:semesterId',
//   validateRequest(
//     AcademicSemesterValidation.updateAcademicSemesterValidationSchema,
//   ),
//   AcademicSemesterControllers.updateAcademicSemester,
// )

// router.get('/', AcademicSemesterControllers.getAllAcademicSemesters)

export const SemesterRegistrationRoutes = router
