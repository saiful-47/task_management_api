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