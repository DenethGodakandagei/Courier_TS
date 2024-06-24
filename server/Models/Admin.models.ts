import mongoose, { Schema, Document, Model } from 'mongoose';


//define  TypeScript interface for Admin
interface IAdmin extends Document {
    password:string;
    email:string;

}
// define the Admin schema

const adminShema: Schema = new Schema<IAdmin>(
    {
        password:{
            type:String,
            required:true,
           },
           email:{
            type:String,
            required:true
           },
    },
    { timestamps: true } 
)
export const Admin: Model<IAdmin> = mongoose.model<IAdmin>('admin', adminShema);