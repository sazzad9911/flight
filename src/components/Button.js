import React from "react";

export default function Button({ title, onClick, value,type }) {
  return (
    <div
      onClick={()=>onClick&&onClick(value)}
      className={` cursor-pointer px-4 py-[6px] bg-gray-100 rounded-2xl ${
        value===type ? " bg-green-100 text-green-500" : ""
      }`}>
      {title}
    </div>
  );
}
