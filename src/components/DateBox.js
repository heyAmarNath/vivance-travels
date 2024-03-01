import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../datepicker.css";

const DateBox = ({ tripType, field }) => {
  const [date, setDate] = useState("");

  return (
    <div>
      <label>
        <p className="text-white">{field}</p>
        <DatePicker
          className="px-2 py-2 text-black rounded-sm outline-none"
          placeholderText="Select Date"
          selected={date}
          onChange={(date) => setDate(date)}
          monthsShown={2}
          minDate={new Date()}
          dateFormat={"dd-MM-yyyy"}
          disabled={tripType === "roundTrip"}
        />
      </label>
    </div>
  );
};

export default DateBox;
