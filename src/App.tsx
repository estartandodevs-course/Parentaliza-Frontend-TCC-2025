import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Agenda from "../src/pages/Agenda/Agenda";
import NewAgenda from "../src/components/Agenda/newAgenda/newAgenda";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/agenda/novo" element={<NewAgenda />} />
    </Routes>
  );
}
