import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

import FooterFlix from "../Header/Footer";

export default function Layout() {
  return (
    <div className="space-y-5">
      <Header />
      <Outlet />
      <FooterFlix />
      {/* outlet ~ route con của route cha */}
    </div>
  );
}
