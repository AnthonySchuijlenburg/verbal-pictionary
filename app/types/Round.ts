import type { Question } from "~/types/Question";

export type Round = {
  id: string;
  teamId: string;
  finished: boolean;
  timer: number;
  questions: Question[];
};
