import mongoose, { Schema, Document, Model } from 'mongoose';


// Define the TypeScript interface for Domestic documents
interface IDomestic extends Document {
    weight: number;
    price: number;
    sendername: string;
    sendernumber: string;
    senderaddress: string;
    receivername: string;
    receivernumber: string;
    receiveraddress: string;
    createdAt: Date;
  }
  
  // Define the Domestic schema with appropriate fields and types
  const domesticSchema: Schema = new Schema<IDomestic>(
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
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    { timestamps: true } // Automatically manage createdAt and updatedAt fields
  );
  
  // Create and export the Domestic model
  export const Domestic: Model<IDomestic> = mongoose.model<IDomestic>('Domestic', domesticSchema);
  