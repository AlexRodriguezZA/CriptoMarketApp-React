import React from "react";

const ListItem = ({open}) => {
  return (
    <li
      className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-200 text-sm items-center gap-x-8 `}
    >
      <span className={`${!open && "hidden"} origin-left duration-200`}>
        ARS ↔️ BTC
      </span>
      <span className={`${!open && "hidden"} origin-left duration-200 text-slate-100`}>
        24/06/2023
      </span>
    </li>
  );
};

export default ListItem;
