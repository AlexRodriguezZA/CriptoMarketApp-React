import historyIcon from "../assets/historyIcon.svg";
import ListItem from "./ListItem";
import { useState } from "react";


const SidebarHistory = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={` ${
        open ? "w-72 bg-blue-700" : "w-2 "
      } bg-blue-700 h-screen p-5 absolute left-0 duration-300`}
    >
      <img
        src={historyIcon}
        className={`absolute rounded-full cursor-pointer -right-3 top-9 w-7 
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
       
      <ListItem open={open}/>
      <ListItem open={open}/>

      <ListItem open={open}/>
      <ListItem open={open}/>
      <ListItem open={open}/>

      </ul>

      <button className={`text-white origin-left font-medium text-md duration-200 ${
            !open && "scale-0"
          }`}>Delete</button>
    </div>
  );
};

export default SidebarHistory;
