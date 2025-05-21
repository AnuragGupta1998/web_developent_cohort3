import mongoose, { Schema } from "mongoose";

const CourseSchema = new Schema({

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "admins",
    required: true,
  },
});

const CourseModel = mongoose.model("courses", CourseSchema);
export default CourseModel;
