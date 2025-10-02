import { defineStore } from "pinia";
import sound from "/resources/sounds/round-end.mp3";

export const useSoundsStore = defineStore("sounds", () => {
  let audio: HTMLAudioElement | undefined;

  if (window) {
    audio = new Audio(sound);
  }

  async function initializeSound() {
    if (!audio && !window) {
      return;
    }

    if (!audio) {
      audio = new Audio(sound);
    }

    audio.play();
    audio.pause();
    audio.currentTime = 0;
  }

  function playSound() {
    audio?.play();
  }

  return {
    initializeSound,
    playSound,
  };
});
