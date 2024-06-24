import mongoose, { Schema, Document, Model } from "mongoose";

//define  TypeScript interface for contacts
interface IContact extends Document {
    name: string;
    email: string;
    message: string;
}
// define the contacts schema

const contactSchema: Schema = new Schema<IContact>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);
export const Contacts: Model<IContact> = mongoose.model<IContact>('Contact', contactSchema);