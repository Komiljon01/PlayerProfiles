import { FaFontAwesomeFlag } from "react-icons/fa";
import { IoFootball } from "react-icons/io5";
import player from "../assets/player.png";
import { IoMdClose } from "react-icons/io";

function PlayersList() {
  return (
    <div className="h-fit grid grid-cols-2 bg-white p-4 rounded-md shadow-lg items-center relative">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-1">
          <IoFootball className="w-6 h-6" />
          <p className="font-bold text-xl">Mohamed Salah</p>
        </div>
        <div className="flex items-center gap-1">
          <FaFontAwesomeFlag className="w-6 h-6" />
          <p className="font-bold text-xl">Egypt</p>
        </div>
      </div>

      <img src={player} alt="player image" className="h-24 ml-auto" />

      <span
        className="absolute -right-3 -top-3 bg-slate-300 rounded-full p-1 hover:bg-slate-400 transition-all"
        role="button"
      >
        <IoMdClose className="w-5 h-5" />
      </span>
    </div>
  );
}

export default PlayersList;
