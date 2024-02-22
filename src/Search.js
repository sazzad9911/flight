import React, { useState } from "react";
import Card from "./components/Card";
import { SliderMark, Slider } from "@mui/material";
import Box from "./components/Box";
const BAG = [
  {
    label: "20 Kg",
  },
  {
    label: "25 Kg",
  },
  {
    label: "30 Kg",
  },
];
const STEP = [
  {
    label: "1 Stop Flight",
  },
  {
    label: "2 Stop Flight",
  },
  {
    label: "Direct Flight",
  },
];
const TIME = [
  {
    label: "Early morning 3AM-7AM",
  },
  {
    label: "Morning 7AM-12PM",
  },
  {
    label: "Afternoon 12PM-4PM",
  },
  {
    label: "Evening 4PM-9PM",
  },
  {
    label: "Night 9PM-12PM",
  },
  {
    label: "MidNight 12PM-3AM",
  },
];
const AIR = [
  {
    label: "Air India",
  },
  {
    label: "Biman Bangladesh Airlines",
  },
  {
    label: "Quater Airways",
  },
  {
    label: "Singapore Airlines",
  },
  {
    label: "Srilanka Airlines",
  },
  
];

export default function Search() {
  const [tab,setTab]=useState(0)
  return (
    <div className="container mx-auto">
      <div className="flex overflow-auto ">
        <div className="min-w-[300px] hidden md:block mx-2 my-4 bg-white shadow-md px-4 py-4 overflow-x-hidden overflow-y-scroll">
          <div className="rounded-md overflow-hidden">
            <div className="bg-gray-200 text-center py-4">27 FEB 2024</div>
            <div className="bg-green-200 text-center py-4 text-3xl font-bold text-green-700">
              15
            </div>
            <div className="bg-gray-200 text-center py-4">27 FEB 2024</div>
          </div>
          <div>
            <div className="my-4 text-lg font-medium">Filters</div>
            <div className="font-medium">Price Range</div>
            <Slider
              value={[10, 200]}
              size={"medium"}
              defaultValue={[100, 120]}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
            <div className="flex justify-between">
              <div>32423</div>
              <div>43234</div>
            </div>
            <div className="font-medium my-2">Baggage</div>
            <Box data={BAG} />
            <div className="font-medium my-2">No of Stops</div>
            <Box data={STEP} />
            <div className="font-medium">Flight Timings</div>
            <div className="">Based On Departure Location</div>
            <Box data={TIME} />
            <div className="">Based On Arrival Location</div>
            <Box data={TIME}/>
            <div className="font-medium my-2">Airlines</div>
            <Box data={AIR}/>
          </div>
        </div>
        <div className=" flex-1">
          <div className="grid grid-cols-2 shadow-md mx-4 my-4">
            <div onClick={e=>setTab(0)} className={`text-center border-b-2 ${tab==0?"border-green-500":""} cursor-pointer`}>
              <div className="text-xl ">Cheapest</div>
              <div>from ₨ 39416.00 • 02H, 45M, 00S</div>
            </div>
            <div onClick={e=>setTab(1)} className={`text-center border-b-2 ${tab==1?"border-green-500":""} cursor-pointer`}>
              <div className="text-xl ">Fastest</div>
              <div>from ₨ 431143.00 • 02H, 20M, 00S</div>
            </div>
          </div>
          <div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
