import { Router } from 'express';
import * as controller from './registration.controller.js';

const router: Router = Router();

router.post('/register', controller.register);

export default router;
