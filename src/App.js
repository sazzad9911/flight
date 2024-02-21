import { useState } from "react";
import { MdOutlineFlight } from "react-icons/md";
import Button from "./components/Button";
import SuggestInput from "./components/SuggestInput";
import { BiTransferAlt } from "react-icons/bi";
import DateInput from "./components/DateInput";
import BasicMenu from "./components/Menu";

const PASS=[
  {
      element:<div>
        <div></div>
      </div>
  }
]
function App() {
  const [type, setType] = useState("OneWay");
  return (
    <div
      style={{
        backgroundImage:
          "url('https://assets.wego.com/image/upload/c_fill,fl_lossy,q_auto:best,f_auto,w_2560/v1597920831/web/hero_images/bd_1.jpg')",
      }}
      className="bg-cover bg-center min-h-screen ">
      <div className="container mx-auto flex justify-center items-center min-h-screen">
        <div className="bg-white w-full mx-10 min-h-20 rounded-lg shadow-md p-4 ">
          <div className="flex items-center gap-2">
            <MdOutlineFlight size={25} className=" text-green-400" />
            Flights
          </div>
          <div className="flex gap-4 py-2">
            <Button
              onClick={setType}
              type={type}
              value={"OneWay"}
              title={"One-way"}
            />
            <Button
              onClick={setType}
              type={type}
              value={"RoundTrip"}
              title={"Round-trip"}
            />
            <Button
              onClick={setType}
              type={type}
              value={"MultiCity"}
              title={"Multi-city"}
            />
          </div>
          <div className="flex gap-2 flex-wrap items-center py-2">
            <SuggestInput placeholder={"From"} className={"flex-1"} />
            <div className="border border-gray-200 p-4 rounded-full -mx-1 ">
              <BiTransferAlt className=" text-gray-400" size={25} />
            </div>
            <SuggestInput placeholder={"To"} className={"flex-1"} />
            <DateInput
              placeholder={"Depart"}
              className={"w-full md:flex-1"}
            />
          </div>
          <div className="flex justify-end items-center gap-4">
            <BasicMenu data={PASS} title={`Passenger`}/>
            <BasicMenu title={`Economy`}/>
            <BasicMenu title={`4 Payment types`}/>
            <div className=" bg-green-400 px-4 py-2  rounded-3xl">
              Search
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
