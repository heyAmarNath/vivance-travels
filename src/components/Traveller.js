import React, { useState } from "react";

const Traveller = () => {
  const [cabinClass, setCabinClass] = useState("Economy");
  const [preferredAirlines, setPreferredAirlines] = useState([]);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [showTraveller, setShowTraveller] = useState(false);

  const handleAdultsChange = (action) => {
    if (action === "increment") {
      setAdults(adults + 1);
    } else if (action === "decrement" && adults > 1) {
      setAdults(adults - 1);
    }
  };

  const handleChildrenChange = (action) => {
    if (action === "increment") {
      setChildren(children + 1);
    } else if (action === "decrement" && children > 0) {
      setChildren(children - 1);
    }
  };

  const handleInfantsChange = (action) => {
    if (action === "increment") {
      setInfants(infants + 1);
    } else if (action === "decrement" && infants > 0) {
      setInfants(infants - 1);
    }
  };

  return (
    <div className="self-end relative w-48">
      <div
        className="px-2 py-2 text-black rounded-md bg-white hover:cursor-pointer"
        onClick={() => {
          setShowTraveller(!showTraveller);
        }}
      >
        {adults + children + infants}{" "}
        {adults + children + infants > 1 ? "Travellers " : "Traveller "}|
        {` ${cabinClass}`}
      </div>
      {showTraveller && (
        <div className="absolute right-0 bg-white w-60 mt-4 p-4 rounded-sm shadow-lg">
          <div className="w-6 h-6 rotate-45 absolute right-6 top-[-6] bg-white"></div>
          <div>
            <label className="flex flex-col">
              Cabin Class
              <select
                value={cabinClass}
                onChange={(e) => setCabinClass(e.target.value)}
                className="border-2 mt-1 border-orange-500 border-dotted px-2 py-1 outline-none"
              >
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First">First</option>
              </select>
            </label>
          </div>
          <div>
            <label className="flex flex-col">
              Preferred Airlines
              <select className="border-2 border-orange-500 border-dotted px-2 py-1">
                {preferredAirlines.map((airline) => (
                  <option key={airline.id} value={airline.id}>
                    {airline.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="flex flex-col my-2 border-t-2">
            Travellers
            <label className="flex items-center">
              Adults
              <span className="text-xs text-gray-800 w-full"> (12+) </span>
              <div className="flex justify-end items-center">
                <button
                  type="button"
                  className="bg-orange-500 rounded-sm text-white font-bold text-xl py-1 px-2 my-1"
                  onClick={() => handleAdultsChange("decrement")}
                >
                  -
                </button>
                <p
                  value={adults}
                  onChange={(e) => setAdults(parseInt(e.target.value))}
                  className="w-2/12 text-center mx-2"
                >
                  {adults}
                </p>
                <button
                  type="button"
                  className="bg-orange-500 rounded-sm text-white font-bold text-xl py-1 px-2 my-1"
                  onClick={() => handleAdultsChange("increment")}
                >
                  +
                </button>
              </div>
            </label>
            <label className="flex items-center w-full border-y-[1px] border-gray-300">
              Children
              <span className="text-xs text-gray-800 w-full"> (2-12) </span>
              <div className="flex justify-end  items-center">
                <button
                  type="button"
                  className="bg-orange-500 rounded-sm text-white font-bold text-xl py-1 px-2 my-1"
                  onClick={() => handleChildrenChange("decrement")}
                >
                  -
                </button>
                <p
                  value={children}
                  onChange={(e) => setChildren(parseInt(e.target.value))}
                  className="w-2/12 text-center mx-2"
                >
                  {children}
                </p>
                <button
                  type="button"
                  className="bg-orange-500 rounded-sm text-white font-bold text-xl py-1 px-2 my-1"
                  onClick={() => handleChildrenChange("increment")}
                >
                  +
                </button>
              </div>
            </label>
            <label className="flex items-center">
              Infants
              <span className="text-xs text-gray-800 w-full"> (0-2) </span>
              <div className="flex justify-end items-center">
                <button
                  type="button"
                  className="bg-orange-500 rounded-sm text-white font-bold text-xl py-1 px-2 my-1"
                  onClick={() => handleInfantsChange("decrement")}
                >
                  -
                </button>
                <p
                  value={infants}
                  onChange={(e) => setInfants(parseInt(e.target.value))}
                  className="w-2/12 text-center mx-2"
                >
                  {infants}
                </p>
                <button
                  type="button"
                  className="bg-orange-500 rounded-sm text-white font-bold text-xl py-1 px-2 my-1"
                  onClick={() => handleInfantsChange("increment")}
                >
                  +
                </button>
              </div>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Traveller;
