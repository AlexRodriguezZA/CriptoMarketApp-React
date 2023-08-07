const ListItem = ({open, objectItem}) => {
  return (
    <li
      className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-200 text-sm items-center gap-x-8 `}
    >
      <span className={`${!open && "hidden"} origin-left duration-200`}>
        {objectItem.moneda} ↔️ {objectItem.criptomoneda}
      </span>
      <span className={`${!open && "hidden"} origin-left duration-200 text-slate-100`}>
        {objectItem.fecha}
      </span>
    </li>
  );
};

export default ListItem;
