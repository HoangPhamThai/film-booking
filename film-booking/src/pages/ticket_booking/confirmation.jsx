import { Divider } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { pricePerSeat } from "../../constants/constants";

import {
  labelPrice,
  labelTotalPrice,
  labelSeatId,
  labelShowTime,
} from "../../constants/dictionary";
import { formatDateTime } from "../../utils/utils";

export default function Confirmation() {
  const cellStyle = "border border-slate-600 px-3 py-2";

  let listSeat = useSelector(
    (state) => state.ticketBookingSlice.listSelectedSeat
  );
  let seletectFilm = useSelector(
    (state) => state.ticketBookingSlice.selectedFilm
  );

  const getTotalPrice = () => {
    return listSeat.reduce((total, _, currentIndex) => {
      return total + currentIndex * pricePerSeat;
    }, 0);
  };

  const renderSeatSummary = () => {
    return listSeat.map((item) => {
      return (
        <tr>
          <td className={cellStyle}>{item}</td>
          <td className={cellStyle}>{pricePerSeat}</td>
        </tr>
      );
    });
  };

  return (
    <div className="w-[300px] mx-auto text-center ">
      <div className="text-2xl text-red-400 font-bold">
        {seletectFilm?.tenPhim}
      </div>

      <Divider />

      <div>
        <div className="w-2/3">{labelShowTime}</div>
        <div className="w-1/3">
          {formatDateTime(seletectFilm?.ngayKhoiChieu)}
        </div>
      </div>

      <table className="bg-slate-600 table-auto border border-slate-500 text-white">
        <thead>
          <tr>
            <th className={cellStyle}>{labelSeatId}</th>
            <th className={cellStyle}>{labelPrice}</th>
          </tr>
        </thead>
        <tbody>
          {renderSeatSummary()}
          <tr>
            <td className={cellStyle}>{labelTotalPrice}</td>
            <td className={cellStyle}>{getTotalPrice()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
