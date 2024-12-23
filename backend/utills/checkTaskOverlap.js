import { Task } from "../model/task.js";

export const checkOverlap = async (userId, startDateTime, endDateTime) => {
  const overlappingTask = await Task.findOne({
    user: userId,
    $or: [
      { startDateTime: { $lt: endDateTime, $gte: startDateTime } },
      { endDateTime: { $gt: startDateTime, $lte: endDateTime } },
    ],
  });
  return overlappingTask;
};
