import { ICards } from "../PersonCard/types";

export interface IForm {
  teams: string[];
  cardRegistered: (card: ICards) => void;
}
