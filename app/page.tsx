"use client";

import { useEffect, useState } from "react";
import { GameState, LetterState } from "./types/game";
import { WORD_LENGTH, MAX_GUESSES, getLetterStates } from "./utils/game";
import { getRandomWord, isValidGuess } from "./constants/wordbank";
import Board from "../components/Board";
import Keyboard from "../components/Keyboard";

export default function Home() {
  const [gameState, setGameState] = useState<GameState>({
    currentGuess: "",
    guesses: [],
    targetWord: getRandomWord(),
    gameStatus: "playing",
    currentRow: 0,
  });

  const [message, setMessage] = useState<string>("");
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const letterStates = getLetterStates(gameState.guesses, gameState.targetWord);

  const displayMessage = (text: string) => {
    setMessage(text);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const onKeyPress = (key: string) => {
    if (gameState.gameStatus !== "playing") return;
    if (gameState.currentGuess.length < WORD_LENGTH) {
      setGameState((prev) => ({
        ...prev,
        currentGuess: prev.currentGuess + key,
      }));
    }
  };

  const onDelete = () => {
    setGameState((prev) => ({
      ...prev,
      currentGuess: prev.currentGuess.slice(0, -1),
    }));
  };

  const onEnter = () => {
    if (gameState.gameStatus !== "playing") return;
    if (gameState.currentGuess.length !== WORD_LENGTH) {
      displayMessage("Not enough letters");
      return;
    }

    if (!isValidGuess(gameState.currentGuess)) {
      displayMessage("Not in word list");
      return;
    }

    const newGuesses = [...gameState.guesses, gameState.currentGuess];
    let newStatus = gameState.gameStatus;

    if (gameState.currentGuess.toUpperCase() === gameState.targetWord) {
      newStatus = "won";
      displayMessage("Genius!");
    } else if (newGuesses.length === MAX_GUESSES) {
      newStatus = "lost";
      displayMessage(gameState.targetWord);
    }

    setGameState((prev) => ({
      ...prev,
      guesses: newGuesses,
      currentGuess: "",
      gameStatus: newStatus,
      currentRow: prev.currentRow + 1,
    }));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        const key = event.key.toUpperCase();
        if (key.length === 1 && key >= "A" && key <= "Z") {
          onKeyPress(key);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameState]);

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50">
      <header className="w-full p-4 text-center border-b">
        <h1 className="text-3xl font-semibold text-black tracking-tighter">
          Tech Wordle
        </h1>
      </header>

      <div className="flex-1 flex flex-col items-center justify-between max-w-lg w-full p-4">
        <div className="w-full flex justify-center mb-8">
          <Board
            guesses={gameState.guesses}
            currentGuess={gameState.currentGuess}
            targetWord={gameState.targetWord}
          />
        </div>

        {showMessage && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded">
            {message}
          </div>
        )}

        <div className="w-full max-w-xl px-2">
          <Keyboard
            onKeyPress={onKeyPress}
            onEnter={onEnter}
            onDelete={onDelete}
            letterStates={letterStates}
          />
        </div>
      </div>
    </main>
  );
}
