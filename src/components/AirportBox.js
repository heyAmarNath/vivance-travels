import React, { useState, useEffect, useRef } from "react";

const AirportBox = ({ field }) => {
  const [airport, setAirport] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [airportSuggestions, setAirportSuggestions] = useState([]);

  const fetchAirportSuggestions = async (query) => {
    if (query === "") {
      setAirportSuggestions([]);
      return;
    }

    const url = `https://vymgmt.hawan.org/index.php/ajax/get_airport_code_list?term=${query}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAirportSuggestions(data);
    } catch (error) {
      console.error("Error fetching airport suggestions:", error);
    }
  };

  const handleInputChange = (event) => {
    const query = event.target.value;
    setAirport(query);
    fetchAirportSuggestions(query);
  };

  const handleSuggestionClick = (airport) => {
    setAirport(airport.value);
    setShowSuggestions(false);
  };

  const highlightMatchingText = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(query, "gi"); // Case-insensitive matching
    const match = text.match(regex);

    if (match) {
      const parts = text.split(regex);
      return parts.map((part, i) => (
        <span key={i}>
          {i > 0 ? <b>{match[i - 1]}</b> : ""}
          {part}
        </span>
      ));
    } else {
      return text;
    }
  };

  useEffect(() => {
    // fetchAirportSuggestions();
  }, []);

  return (
    <div className="relative">
      <p className="text-white">{field}</p>
      <input
        type="text"
        value={airport}
        onClick={() => setShowSuggestions(true)}
        onChange={(event) => handleInputChange(event)}
        placeholder={`Type ${field} City`}
        className="px-2 py-2 text-black rounded-sm w-52 hover:outline-2 outline-none hover:shadow-orange-500"
      />
      {showSuggestions && (
        <ul className="absolute bg-white w-48 mt-2 rounded-sm shadow-xl max-h-56 overflow-y-auto">
          {airportSuggestions.map((airport) => (
            <li
              key={airport.id}
              onClick={() => handleSuggestionClick(airport)}
              className="border-t-slate-300 border-[1px] px-2 py-1 even:bg-gray-100 hover:cursor-pointer"
            >
              {highlightMatchingText(airport.value, airport)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AirportBox;
