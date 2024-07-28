import { defineStore } from "pinia";
import type { Round } from "~/types/Round";

export const useRoundStore = defineStore(
  "rounds",
  () => {
    const teamStore = useTeamStore();
    const wordsStore = useWordsStore();
    const rounds = ref<Array<Round>>([]);

    const roundNumber = computed(() => rounds.value.length);

    function setNextRound() {
      const team = teamStore.teams[roundNumber.value % teamStore.teams.length];
      if (!team) {
        throw new Error("No teams available");
      }

      const round: Round = {
        id: useUuid(),
        teamId: team.id,
        finished: false,
        timer: 30,
        questions: [
          ...wordsStore
            .getNextWords(5)
            .map((word) => ({ word: word, guessed: false })),
        ],
      };

      rounds.value.push(round);
    }

    return {
      rounds,
      roundNumber,
      setNextRound,
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  },
);
