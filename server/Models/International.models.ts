import mongoose, { Schema, Document, Model } from 'mongoose';


// Define the TypeScript interface for International documents
interface IInternational extends Document {
  weight: number;
  price: number;
  sendername: string;
  sendernumber: string;
  senderaddress: string;
  receivername: string;
  receivernumber: string;
  receiveraddress: string;
}

// Define the International schema with appropriate fields and types
const internationalSchema: Schema = new Schema<IInternational>(
  {
    weight: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sendername: {
      type: String,
      required: true,
    },
    sendernumber: {
      type: String,
      required: true,
    },
    senderaddress: {
      type: String,
      required: true,
    },
    receivername: {
      type: String,
      required: true,
    },
    receivernumber: {
      type: String,
      required: true,
    },
    receiveraddress: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

// Create and export the International model
export const International: Model<IInternational> = mongoose.model<IInternational>('International', internationalSchema);
