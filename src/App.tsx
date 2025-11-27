import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Agenda from "../src/pages/Agenda/Agenda";
import Contents from "../src/pages/Contents/Contents";
import ContentsDetail from "./pages/Contents/ContentsDetail/ContentsDetail";
export {default as homeIcon } from "../src/assets/icons/home.svg";
export {default as agendaIcon } from "../src/assets/icons/agenda.svg";
export {default as contentsIcon } from "../src/assets/icons/contents.svg";  
export {default as babyIcon } from "../src/assets/icons/baby.svg";
export {default as smallLeftIconGreen } from "../src/assets/icons/smallLeftGreen.svg";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/contents" element={<Contents />} />
      <Route path="/contents-detail" element={<ContentsDetail />} />
    </Routes>
  );
}
