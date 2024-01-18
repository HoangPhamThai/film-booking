import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />

            <Route path="/detail/:maPhim" element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
