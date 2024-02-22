import { lazy, useEffect, useRef, useState } from "react";
import { MdOutlineFlight } from "react-icons/md";
import Button from "./components/Button";
import SuggestInput from "./components/SuggestInput";
import { BiTransferAlt } from "react-icons/bi";
import DateInput from "./components/DateInput";
import BasicMenu from "./components/Menu";
import CustomMenu from "./components/CustomMenu";
import Box from "./components/Box";
import Economy from "./components/EconomyMenu";
import axios from "axios";


const ECO = [
  {
    element: <div>Economy</div>,
    key: "Economy",
  },
  {
    element: <div>Premium Economy</div>,
    key: "Premium-Economy",
  },
  {
    element: <div>Business</div>,
    key: "Business",
  },
  {
    element: <div>First Class</div>,
    key: "First-Class",
  },
];

function App() {
  const [type, setType] = useState("OneWay");
  const [cities, setCities] = useState([{ lazy: true }, { lazy: true }]);
  const [passenger, setPassenger] = useState({
    adult: 0,
    children: 0,
    infants: 0,
  });
  const [SeatClass, setSeatClass] = useState({
    element: <div>Economy</div>,
    key: "Economy",
  });
  const dateRef=useRef()
  const [date, setDate] = useState()
  const [airports,setAirports]=useState([])
  useEffect(()=>{
    const fetch=async()=>{
      try {
        const res=await axios.get("https://enterpise.s3.ap-southeast-1.amazonaws.com/resources/airport.json")
        console.log(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetch()
  },[])
  
  return (
    <div
      style={{
        backgroundImage:
          "url('https://assets.wego.com/image/upload/c_fill,fl_lossy,q_auto:best,f_auto,w_2560/v1597920831/web/hero_images/bd_1.jpg')",
      }}
      className="bg-cover bg-center min-h-screen "
    >
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

          {cities
            .slice(0, type === "MultiCity" ? cities.length : 1)
            .map((doc, j) => (
              <div className="flex gap-2 flex-wrap items-center py-2">
                <SuggestInput placeholder={"From"} className={"flex-1"} />
                <div className="border border-gray-200 p-4 rounded-full -mx-1 ">
                  <BiTransferAlt className=" text-gray-400" size={25} />
                </div>
                <SuggestInput placeholder={"To"} className={"flex-1"} />
                <DateInput onClick={e=>{
                  cities[j]={...cities[j],date:e?.format()}
                  //console.log(e?.format());
                }}
                  placeholder={"Depart"}
                  className={"w-full md:flex-1"}
                />
                {type === "RoundTrip" && (
                  <DateInput onClick={e=>{
                    setDate(e?.format())
                  }} innerRef={dateRef}
                    placeholder={"Return"}
                    className={"w-full md:flex-1"}
                  />
                )}
                {type === "MultiCity" && (
                  <div
                    style={{ opacity: j !== 0 ? 1 : 0 }}
                    onClick={() => {
                      if (j === 0) {
                        return;
                      }
                      let city = cities.filter((c, i) => i < cities.length - 1);
                      setCities(city);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}

          <div className="flex justify-end items-center gap-4">
            <BasicMenu
              onClick={(e) => {
                setPassenger(e);
              }}
              data={passenger}
              title={`Passenger`}
            />
            <Economy
              onClick={(e) => {
                setSeatClass(e);
              }}
              data={ECO}
              value={SeatClass}
            />
            {/* <CustomMenu data={CARD} title={`4 Payment types`} /> */}
            <div className=" bg-green-400 px-4 py-2  rounded-3xl">Search</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
