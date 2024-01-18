import moment from "moment";
import React from "react";

export default function List({ listFilm }) {

  return (
    <div style={{ height: 600 }} className=" space-y-5 overflow-y-scroll">
      {listFilm.map((film) => {
        return (
          <div className="flex space-x-5" key={film.maPhim}>
            <img className="w-40 h-48 object-cover" src={film.hinhAnh} alt="" />
            <div>
              <h2 className="text-medium" >{film.tenPhim}</h2>
              <div className="grid grid-cols-3 gap-5">
                {film.lstLichChieuTheoPhim.map((item) => {
                  return (
                    <span className="bg-red-500 px-5 py-2 rounded text-white">
                      {moment(item.ngayChieuGioChieu).format("DD/mm/yyyy  hh:mm")}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
// npm run build
