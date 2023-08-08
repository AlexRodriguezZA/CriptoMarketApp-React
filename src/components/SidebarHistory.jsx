import historyIcon from "../assets/historyIcon.svg";
import ListItem from "./ListItem";
import { useState } from "react";
import { useLocalStorage } from "../context/LocalStorage";

const SidebarHistory = () => {
  const [open, setOpen] = useState(false);
  const {getHistory, deleteHistory } = useLocalStorage();

  const history = getHistory();

  const handleDeleteHistory = () => {
    deleteHistory();
    window.location.replace("")
  };

  return (
    <div
      className={` ${
        open ? "w-72 bg-blue-700" : "w-10 "
      } h-screen p-5 absolute left-0 duration-300 md:bg-blue-700 `}
    >
      <img
        src={historyIcon}
        className={`absolute rounded-full cursor-pointer -right-1 top-3 w-7 
             border-2 border-black ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />

      <div className="flex gap-x-4 items-center justify-center">
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Historial
        </h1>
      </div>
      <ul className="pt-6">
        {history &&
          history.map((item, index) => (
            <ListItem key={index} open={open} objectItem={item} />
          ))}
      </ul>

      <button
        className={`text-white origin-left font-medium text-md duration-200 ${
          !open && "scale-0"
        }`}
        onClick={() => handleDeleteHistory()}
      >
        Delete
      </button>
    </div>
  );
};

export default SidebarHistory;
