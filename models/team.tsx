import { PlayerModel } from "./player";

export interface TeamModel {
  name: string;
  location: string;
  address: string;
  members: PlayerModel[];
}
