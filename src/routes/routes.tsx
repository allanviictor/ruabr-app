import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { NotFound } from "../pages/not-found/not-found";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
