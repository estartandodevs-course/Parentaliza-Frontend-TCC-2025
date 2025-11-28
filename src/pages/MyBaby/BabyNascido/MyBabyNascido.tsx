import { useState } from "react";
import AmamentacaoBaby from "../../../components/components.MyBabyRegistro/componentsAmamentacao/amamentacaoBaby";
import FaldasBaby from "../../../components/components.MyBabyRegistro/componentsFaldas/faldasBaby";
import VacinaExamesBaby from "../../../components/components.MyBabyRegistro/componentsVacinaExames/vacinaExamesBaby";
import "./MyBabyNascido.css";
import BottomNav from "../../../components/components.bottomNav/bottomNav";
import PerfilBabyImg from "../../../assets/images/PerfilBabyImg.png";
import AmamentacaoBabyImg from "../../../assets/images/AmamentacaoImg.png";
import FraldasImg from "../../../assets/images/fraldasImg.png";
import VacinaExamImg from "../../../assets/images/vacinaExameImg.png"

interface BabyProfile {
  nome: string;
  dataNascimento: string;
  sexo: "FEMININO" | "MASCULINO";
  tipoSanguineo: string;
  peso: string;
  altura: string;
  fotoPerfil: string;
}

export default function MyBabyNascido() {
  const [activeComponent, setActiveComponent] = useState<
    "profile" | "amamentacao" | "fraldas" | "vacinas"
  >("profile");

  const [babyData, setBabyData] = useState<BabyProfile>({
    nome: "Ana Maria",
    dataNascimento: "22/03/2024",
    sexo: "FEMININO",
    tipoSanguineo: "O+",
    peso: "13kg",
    altura: "80 CM",
    fotoPerfil:
      PerfilBabyImg,
  });

  const calculateAge = (birthDate: string): string => {
    const [day, month, year] = birthDate.split("/").map(Number);
    const today = new Date();
    let age = today.getFullYear() - year;
    if (
      today.getMonth() < month - 1 ||
      (today.getMonth() === month - 1 && today.getDate() < day)
    ) {
      age--;
    }
    return `${age} meses`;
  };

  if (activeComponent === "amamentacao") {
    return <AmamentacaoBaby />;
  }
  if (activeComponent === "fraldas") {
    return <FaldasBaby />;
  }
  if (activeComponent === "vacinas") {
    return <VacinaExamesBaby />;
  }

  return (
    <div className="my-baby-container">
      {/* Header */}
      <div className="my-baby-header">
        <h1></h1>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-card">
          <div className="profile-top">
            {/* Photo Section */}
            <div className="profile-photo">
              <img
                src={babyData.fotoPerfil}
                alt={babyData.nome}
                className="baby-photo"
              />
              <button className="edit-photo-btn">✎</button>
            </div>

            {/* Name to the right of the photo */}
            <div className="baby-name-wrapper">
              <h2 className="baby-name">{babyData.nome}</h2>
            </div>
          </div>

          {/* Stats box below (separate from top) */}
          <div className="stats-box">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">{calculateAge(babyData.dataNascimento)}</span>
                <span className="stat-label-secondary">IDADE</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">{babyData.sexo}</span>
                <span className="stat-label-secondary">SEXO</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">{babyData.dataNascimento}</span>
                <span className="stat-label-secondary">ANIVERSÁRIO</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">{babyData.tipoSanguineo}</span>
                <span className="stat-label-secondary">TIPO SANGUÍNEO</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">{babyData.peso}</span>
                <span className="stat-label-secondary">PESO</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">{babyData.altura}</span>
                <span className="stat-label-secondary">ALTURA</span>
              </div>
            </div>
          </div>

          {/* Avatar badges removed as requested */}
        </div>
      </div>

      {/* Registro Section */}
      <div className="registro-section">
        <h3>Registro</h3>
        <div className="registro-grid">
          {/* Amamentação Card */}
          <button
            className="registro-card"
            onClick={() => setActiveComponent("amamentacao")}
          >
            <div className="card-icon">
              <img src={AmamentacaoBabyImg} alt="Amamentação formato PNG" />
            </div>
            <span>Amamentação</span>
            <small>Últimas atualizações: 07h</small>
          </button>

          {/* Fraldas Card */}
          <button
            className="registro-card"
            onClick={() => setActiveComponent("fraldas")}
          >
            <div className="card-icon">
              <img src={FraldasImg} alt="Fraldas formato PNG" />
            </div>
            <span>Fraldas</span>
            <small>Últimas atualizações: 07h</small>
          </button>

          {/* Vacinas e Exames Card */}
          <button
            className="registro-card"
            onClick={() => setActiveComponent("vacinas")}
          >
            <div className="card-icon">
              <img src={VacinaExamImg} alt="Vacinas e Exames formato PNG" />
            </div>
            <span>Vacinas e Exames</span>
            <small>Últimas atualizações: 07h</small>
          </button>
        </div>
      </div>

      {/* Action Buttons (temporarily removed)
      <div className="action-section">
        <button className="btn-primary">Editar Perfil</button>
        <button className="btn-secondary">Mais Opções</button>
      </div>
      */}
      <BottomNav />
    </div>
  );
}
