import express from 'express'
import validateRequest from '../../middlewares/validatedRequest'
import { AcademicDepartmentValidation } from './academicDepartment.validation'
import { AcademicDepartmentControllers } from './academicDepartment.controller'

const router = express.Router()

router.post(
  '/create-academic-department',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.createAcademicDepartment,
)

router.get(
  '/:departmentId',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
)

router.patch(
  '/:departmentId', // department id
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.updateAcademicDepartment,
)

router.get('/', AcademicDepartmentControllers.getAllAcademicDepartments)

export const AcademicDepartmentRoutes = router
