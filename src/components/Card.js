import React from "react";

export default function Card() {
  return (
    <div className="bg-white shadow-md rounded-md px-5 py-4 gap-10 flex justify-between flex-wrap my-4 mx-4">
      <table className="flex-1">
        <tr className="bg-gray-100 text-gray-500 font-medium  ">
          <th className="px-4">Airline</th>
          <th className="px-4">Details</th>
          <th className="px-4">Departure</th>
          <th className="px-4">Arrival</th>
          <th className="px-4">Duration</th>
          <th className="px-4">Baggage</th>
        </tr>
        <tr>
          <td className="">
            <div className="flex h-full w-full justify-center items-center">
              <img
                className="w-10 h-10 rounded-full "
                src="https://gtrs-airlineimages.s3.ap-southeast-1.amazonaws.com/icon/BG.png"
                alt="f"
              />
            </div>
          </td>
          <td className="px-4 py-2 text-center">Details</td>
          <td className="px-4 py-2">
            <p className="font-semibold text-xl text-center">DAC</p>
            <p className="text-gray-400 text-sm text-center">27 Feb 2020</p>
            <p className="text-gray-400 text-sm text-center">12:40</p>
            <p className="text-gray-400 text-xs text-center">Terminal 2</p>
          </td>
          <td className="px-4 py-2">
            <p className="font-semibold text-xl text-center">DAC</p>
            <p className="text-gray-400 text-sm text-center">27 Feb 2020</p>
            <p className="text-gray-400 text-sm text-center">12:40</p>
            <p className="text-gray-400 text-xs text-center">Terminal 2</p>
          </td>
          <td className="px-4 py-2 text-center">2 H 25 M</td>
          <td className="px-4 py-2">
            <p className=" text-sm text-center">30 Kg for</p>
            <p className=" text-sm text-center">ADT</p>
          </td>
        </tr>
      </table>
      <div>
        <div className="text-gray-600 text-xs text-center">Per 1 Passenger</div>
        <div className="text-lg font-semibold text-center">Rs 3823.00</div>
        <div className="px-4 cursor-pointer border py-3 rounded-md border-green-500 text-green-600">
          Select Flight
        </div>

        <div className="text-gray-600 text-xs text-center">All Passenger</div>
        <div className="text-lg font-semibold text-center">Rs 3823.00</div>
      </div>
    </div>
  );
}
