import UserModel from '../models/UserModel.js';

export const Registration = async (req, res) => {

    try{
        let reqBody = req.body;
        await UserModel.create(reqBody);
        return res.json({status: 'success', message: 'Registration successfully'});
    }catch(e){
        return res.json({status: 'fail', message: e.toString()});
    }
}