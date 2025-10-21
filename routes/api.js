import express from 'express';
const router = express.Router();

import * as TasksController from '../app/controllers/TasksController.js';
import * as UsersController from '../app/controllers/UsersController.js';
import AuthMiddlewares from "../app/middlewares/AuthMiddlewares.js";

// user
router.post('/registration', UsersController.Registration)
router.post('/login', UsersController.Login)
router.get('/ProfileDetails',AuthMiddlewares,UsersController.ProfileDetails)
router.post('/ProfileUpdate',AuthMiddlewares,UsersController.ProfileUpdate)
router.get('/EmailVerify/:email',UsersController.EmailVerify)
router.post('/CodeVerify',UsersController.CodeVerify)
router.post('/ResetPassword',UsersController.ResetPassword)

// task
router.post('/CreateTask',AuthMiddlewares,TasksController.CreateTask)
router.post('/UpdateTaskStatus/:id/:status',AuthMiddlewares,TasksController.UpdateTaskStatus)
router.get('/TaskListByStatus/:status',AuthMiddlewares,TasksController.TaskListByStatus)





export default router;