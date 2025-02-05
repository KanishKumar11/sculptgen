import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      maxlength: [50, "Name cannot be more than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      maxlength: [50, "Email cannot be more than 50 characters"],
    },
    message: {
      type: String,
      required: [true, "Please provide a message"],
      maxlength: [500, "Message cannot be more than 500 characters"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
