import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    clerkUserId: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    subscriptionStatus: {
      type: String,
      enum: ["none", "active", "past_due", "canceled", "trialing"],
      default: "none",
    },
  },
  { timestamps: true }
);

export const User = models.User || model("User", UserSchema);


