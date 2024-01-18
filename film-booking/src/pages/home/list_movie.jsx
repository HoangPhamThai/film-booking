import React, { useEffect, useState } from "react";

import { Card, Tooltip } from "antd";
import Meta from "antd/es/card/Meta";
import { NavLink } from "react-router-dom";
import { getListFilm } from "../../constants/api_path";
import { https } from "../../services/api";

export default function ListMovie() {
  const [movieArr, setMovieArr] = useState([]);
  useEffect(() => {
    https
      .get(getListFilm)
      .then((res) => {
        setMovieArr(res.data.content);
        // card atnd
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
      {movieArr.slice(0, 20).map((item) => {
        return (
          <Card
            className="bg-slate-800 border-none mx-3 my-3"
            key={item.maPhim}
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <img
                className="h-64 object-cover"
                alt="example"
                src={item.hinhAnh}
              />
            }
          >
            <div className="text-gray-300 font-medium">{item.tenPhim}</div>
            <NavLink
              to={`/detail/${item.maPhim}`}
              className="bg-red-600 px-5 py-2 rounded text-white text-xl font-bold block mt-5 text-center"
            >
              Xem phim
            </NavLink>
          </Card>
        );
      })}
    </div>
  );
}
