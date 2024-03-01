import React from "react";
import { flightResult } from "../Assets/flightSearchList";

const FlightCard = () => {
  const flightList = [...flightResult.Search.FlightDataList.JourneyList[0]];

  const firstFlightCard = flightList[0];
  console.log(firstFlightCard);
  const { FlightDetails, Price, Attr, ResultToken } = firstFlightCard;

  return (
    <div className="bg-gray-100 hover:shadow-lg flex justify-around mx-auto mt-10 items-center py-2 border-2">
      <div className="flex flex-col items-center">
        <img
          src="https://vivancetravels.com/extras/system/library/images/airline_logo/UK.gif"
          alt="logo"
        />
        <p>{FlightDetails.Details[0][0].OperatorName}</p>
        <p className="text-sm">
          {FlightDetails.Details[0][0].DisplayOperatorCode}{" "}
          {FlightDetails.Details[0][0].FlightNumber}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-blue-500 text-2xl">21:20</p>
        <p>{`${FlightDetails.Details[0][0].Origin.CityName} (${FlightDetails.Details[0][0].Origin.AirportCode})`}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-gray-500 text-sm">{`${FlightDetails.Details[0][0].Destination.DateTime-FlightDetails.Details[0][0].DateTime}`}</p>
        <p className="text-xs">1 Stop</p>
        <p className="text-sm">AMD</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-blue-500 text-2xl">06:05</p>
        <p>{`${FlightDetails.Details[0][0].Destination.CityName} (${FlightDetails.Details[0][0].Destination.AirportCode})`}</p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-blue-500 text-2xl">{`${Price.TotalDisplayFare}`}</p>
        <p className="text-sm text-gray-600">{`${
          Attr.IsRefundable === true ? "Refundable" : "Non-Refundable"
        }`}</p>
        <p className="text-sm text-gray-600">{`${Price.PassengerBreakup.ADT.FlightAttr[1][0].CabinClass}`}</p>
        <button className="bg-orange-500 px-4 py-2 rounded-md text-white">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
