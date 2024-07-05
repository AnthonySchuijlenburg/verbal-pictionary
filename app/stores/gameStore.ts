import { defineStore } from "pinia";
import type { Team } from "~/types/Team";

export const useGameStore = defineStore(
  "game",
  () => {
    const { t } = useI18n();

    const round = ref<number>(0);

    const teams = ref<Team[]>([
      {
        name: "Team 1",
        score: 0,
        players: ["Player 1", "Player 2"],
      },
    ]);

    const incrementRound = () => {
      round.value++;
    };

    const addPlayer = (team: Team) => {
      const playerCount = team.players.length ?? 0;
      team.players.push(t("players.placeholder", { id: playerCount + 1 }));
    };

    const addTeam = () => {
      const teamLength = teams.value.length;
      teams.value.push({
        name: t("teams.placeholder", { id: teamLength + 1 }),
        score: 0,
        players: [t("players.placeholder", { id: 1 })],
      });
    };

    const saveTeamName = (team: Team, name: string) => {
      team.name = name;
    };

    return {
      round,
      teams,
      incrementRound,
      addPlayer,
      addTeam,
      saveTeamName,
    };
  },
  {
    persist: {
      storage: persistedState.cookiesWithOptions({
        sameSite: "strict",
      }),
    },
  },
);
