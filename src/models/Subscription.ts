import mongoose, { Schema } from "mongoose";

const SubscriptionSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  subscription_Type: { type: String, required: true },
  subscription_Time: { type: String, required: true },
  subscription_Charge: { type: Number, required: true },
  subscription_StartingTime: { type: String, required: true },
  subscription_EndingTime: { type: String, required: true },
});

export const Subscription =
  mongoose.models.Subscription || mongoose.model("Subscription", SubscriptionSchema);
