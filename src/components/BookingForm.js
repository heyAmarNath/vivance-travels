import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Traveller from "./Traveller";
import { Link } from "react-router-dom";
import DateBox from "./DateBox";
import AirportBox from "./AirportBox";

function BookingForm({ tripType }) {
  const [departureAirport, setDepartureAirport] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");
  const [showDepartureSuggestions, setShowDepartureSuggestions] =
    useState(false);
  const [showDestinationSuggestions, setShowDestinationSuggestions] =
    useState(false);
  const [departureAirportSuggestions, setDepartureAirportSuggestions] =
    useState([]);
  const [destinationAirportSuggestions, setDestinationAirportSuggestions] =
    useState([]);
  const departureInputRef = useRef(null);
  const destinationInputRef = useRef(null);

  const fetchAirportSuggestions = async (query, field) => {
    if (query === "") {
      setDepartureAirportSuggestions([]);
      setDestinationAirportSuggestions([]);
      return;
    }

    const url = `https://vymgmt.hawan.org/index.php/ajax/get_airport_code_list?term=${query}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (field == "departure") setDepartureAirportSuggestions(data);
      else setDestinationAirportSuggestions(data);
    } catch (error) {
      console.error("Error fetching airport suggestions:", error);
    }
  };

  const handleInputClick = (field) => {
    if (field === "departure") {
      setShowDepartureSuggestions(true);
      setShowDestinationSuggestions(false);
    } else {
      setShowDepartureSuggestions(false);
      setShowDestinationSuggestions(true);
    }
  };

  const handleInputChange = (event, field) => {
    const query = event.target.value;
    if (field === "departure") {
      setDepartureAirport(query);
      fetchAirportSuggestions(query, field);
    } else {
      setDestinationAirport(query);
      fetchAirportSuggestions(query, field);
    }
  };

  const handleSuggestionClick = (airport, field) => {
    if (field === "departure") {
      setDepartureAirport(airport.value);
      setShowDepartureSuggestions(false);
    } else {
      setDestinationAirport(airport.value);
      setShowDestinationSuggestions(false);
    }
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

  useEffect(() => {}, [
    departureAirportSuggestions,
    destinationAirportSuggestions,
  ]);

  return (
    <form className="bg-black bg-opacity-50 py-10 px-4 w-[75rem] flex justify-around items-center relative">
      <div className="relative">
        <p className="text-white">From</p>
        <input
          type="text"
          value={departureAirport}
          onClick={() => handleInputClick("departure")}
          onChange={(event) => handleInputChange(event, "departure")}
          ref={departureInputRef}
          placeholder="Type Departure City"
          className="px-2 py-2 text-black rounded-sm w-52 hover:outline-2 outline-none hover:shadow-orange-500"
        />
        {showDepartureSuggestions && (
          <ul className="absolute bg-white w-48 mt-2 rounded-sm shadow-xl max-h-56 overflow-y-auto">
            {departureAirportSuggestions.map((airport) => (
              <li
                key={airport.id}
                onClick={() => handleSuggestionClick(airport, "departure")}
                className="border-t-slate-300 border-[1px] px-2 py-1 even:bg-gray-100 hover:cursor-pointer"
              >
                {highlightMatchingText(airport.value, departureAirport)}
              </li>
            ))}
          </ul>
        )}{" "}
      </div>
      {/* <AirportBox field="Departure" /> */}
      {tripType !== "multiCity" && (
        <button
          type="button"
          className="bg-white box-border border-2 border-black text-black absolute left-[13rem] ml-3 top-16 mt-1 p-1 rounded-full z-10"
          onClick={() => {
            setDepartureAirport(destinationAirport);
            setDestinationAirport(departureAirport);
          }}
        >
          {"=="}
        </button>
      )}
      <div className="relative">
        <p className="text-white">To</p>
        <input
          type="text"
          value={destinationAirport}
          onClick={() => handleInputClick("destination")}
          onChange={(event) => handleInputChange(event, "destination")}
          ref={destinationInputRef}
          placeholder="Type Destination City"
          className="px-2 py-2 text-black rounded-sm w-52 hover:shadow-lg outline-none hover:shadow-slate-500"
        />
        {showDestinationSuggestions && (
          <ul className="absolute bg-white w-48 mt-2 rounded-sm shadow-xl max-h-56 overflow-y-auto">
            {destinationAirportSuggestions.map((airport) => (
              <li
                key={airport.id}
                onClick={() => handleSuggestionClick(airport, "destination")}
                className="border-t-slate-300 border-[1px] px-2 py-1 even:bg-gray-100 hover:cursor-pointer"
              >
                {highlightMatchingText(airport.value, destinationAirport)}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <AirportBox field="Destination" /> */}

      {/* <label className="travel-form">
        <p className="text-white">Departure</p>
        <DatePicker
          className="px-2 py-2 text-black rounded-sm outline-none"
          placeholderText="Select Date"
          selected={departureDate}
          onChange={(date) => setDepartureDate(date)}
          selectsStart
          monthsShown={2}
          dateFormat={"dd-MM-yyyy"}
        />
      </label> */}
      <DateBox field="Deaparture" />
      {tripType !== "multiCity" && (
        <DateBox field="Return" tripType={tripType} />
      )}

      {/* {tripType !== "multiCity" && (
        <label className="travel-form">
          <p className="text-white">Return</p>
          <DatePicker
            className="px-2 py-2 text-black rounded-sm"
            placeholderText="Select Date"
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            selectsStart
            monthsShown={2}
            startDate={departureDate}
            dateFormat={"dd-MM-yyyy"}
            disabled={tripType !== "roundTrip"}
          />
        </label>
      )} */}
      <div className="self-end relative">
        <Traveller />
      </div>
      <div className="self-end">
        <Link to={"/flight-search"}>
          <button
            className="py-2 px-4 bg-orange-500 text-white rounded-sm hover:bg-orange-600"
            type="submit"
          >
            Search
          </button>
        </Link>
      </div>
    </form>
  );
}

export default BookingForm;
