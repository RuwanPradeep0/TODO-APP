import mongoose from "mongoose";
// import moment from "moment";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters long"],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [5, "Description must be at least 5 characters long"],
    },

    startDateTime: {
      type: Date,
      required: [true, "Start date and time are required"],
    },

    endDateTime: {
      type: Date,
      required: [true, "End date and time are required"],
      validate: {
        validator: function (value) {
          return value > this.startDateTime;
        },
        message: "End date and time must be after start date and time",
      },
    },

    finished: {
      type: Boolean,
      default: false,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);


export const Task = mongoose.model("Task", taskSchema);

