import React, { useState } from "react";

export interface Props {
  type: string;
  text: string;
  className?: string;
}
const Popover: React.FC<Props> = ({ type, text, className }) => {
  return (
    <div
      className={`absolute left-0 right-0 flex justify-center items-center z-10 ${className} `}
    >
      <div
        className={`${
          type === "info" ? "bg-[#ff4b1f]" : "bg-red-800"
        } p-2 text-indigo-100 leading-none rounded-full flex inline-flex`}
        role="tooltip"
      >
        <p className="mr-2 text-left ">{text}</p>
      </div>
    </div>
  );
};

export default Popover;
