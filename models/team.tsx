import { PlayerModel } from "./player";

export interface TeamModel {
  team_id: number;
  name: string;
  location: string;
  address: string;
  members: PlayerModel[];
}
