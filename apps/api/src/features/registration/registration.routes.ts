import { Router } from 'express';
import * as controller from './registration.controller.js';
import { authenticateAdmin } from '../auth/auth.middleware.js';

const router: Router = Router();

router.post('/register', controller.register);
router.get('/registrations', authenticateAdmin, controller.getAllRegistrations);

export default router;
