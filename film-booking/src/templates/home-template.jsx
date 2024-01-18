import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

export default function HomeTemplate() {
  return (
    <div className="bg-slate-500">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
