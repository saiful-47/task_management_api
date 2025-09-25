import express from 'express';
const router = express.Router();

import * as TasksController from '../app/controllers/TasksController.js';
import * as UsersController from '../app/controllers/UsersController.js';
import AuthMiddlewares from "../app/middlewares/AuthMiddlewares.js";


router.post('/registration', UsersController.Registration)
router.post('/login', UsersController.Login)
router.get('/ProfileDetails',AuthMiddlewares,UsersController.ProfileDetails)
router.post('/ProfileUpdate',AuthMiddlewares,UsersController.ProfileUpdate)





export default router;