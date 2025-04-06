import { KeyboardProps } from "../app/types/game";

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
];

const Keyboard: React.FC<KeyboardProps> = ({
  onKeyPress,
  onEnter,
  onDelete,
  letterStates,
}) => {
  const handleClick = (key: string) => {
    if (key === "Enter") {
      onEnter();
    } else if (key === "⌫") {
      onDelete();
    } else {
      onKeyPress(key);
    }
  };

  const getKeyStyle = (key: string) => {
    if (key === "Enter" || key === "⌫") {
      return "bg-gray-300 text-sm px-3 text-black";
    }

    const state = letterStates.get(key);
    switch (state) {
      case "correct":
        return "bg-green-500 text-white";
      case "present":
        return "bg-yellow-500 text-white";
      case "absent":
        return "bg-gray-500 text-white";
      default:
        return "bg-gray-200 text-black";
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1.5">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => handleClick(key)}
              className={`
                md:h-14 md:min-w-[2.5rem] h-8 min-w-[1rem] flex-1 flex items-center justify-center
                rounded font-bold cursor-pointer
                transition-colors duration-300
                ${getKeyStyle(key)}
              `}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
