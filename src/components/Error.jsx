import React from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";

const Error = () => {
  return (
    <div className="bg-red-500 text-white px-5 text-xl flex justify-center items-center gap-2 rounded-lg" >
      <BsFillExclamationCircleFill />
      Cargue todos los datos por favor
    </div>
  );
};

export default Error;
