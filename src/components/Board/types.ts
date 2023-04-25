import { ICards } from "../PersonCard/types";

export interface IBoard {
  cards: ICards[];
  team: string;
  primaryColor: string;
  secondaryColor: string;
}
