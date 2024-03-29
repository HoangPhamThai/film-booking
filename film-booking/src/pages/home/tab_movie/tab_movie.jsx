import React, { useEffect, useState } from "react";

import { Tabs } from "antd";
import List from "./list";
import { getFilmTheaterSchedule } from "../../../constants/api_path";
import { https } from "../../../services/api";

export default function TabMovie() {
  const [dsHeThongRap, setDsHeThongRap] = useState([]);
  useEffect(() => {
    https
      .get(getFilmTheaterSchedule)
      .then((res) => {
        setDsHeThongRap(res.data.content);
        console.log(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onChange = (key) => {
    console.log(key);
  };
  // start
  const items = dsHeThongRap.map((heThongRap) => {
    return {
      key: heThongRap.tenHeThongRap,
      label: <img className="w-16" src={heThongRap.logo} />,
      children: (
        <Tabs
          style={{ height: 600 }}
          tabPosition="left"
          items={heThongRap.lstCumRap.map((cumRap) => {
            return {
              key: cumRap.tenCumRap,
              label: (
                <div className="text-left w-64 truncate">
                  <h2 className="font-medium text-gray-400">{cumRap.tenCumRap}</h2>
                  <p className="text-gray-400">{cumRap.diaChi}</p>
                </div>
              ),
              children: <List listFilm={cumRap.danhSachPhim} />,
            };
          })}
        />
      ),
    };
  });
  // end
  return (
    <div className="bg-black rounded-lg">
      <Tabs
        style={{ height: 600 }}
        tabPosition="left"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
}
