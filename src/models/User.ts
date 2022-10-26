import mongoose, { Schema } from 'mongoose';
export interface UserInteface {
    _id: String;
    name: String;
    sexo: String;
    idade: String;
    username: String;
}
const userSchema = new Schema(
    {
        _id: String,
    name: String,
    sexo: String,
    idade: String,
    username: String,
    },
    {
        timestamps: true,
    }
);
export const User = mongoose.model('User', userSchema, 'users');
{
}