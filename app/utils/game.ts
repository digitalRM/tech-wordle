import { LetterState } from "../types/game";

export const WORD_LENGTH = 5;
export const MAX_GUESSES = 6;

export const computeGuess = (
  guess: string,
  targetWord: string
): LetterState[] => {
  const result: LetterState[] = Array(WORD_LENGTH).fill("absent");
  const targetLetters = targetWord.split("");
  const guessLetters = guess.toUpperCase().split("");

  // First pass: mark correct letters
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guessLetters[i] === targetLetters[i]) {
      result[i] = "correct";
      targetLetters[i] = "*";
      guessLetters[i] = "-";
    }
  }

  // Second pass: mark present letters
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guessLetters[i] !== "-") {
      const targetIndex = targetLetters.findIndex(
        (letter) => letter === guessLetters[i]
      );
      if (targetIndex !== -1) {
        result[i] = "present";
        targetLetters[targetIndex] = "*";
      }
    }
  }

  return result;
};

export const getLetterStates = (
  guesses: string[],
  targetWord: string
): Map<string, LetterState> => {
  const letterStates = new Map<string, LetterState>();

  for (const guess of guesses) {
    const states = computeGuess(guess, targetWord);
    guess.split("").forEach((letter, index) => {
      const currentState = letterStates.get(letter.toUpperCase());
      const newState = states[index];

      if (
        !currentState ||
        newState === "correct" ||
        (newState === "present" && currentState === "absent")
      ) {
        letterStates.set(letter.toUpperCase(), newState);
      }
    });
  }

  return letterStates;
};
