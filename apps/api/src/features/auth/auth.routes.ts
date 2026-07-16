import { Router } from 'express';
import * as controller from './auth.controller.js';

const router: Router = Router();

router.post('/admin/login', controller.loginAdmin);

export default router;
