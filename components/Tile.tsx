import { TileProps } from "../app/types/game";

const Tile: React.FC<TileProps> = ({ letter, state }) => {
  const stateStyles = {
    correct: "bg-green-500 text-white border-green-500",
    present: "bg-yellow-500 text-white border-yellow-500",
    absent: "bg-gray-500 text-white border-gray-500",
    empty: "bg-transparent text-black border-gray-300",
  };

  return (
    <div
      className={`
        md:w-20 md:h-20 h-14 w-14 border-2 flex items-center justify-center
        md:text-4xl text-2xl font-bold rounded-md m-0.5
        transition-colors duration-500
        ${stateStyles[state]}
      `}
    >
      {letter}
    </div>
  );
};

export default Tile;
