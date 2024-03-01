import { useState } from "react";
import TripSelector from "./TripSelector";
import BookingForm from "./BookingForm";
// import BookingForm from "./BookingFormTest";

const Search = () => {
  const [tripType, setTripType] = useState("oneWay");
  return (
    <div className="w-[75rem] mx-auto">
      <TripSelector tripType={tripType} setTripType={setTripType} />
      <BookingForm tripType={tripType} />
    </div>
  );
};

export default Search;
