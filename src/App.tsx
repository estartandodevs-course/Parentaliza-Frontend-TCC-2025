import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Agenda from "../src/pages/Agenda/Agenda";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agenda" element={<Agenda />} />
    </Routes>
  );
}
