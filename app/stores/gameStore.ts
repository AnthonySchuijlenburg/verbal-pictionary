import { defineStore } from "pinia";
import type { Team } from "~/types/Team";

export const useGameStore = defineStore(
  "game",
  () => {
    const { t } = useI18n();

    const teams = ref<Team[]>([
      {
        id: useUuid(),
        name: "Team 1",
        score: 0,
        players: ["Player 1", "Player 2"],
      },
    ]);

    const addTeam = () => {
      const teamLength = teams.value.length;
      teams.value.push({
        id: useUuid(),
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
      teams,
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
