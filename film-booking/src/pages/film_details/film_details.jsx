import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { Button, Rate } from "antd";
import { https } from "../../services/api";
import { labelBookTicket } from "../../constants/dictionary";
import { routePath } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { chooseFilmForBooking } from "../../redux/ticketBookingSlice";
import Home from "../home/home";
import ListMovie from "../home/list_movie";

export default function FilmDetails() {
  const [detail, setDetail] = useState();
  const dispatch = useDispatch();

  let { maPhim } = useParams();
  useEffect(() => {
    https
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
      .then((res) => {
        setDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="container flex items-center space-x-5 mt-[100px]">
        <img
          className="w-64 h-96 rounded shadow-lg shadow-red-600"
          src={detail?.hinhAnh}
          alt=""
        />
        <div className="space-y-5">
          <h1 className="text-3xl font-medium text-white">{detail?.tenPhim}</h1>
          <p className="text-gray-300">{detail?.moTa}</p>
          {/* rating antd */}
          <Rate allowHalf value={detail?.danhGia} style={{ color: "green" }} />
          <div>
            <NavLink
              to={routePath.ticketBooking}
              className="bg-red-600 px-5 py-2 rounded text-white text-xl font-bold block mt-5 text-center w-[100px]"
              onClick={() => {
                dispatch(chooseFilmForBooking(detail));
              }}
            >
              {labelBookTicket}
            </NavLink>
          </div>
        </div>
      </div>
      
      <div className="w-[60%] mx-auto mt-[100px]">
        <div className="text-2xl font-bold text-white mb-[20px]">Danh sách phim khác</div>
        <ListMovie />
      </div>
    </div>
  );
}
