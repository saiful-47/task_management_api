import TaskModel from "../models/TaskModel.js";
import {TokenEncode} from "../utility/TokenUtility.js";

export const CreateTask = async (req, res) => {
    try{
        let user_id = req.headers['user_id'];
        // return res.json(user_id);
        let requestBody = req.body;
        requestBody.user_id = user_id;
        await TaskModel.create(requestBody);
        return res.status(201).json({status: 'success', message: 'Task Created successfully', data: requestBody});

    }catch(e){
        return res.json({status: 'fail', message: e.toString()});
    }
}

export const UpdateTaskStatus = async(req, res) => {
    try{
        let id = req.params.id;
        let status = req.params.status;
        let user_id = req.headers['user_id'];

        await TaskModel.updateOne({'_id':id, 'user_id':user_id}, {status:status});
        return res.status(201).json({status: 'success', message: 'Task updated successfully'});

    }catch (e){
        return res.json({status: 'fail', message: e.toString()});
    }
}