
import { routePath } from "./constants/constants";
import HomeTemplate from "./templates/home-template";
import Admin from "./pages/admin/admin";
import TicketBooking from "./pages/ticket_booking/ticket_booking";
import Home from "./pages/home/home";
import FilmDetails from "./pages/film_details/film_details";
import DettailPage from "./pages/DetailPage/DetailPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePath.home} element={<HomeTemplate />}>
          <Route path={routePath.home} element={<Home />} />
          <Route path="/detail/:maPhim" element={<DettailPage />} />
          <Route path={routePath.ticketBooking} element={<TicketBooking />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
