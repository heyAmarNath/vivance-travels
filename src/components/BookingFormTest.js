// BookingForm.js
import React, { useState, useEffect } from "react";

function BookingForm({ tripType }) {
  const [returnDate, setReturnDate] = useState("");
  const [cabinClass, setCabinClass] = useState("economy");
  const [preferredAirlines, setPreferredAirlines] = useState([]);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  useEffect(() => {
    // Assume an API endpoint to fetch preferred airlines
    fetchPreferredAirlines().then((data) => setPreferredAirlines(data));
  }, []);

  const fetchPreferredAirlines = async () => {
    // Fetch data from your API
    // Example API response format:
    return await [
      { id: "1", name: "Airline 1" },
      { id: "2", name: "Airline 2" },
    ];
    // return await yourApiCall();
  };

  return (
    <form>
      <label>
        Departure City:
        <input type="text" />
      </label>
      <label>
        Arrival City:
        <input type="text" />
      </label>
      <label>
        Departure Date:
        <input type="date" />
      </label>
      {tripType !== "multiCity" && (
        <label>
          Return Date:
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            disabled={tripType !== "roundTrip"}
          />
        </label>
      )}
      <label>
        Cabin Class:
        <select
          value={cabinClass}
          onChange={(e) => setCabinClass(e.target.value)}
        >
          <option value="economy">Economy</option>
          <option value="business">Business</option>
          <option value="first">First</option>
        </select>
      </label>
      <label>
        Preferred Airlines:
        <select>
          {preferredAirlines.map((airline) => (
            <option key={airline.id} value={airline.id}>
              {airline.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Adults:
        <input
          type="number"
          min="1"
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
        />
      </label>
      <label>
        Children:
        <input
          type="number"
          min="0"
          value={children}
          onChange={(e) => setChildren(e.target.value)}
        />
      </label>
      <label>
        Infants:
        <input
          type="number"
          min="0"
          value={infants}
          onChange={(e) => setInfants(e.target.value)}
        />
      </label>
      <button type="submit">Search Flights</button>
    </form>
  );
}

export default BookingForm;
