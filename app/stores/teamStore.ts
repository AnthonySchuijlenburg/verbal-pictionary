import { defineStore } from "pinia";
import type { Team } from "~/types/Team";
import type { Player } from "~/types/Player";

export const useTeamStore = defineStore(
  "teams",
  () => {
    const { t } = useI18n();

    const teams = ref<Team[]>([getDefaultTeam()]);

    const addTeam = () => {
      const teamLength = teams.value.length;
      teams.value.push({
        id: useUuid(),
        name: t("teams.placeholder", { id: teamLength + 1 }),
        score: 0,
        players: [{ id: useUuid(), name: t("players.placeholder", { id: 1 }) }],
      });
    };

    const saveTeamName = (team: Team, name: string) => {
      team.name = name;
    };

    const deleteTeam = (id: string) => {
      teams.value = teams.value.filter((team: Team) => team.id !== id);
    };

    const getTeam = (id: string): Team => {
      const team = teams.value.find((team: Team) => team.id === id);

      if (!team) {
        throw new Error("Team not found");
      }

      return team;
    };

    const addPlayer = (team: Team) => {
      const playerCount = team.players.length ?? 0;
      team.players.push({
        id: useUuid(),
        name: t("players.placeholder", { id: playerCount + 1 }),
      });
    };

    const savePlayerName = (team: Team, id: string, name: string) => {
      const player: Player | undefined = team.players.find(
        (player: Player) => player.id === id,
      );
      if (player) {
        player.name = name;
      }
    };

    const deletePlayer = (team: Team, id: string) => {
      team.players = team.players.filter((player: Player) => player.id !== id);
    };

    function resetTeams() {
      teams.value = [getDefaultTeam()];
    }

    function getDefaultTeam() {
      return {
        id: useUuid(),
        name: t("teams.placeholder", { id: 1 }),
        score: 0,
        players: [
          { id: useUuid(), name: t("players.placeholder", { id: 1 }) },
          { id: useUuid(), name: t("players.placeholder", { id: 2 }) },
        ],
      };
    }

    return {
      teams,
      addTeam,
      saveTeamName,
      deleteTeam,
      getTeam,
      addPlayer,
      savePlayerName,
      deletePlayer,
      resetTeams,
    };
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.cookies({
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7,
      }),
    },
  },
);
