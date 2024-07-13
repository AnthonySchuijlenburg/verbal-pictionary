import type { Player } from "~/types/Player";

export type Team = {
  id: string;
  name: string;
  score: number;
  players: Player[];
};
