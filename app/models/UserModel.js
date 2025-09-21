import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String},
    password: {type: String, required: true},
    mobile: {type: Number, required: true},
    otp: {type: String, default: 0},
},{
    timestamps: true,
    versionKey: false,
})

const Users = mongoose.model('Users', UserSchema);

export default Users;