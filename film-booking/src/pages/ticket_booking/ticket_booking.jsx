import React from "react";
import Confirmation from "./confirmation";
import Seats from "./seat";

export default function TicketBooking() {
  return (
    <div className="grid grid-cols-2">
      <div className="w-[715px] ml-[100px]">
        <Seats />
      </div>
      <div>
        <Confirmation />
      </div>
    </div>
  );
}
