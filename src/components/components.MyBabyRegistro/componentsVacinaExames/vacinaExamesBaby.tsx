import { useState } from "react";
import "./vacinaExamesBaby.css";

interface VacinaItem {
  id: string;
  nome: string;
  trimestre: string;
  concluida: boolean;
}

interface ExameItem {
  id: string;
  nome: string;
  tipo: string;
  concluida: boolean;
}

export default function VacinaExamesBaby() {
  const [activeTab, setActiveTab] = useState<"exames" | "vacinas">("exames");

  const [vacinas, setVacinas] = useState<VacinaItem[]>([
    {
      id: "1",
      nome: "1º trimestre",
      trimestre: "1º trimestre",
      concluida: true,
    },
    {
      id: "2",
      nome: "2º trimestre",
      trimestre: "2º trimestre",
      concluida: false,
    },
    {
      id: "3",
      nome: "3º trimestre",
      trimestre: "3º trimestre",
      concluida: false,
    },
  ]);

  const [exames, setExames] = useState<ExameItem[]>([
    {
      id: "1",
      nome: "Tipagem sanguinea e fator Rh",
      tipo: "Sangue",
      concluida: true,
    },
    {
      id: "2",
      nome: "Hemograma completo",
      tipo: "Sangue",
      concluida: true,
    },
    {
      id: "3",
      nome: "Glicemia de jejum",
      tipo: "Sangue",
      concluida: false,
    },
    {
      id: "4",
      nome: "Sorologia para infecções",
      tipo: "Sorologia",
      concluida: true,
    },
  ]);

  const handleToggleVacina = (id: string) => {
    setVacinas(
      vacinas.map((v) => (v.id === id ? { ...v, concluida: !v.concluida } : v))
    );
  };

  const handleToggleExame = (id: string) => {
    setExames(
      exames.map((e) => (e.id === id ? { ...e, concluida: !e.concluida } : e))
    );
  };

  const cartelinhaItems = [
    { icon: "🤰", text: "Ao saber da gravidez" },
    { icon: "📅", text: "A partir do 20º semana" },
  ];

  return (
    <div className="vacina-exames-container">
      {/* Header */}
      <div className="ve-header">
        <button className="back-btn">
          <span>&lt;</span>
        </button>
        <h1>Vacinas e Exames</h1>
        <button className="share-btn">📤</button>
      </div>

      {/* Tabs */}
      <div className="ve-tabs">
        <button
          className={`tab-btn ${activeTab === "exames" ? "active" : ""}`}
          onClick={() => setActiveTab("exames")}
        >
          Exames
        </button>
        <button
          className={`tab-btn ${activeTab === "vacinas" ? "active" : ""}`}
          onClick={() => setActiveTab("vacinas")}
        >
          Vacinas
        </button>
      </div>

      {/* Main Content */}
      <div className="ve-main">
        {activeTab === "exames" && (
          <div className="ve-content">
            <h2>Exames obrigatórios (SUS)</h2>

            <div className="exames-grid">
              {/* Left Column - Exames Simples */}
              <div className="exames-column">
                <h3>1º trimestre</h3>
                <div className="exame-list">
                  {exames
                    .filter((e) => e.concluida)
                    .map((exame) => (
                      <label key={exame.id} className="exame-item checked">
                        <input
                          type="checkbox"
                          checked={true}
                          onChange={() => handleToggleExame(exame.id)}
                        />
                        <span className="exame-text">{exame.nome}</span>
                      </label>
                    ))}
                </div>
              </div>

              {/* Right Column - Mais exames */}
              <div className="exames-column">
                <h3>3º trimestre</h3>
                <div className="exame-list">
                  {exames
                    .filter((e) => !e.concluida)
                    .map((exame) => (
                      <label key={exame.id} className="exame-item">
                        <input
                          type="checkbox"
                          checked={false}
                          onChange={() => handleToggleExame(exame.id)}
                        />
                        <span className="exame-text">{exame.nome}</span>
                      </label>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "vacinas" && (
          <div className="ve-content">
            <h2>Cartelinha de Vacinação</h2>

            <div className="cartelinha-section">
              {cartelinhaItems.map((item, index) => (
                <div key={index} className="cartelinha-item">
                  <span className="cartelinha-icon">{item.icon}</span>
                  <span className="cartelinha-text">{item.text}</span>
                  <span className="cartelinha-check">✓</span>
                </div>
              ))}
            </div>

            <h3>A partir da 20ª semana</h3>
            <div className="vacina-list">
              {vacinas.map((vacina) => (
                <label key={vacina.id} className="vacina-item">
                  <input
                    type="checkbox"
                    checked={vacina.concluida}
                    onChange={() => handleToggleVacina(vacina.id)}
                  />
                  <div className="vacina-content">
                    <span className="vacina-trimestre">
                      {vacina.trimestre}
                    </span>
                    <div className="vacina-grid">
                      <span className="vacina-name">Vacina hepatite B</span>
                      <span className="vacina-detail">(3 doses, conforme histórico vacinal)</span>
                    </div>
                  </div>
                  <span className={`vacina-check ${vacina.concluida ? "checked" : ""}`}>
                    {vacina.concluida ? "✓" : "○"}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
