import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/Header";

export default function HomeTemplate() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
