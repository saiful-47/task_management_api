import UserModel from '../models/UserModel.js';
import {TokenEncode} from "../utility/TokenUtility.js";
import EmailSend from "../utility/EmailUtility.js";


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
    try{
        let user_id = req.headers['user_id'];
        let data = await UserModel.findOne({"_id":user_id});
        return res.json({status: 'success', message: 'User profile successfully', data: data});
    }catch (e){
        return res.json({status: 'fail', message: e.toString()});
    }
}

export const ProfileUpdate = async (req, res) => {

    try{
        let user_id = req.headers['user_id'];
        let reqBody = req.body;
        await UserModel.updateOne({'_id': user_id},reqBody);
        return res.json({status: 'success', message: 'Profile update successfully'});
    }catch(e){
        return res.json({status: 'fail', message: e.toString()});
    }
}

export const EmailVerify = async (req, res) => {
    try{
        let email = req.params.email;
        let data = await UserModel.findOne({email: email});
        if(data==null){
            return res.json({status: 'fail', message: 'User email does not exist'});
        }else{
            // send OTP to email
            let code = Math.floor(100000+Math.random()*900000);
            let EmailTo = data['email'];
            let EmailText = "Your code is "+ code;
            let EmailSubject = "Task Manager Verification Code";
            await EmailSend(EmailTo, EmailText, EmailSubject);

            //update OTP in user
            await UserModel.updateOne({email: email}, {otp: code});
            return res.json({status: 'success', message: 'Verification send successfully, check your email'});
        }

    }catch(e){
        return res.json({status: 'fail', message: e.toString()});
    }
}

export const CodeVerify = async (req, res) => {
    try{
        let reqBody = req.body;
        let data = await UserModel.findOne({email: reqBody['email'], otp: reqBody['otp']});
        if(data==null){
            return res.json({status: 'fail', message: 'Verification code is wrong'  });
        }else{
            await data.updateOne({otp: 0})
            return res.json({status: 'success', message: 'Verification successfully'  });
        }

    }catch(e){
        return res.json({status: 'fail', message: e.toString()});
    }
}

