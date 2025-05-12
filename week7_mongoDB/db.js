import monggose,{Schema} from "mongoose";
const DB_NAME = "anuragtodos";

const UserSchema = new monggose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TodoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: monggose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const UseModel = monggose.model("User", UserSchema);
const TodoModel = monggose.model("Todo", TodoSchema);

module.exports = {
  UseModel,
  TodoModel,
};
