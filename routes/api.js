import express from 'express';
const router = express.Router();

import * as TasksController from '../app/controllers/TasksController.js';
import * as UsersController from '../app/controllers/UsersController.js';


router.post('/registration', UsersController.Registration)
router.post('/login', UsersController.Login)





export default router;