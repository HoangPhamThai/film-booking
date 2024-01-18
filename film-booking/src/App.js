import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPages from "./pages/DetailPage/DetailPages";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./layout/Layout";
import DetailPage from "./pages/DetailPage/DetailPages";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./Register/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />

            <Route path="/detail/:maPhim" element={<DetailPages />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
