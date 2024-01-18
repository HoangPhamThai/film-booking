import React from "react";
import { Outlet } from "react-router-dom";
import FooterFlix from "../components/Footer";
import Header from "../components/Header";


export default function HomeTemplate() {
  return (
    <div className="bg-slate-500">
      <Header />
      <Outlet />
      <FooterFlix />
    </div>
  );
}
