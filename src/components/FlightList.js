import React from "react";
import FlightCard from "./FlightCard";
import DateBox from "./DateBox";
import AirportBox from "./AirportBox";

const FlightList = () => {
  return (
    <div className="w-[75rem]">
      {/* <AirportBox field="Departure" />
      <AirportBox field="Destination" />
      <DateBox tripType="oneWay" field="Departure" /> */}
      <FlightCard />
    </div>
  );
};

export default FlightList;
