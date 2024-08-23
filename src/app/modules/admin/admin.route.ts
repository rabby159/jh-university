import express from 'express';
import validateRequest from '../../middlewares/validatedRequest';
import { AdminControllers } from './admin.controller';
import { adminValidations } from './admin.validation';


const router = express.Router();

router.get('/:id', AdminControllers.getSingleAdmin);

router.patch(
  '/:id',
  validateRequest(adminValidations.updateAdminValidationSchema),
  AdminControllers.updateAdmin,
);

router.delete('/:id', AdminControllers.deleteAdmin);

router.get('/', AdminControllers.getAllAdmins);

export const FacultyRoutes = router;