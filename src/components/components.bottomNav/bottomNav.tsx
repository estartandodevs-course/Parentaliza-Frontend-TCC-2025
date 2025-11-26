import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./BottomNav.css";

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
        🏠
        <br />
        Início
      </button>

      <button
        className={`bottom-nav-item ${
          location.pathname === "/agenda" ? "active" : ""
        }`}
        onClick={() => navigate("/agenda")}
      >
        📅
        <br />
        Agenda
      </button>

      <button
        className={`bottom-nav-item ${
          location.pathname === "/conteudos" ? "active" : ""
        }`}
        onClick={() => navigate("/conteudos")}
      >
        📚
        <br />
        Conteúdos
      </button>

      <button
        className={`bottom-nav-item ${
          location.pathname === "/meu-bebe" ? "active" : ""
        }`}
        onClick={() => navigate("/meu-bebe")}
      >
        👶
        <br />
        Meu bebê
      </button>
    </nav>
  );
};

export default BottomNav;
