import express from 'express';
const router = express.Router();

import * as TasksController from '../app/controllers/TasksController.js';

router.post('/registration', TasksController.Registration)





export default router;