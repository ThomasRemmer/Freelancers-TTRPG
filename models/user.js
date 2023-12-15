import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    trim: true,
    maxlength: 50,
    match: [
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Please enter a valid email address",
    ],
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [30, "Name cannot be more than 30 characters"],
    minLength: [4, "Name must be at least 4 characters long"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    select: false,
  },
});

const User = models.User || model("User", userSchema);
export default User;
