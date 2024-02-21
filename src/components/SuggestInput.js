import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useOutsideClick from "../hooks/useOutSideClick";

export default function SuggestInput({ className, placeholder }) {
  const [focus, onFocus] = useState(false);
  const ref = useRef();
  
  return (
    <div  
      className={`${className}`}>
      <input
        ref={ref}
        onBlur={() => onFocus(false)}
        onFocus={() => onFocus(true)}
        className={`border border-gray-200 focus:outline-green-400 rounded-md px-2 py-4 w-full`}
        placeholder={placeholder}></input>
      {focus ? (
        <div
          style={{
            width: ref?.current?.clientWidth,
          }}
          className={`absolute bg-white  shadow-lg px-2 py-2`}>
          <p className=" font-medium">Popular Cities</p>

          <div className="flex gap-4">
            <div>
              <li className="hover:bg-green-400 cursor-pointer px-1  py-1">
                Dhaka
              </li>
              <li className="hover:bg-green-400 cursor-pointer px-1  py-1">
                Chittagong
              </li>
              <li className="hover:bg-green-400 cursor-pointer px-1  py-1">
                Sylhet
              </li>
              <li className="hover:bg-green-400 cursor-pointer px-1  py-1">
                Cox's Bazar
              </li>
              <li className="hover:bg-green-400 cursor-pointer px-1  py-1">
                Rajshahi
              </li>
            </div>
            <div>
              <li className="hover:bg-green-400 cursor-pointer px-1  py-1">
                Jessore
              </li>
              <li className="hover:bg-green-400 cursor-pointer px-1  py-1">
                Barisal
              </li>
              <li className="hover:bg-green-400 cursor-pointer px-1  py-1">
                Pabna
              </li>
              <li className="hover:bg-green-400 cursor-pointer px-1  py-1">
                Saidpur
              </li>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
