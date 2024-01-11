import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routePath } from "./constants/constants";
import HomeTemplate from "./templates/home-template";
import Admin from "./pages/admin/admin";
import TicketBooking from "./pages/ticket-booking/ticket-booking";
import Home from "./pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePath.home} element={<HomeTemplate />}>
          <Route path={routePath.ticketBooking} element={<Home />} />
          <Route path={routePath.ticketBooking} element={<TicketBooking />} />
        </Route>
      </Routes>
      <Route path={routePath.admin} element={<Admin />}></Route>
    </BrowserRouter>
  );
}

export default App;
