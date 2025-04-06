export type LetterState = "correct" | "present" | "absent" | "empty";

export type GameStatus = "playing" | "won" | "lost";

export interface GameState {
  currentGuess: string;
  guesses: string[];
  targetWord: string;
  gameStatus: GameStatus;
  currentRow: number;
}

export interface KeyboardKey {
  letter: string;
  state: LetterState;
}

export interface TileProps {
  letter: string;
  state: LetterState;
}

export interface BoardProps {
  guesses: string[];
  currentGuess: string;
  targetWord: string;
}

export interface KeyboardProps {
  onKeyPress: (key: string) => void;
  onEnter: () => void;
  onDelete: () => void;
  letterStates: Map<string, LetterState>;
}
