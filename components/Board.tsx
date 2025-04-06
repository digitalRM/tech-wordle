import { BoardProps } from "../app/types/game";
import { computeGuess, MAX_GUESSES, WORD_LENGTH } from "../app/utils/game";
import Tile from "./Tile";

const Board: React.FC<BoardProps> = ({ guesses, currentGuess, targetWord }) => {
  const rows = Array(MAX_GUESSES).fill(null);

  return (
    <div className="grid gap-1">
      {rows.map((_, rowIndex) => {
        const isCurrentRow = rowIndex === guesses.length;
        const guess = isCurrentRow ? currentGuess : guesses[rowIndex] || "";
        const states = guesses[rowIndex]
          ? computeGuess(guesses[rowIndex], targetWord)
          : Array(WORD_LENGTH).fill("empty");

        return (
          <div key={rowIndex} className="flex gap-1">
            {Array(WORD_LENGTH)
              .fill(null)
              .map((_, colIndex) => (
                <Tile
                  key={colIndex}
                  letter={guess[colIndex] || ""}
                  state={isCurrentRow ? "empty" : states[colIndex]}
                />
              ))}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
