import UserModel from '../models/UserModel.js';
import {TokenEncode} from "../utility/TokenUtility.js";


export const Registration = async (req, res) => {

    try{
        let reqBody = req.body;
        await UserModel.create(reqBody);
        return res.json({status: 'success', message: 'Registration successfully'});
    }catch(e){
        return res.json({status: 'fail', message: e.toString()});
    }
}

export const Login = async (req, res) => {

    try{
        let reqBody = req.body;
        let data = await UserModel.findOne(reqBody);

        if(!data){
            return res.json({status: 'fail', message: 'User not found'});
        }else{
            // login success
            let token = TokenEncode(data['email'], data['_id'])
            return res.json({status: 'success', message: 'Login successfully', data: token});
        }
    }catch(e){
        return res.json({status: 'fail', message: e.toString()});
    }
}

export const ProfileDetails = async (req, res) => {

    // try{
    //     let reqBody = req.body;
    //     let data = await UserModel.findOne(reqBody);
    //
    //     if(!data){
    //         return res.json({status: 'fail', message: 'User not found'});
    //     }else{
    //         // login success
    //         let token = TokenEncode(data['email'], data['_id'])
    //         return res.json({status: 'success', message: 'Login successfully', data: token});
    //     }
    // }catch(e){
    //     return res.json({status: 'fail', message: e.toString()});
    // }
}

