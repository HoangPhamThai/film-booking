import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { labelLogin, labelLogout, labelSignup, webTitle } from "../constants/dictionary";

export default function Header() {
  let { user } = useSelector((state) => state.userSlice);
  
  let handleLogout = () => {
    localStorage.removeItem("USER_INFOR");
    window.location.reload();
  };

  let renderMenu = () => {
    let cssBtn = "bg-white";
    
    if (user) {
      return (
        <>
          <span>{user.hoTen}</span>
          <Button className={cssBtn} onClick={handleLogout}>
            {labelLogout}
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button
            onClick={() => {
              window.location.href = "/login";
            }}
            className={cssBtn}
          >
            {labelLogin}
          </Button>
          <button className={cssBtn}>{labelSignup}</button>
        </>
      );
    }
  };
  return (
    <div className="h-24">
      <div className="shadow-lg shadow-black fixed w-full top-0 left-0 z-50 bg-slate-800">
        <div className="h-20 flex justify-between items-center container ">
          <NavLink to="/">
            <span className="text-2xl font-medium text-red-400">{webTitle}</span>
          </NavLink>
          <div className="space-x-5">{renderMenu()}</div>
        </div>
      </div>
    </div>
  );
}
