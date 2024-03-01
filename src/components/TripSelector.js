const TripSelector = ({ tripType, setTripType }) => {
  return (
    <div className="px-20 flex justify-center">
      <button
        className={`m-4 shadow-lg px-6 py-3 rounded-md ${
          tripType === "oneWay"
            ? "bg-orange-500 text-white"
            : "bg-white hover:bg-slate-100"
        }`}
        onClick={() => setTripType("oneWay")}
      >
        One Way
      </button>
      <button
        className={`m-4 px-6 py-3 shadow-lg rounded-md  ${
          tripType === "roundTrip"
            ? "bg-orange-500 text-white"
            : "bg-white hover:bg-slate-100"
        }`}
        trip-btn
        onClick={() => setTripType("roundTrip")}
      >
        Round Trip
      </button>
      <button
        className={`m-4  px-6 py-3 shadow-lg rounded-md ${
          tripType === "multiCity"
            ? "bg-orange-500 text-white"
            : "bg-white hover:bg-slate-100"
        }`}
        trip-btn
        onClick={() => setTripType("multiCity")}
      >
        Multi City
      </button>
    </div>
  );
};

export default TripSelector;
