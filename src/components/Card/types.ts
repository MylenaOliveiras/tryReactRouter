import { ITask } from "../Task/types";

export interface ICard {
  status: "In Progress" | "Done" | "To Do";
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (task: ITask) => void;
  updateTask: (task: ITask) => void;
  gobackTask: (task: ITask) => void;
}
