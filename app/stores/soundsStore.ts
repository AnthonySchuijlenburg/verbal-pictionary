import { defineStore } from "pinia";
import sound from "/resources/sounds/round-end.mp3";

export const useSoundsStore = defineStore("sounds", () => {
  const audio = new Audio(sound);

  async function initializeSound() {
    audio.play();
    audio.pause();
    audio.currentTime = 0;
  }

  function playSound() {
    audio.play();
  }

  return {
    initializeSound,
    playSound,
  };
});
