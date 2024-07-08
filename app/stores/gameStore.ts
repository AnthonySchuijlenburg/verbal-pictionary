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

    const deleteTeam = (team: Team) => {
      teams.value = teams.value.filter((t) => t !== team);
    };

    const addPlayer = (team: Team) => {
      const playerCount = team.players.length ?? 0;
      team.players.push(t("players.placeholder", { id: playerCount + 1 }));
    };

    const savePlayerName = (team: Team, index: number, name: string) => {
      team.players[index] = name;
    };

    const deletePlayer = (team: Team, index: number) => {
      team.players.splice(index, 1);
    };

    return {
      round,
      teams,
      incrementRound,
      addTeam,
      saveTeamName,
      deleteTeam,
      addPlayer,
      savePlayerName,
      deletePlayer,
    };
  },
  {
    persist: {
      storage: persistedState.cookiesWithOptions({
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7,
      }),
    },
  },
);
