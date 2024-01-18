import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routePath } from "./constants/constants";
import HomeTemplate from "./templates/home-template";
import Admin from "./pages/admin/admin";
import TicketBooking from "./pages/ticket_booking/ticket_booking";
import Home from "./pages/home/home";
import FilmDetails from "./pages/film_details/film_details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePath.home} element={<HomeTemplate />}>
          <Route path={routePath.home} element={<Home />} />
          <Route path="/detail/:maPhim" element={<FilmDetails />} />
          <Route path={routePath.ticketBooking} element={<TicketBooking />} />
        </Route>
        <Route path={routePath.admin} element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
