import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./bottomNav.css";
import homeIcon from '@/assets/icons/home.svg'; //icons home para o bottom nav
import agendaIcon from '@/assets/icons/agenda.svg';
import contentsIcon from '@/assets/icons/contents.svg';
import babyIcon from '@/assets/icons/baby.svg';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); // detecta a rota atual

  return (
    <nav className="bottom-nav">
      <button
        className={`bottom-nav-item ${
          location.pathname === "/" ? "active" : ""
        }`}
        onClick={() => navigate("/")}
      >
        <img src={homeIcon} alt="Home" className="home-icon" />
        <br />
        Início
      </button>

      <button
        className={`bottom-nav-item ${
          location.pathname === "/agenda" ? "active" : ""
        }`}
        onClick={() => navigate("/agenda")}
      >
        <img src={agendaIcon} alt="Home" className="home-icon" />
        <br />
        Agenda
      </button>

      <button
        className={`bottom-nav-item ${
          location.pathname === "/conteudos" ? "active" : ""
        }`}
        onClick={() => navigate("/Contents")}
      >
        <img src={contentsIcon} alt="Home" className="home-icon" />
        <br />
        Conteúdos
      </button>

      <button
        className={`bottom-nav-item ${
          location.pathname === "/meu-bebe" ? "active" : ""
        }`}
        onClick={() => navigate("/meu-bebe")}
      >
        <img src={babyIcon} alt="Home" className="home-icon" />
        <br />
        Meu bebê
      </button>
    </nav>
  );
};

export default BottomNav;
