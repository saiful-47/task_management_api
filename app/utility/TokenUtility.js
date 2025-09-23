import {JWT_EXPIRATION, JWT_KEY} from "../config/config.js";
import jwt from "jsonwebtoken";

export const TokenEncode =  (email, user_id) =>{
    const PAYLOAD = {email: email, user_id: user_id};
    const KEY = JWT_KEY
    const EXPIRATION = {expiresIn: JWT_EXPIRATION};
    return jwt.sign(PAYLOAD,KEY,EXPIRATION);
}

export const TokenDecode =  (token) => {
    try{
        return jwt.verify(token, JWT_KEY);
    }catch(e){
        return null;
    }
}