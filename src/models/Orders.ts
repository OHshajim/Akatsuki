import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  totalCost: { type: Number, required: true },
  date: { type: String, required: true },
  products: { type: Array, required: true },
  transactionID: { type: String, required: true },
  address: { type: Object, required: true },
  paymentStatus: { type: String, required: true },
});

export const Orders =
  mongoose.models.Orders || mongoose.model("Orders", OrderSchema);
