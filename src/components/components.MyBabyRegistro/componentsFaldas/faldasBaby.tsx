import { useState } from "react";
import "./faldasBaby.css";
import { Link} from "react-router-dom";
import smallLeftIconGreen from "../../../assets/icons/smallLeftGreen.svg";


interface FraldaData {
  tipo: "cocô" | "xixi" | "limpo";
  hora: string;
  condicao?: string;
  notas?: string;
}

export default function FaldasBaby() {
  const [activeTab, setActiveTab] = useState<"diario" | "mensal">("diario");
  const [faldasData, setFaldasData] = useState<FraldaData[]>([
    {
      tipo: "cocô",
      hora: "09:30",
      condicao: "Normal",
    },
    {
      tipo: "xixi",
      hora: "10:15",
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FraldaData>({
    tipo: "xixi",
    hora: "",
    condicao: "Normal",
    notas: "",
  });

  const handleAddFraldas = () => {
    if (formData.hora) {
      setFaldasData([...faldasData, formData]);
      setFormData({ tipo: "xixi", hora: "", condicao: "Normal", notas: "" });
      setShowForm(false);
    }
  };

  const getFraldaStats = () => {
    const stats = {
      cocô: faldasData.filter((f) => f.tipo === "cocô").length,
      xixi: faldasData.filter((f) => f.tipo === "xixi").length,
    };
    return stats;
  };

  const stats = getFraldaStats();

  return (
    <div className="fraldas-container">
      {/* Header */}
      <div className="fraldas-header">
       <Link to="/" aria-label="Meu beber">
          <img
            src={smallLeftIconGreen}
            alt="voltar"
            id="HomeVolta"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>

      {/* Tabs */}
      <div className="fraldas-tabs">
        <button
          className={`tab-btn ${activeTab === "diario" ? "active" : ""}`}
          onClick={() => setActiveTab("diario")}
        >
          Visão geral
        </button>
        <button
          className={`tab-btn ${activeTab === "mensal" ? "active" : ""}`}
          onClick={() => setActiveTab("mensal")}
        >
          Fraldas
        </button>
        <button className="tab-btn info-btn">ℹ️</button>
      </div>

      {/* Main Content */}
      <div className="fraldas-main">
        {/* View Type Selector */}
        <div className="view-selector">
          <span>Diário</span>
          <span>Mensal</span>
        </div>

        {/* Content Grid */}
        <div className="fraldas-grid">
          {/* Left Column - Diário */}
          <div className="fraldas-left">
            <h2>Diário</h2>
            <div className="resumo-box">
              <div className="resumo-item">
                <span>Fraldas</span>
                <strong className="big-number">{stats.xixi + stats.cocô}</strong>
              </div>
            </div>

            {/* Fraldas por tipo */}
            <h3>Condição das fraldas</h3>
            <div className="condicao-list">
              <div className="condicao-item">
                <span>Cocô</span>
                <strong>{stats.cocô}</strong>
              </div>
              <div className="condicao-item">
                <span>Xixi</span>
                <strong>{stats.xixi}</strong>
              </div>
              <div className="condicao-item">
                <span>Limpo</span>
                <strong>0</strong>
              </div>
            </div>
          </div>

          {/* Right Column - Mensal */}
          <div className="fraldas-right">
            <h2>Mensal</h2>
            <div className="resumo-box">
              <div className="resumo-item">
                <span>Fraldas</span>
                <strong className="big-number">200</strong>
              </div>
            </div>

            <h3>Fraldas por dia</h3>
            <div className="resumo-box">
              <div className="resumo-item">
                <span>Média</span>
                <strong>7</strong>
                <small>em média</small>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        {!showForm && (
          <button className="add-btn" onClick={() => setShowForm(true)}>
            + Adicionar Fraldas
          </button>
        )}

        {showForm && (
          <div className="form-section">
            <div className="form-group">
              <label>Data & Hora</label>
              <input
                type="text"
                placeholder="05/11/25  19:20"
                value={formData.hora}
                onChange={(e) =>
                  setFormData({ ...formData, hora: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Condição</label>
              <select
                value={formData.condicao || ""}
                onChange={(e) =>
                  setFormData({ ...formData, condicao: e.target.value })
                }
              >
                <option value="Normal">Normal</option>
                <option value="Diarréia">Diarréia</option>
                <option value="Constipação">Constipação</option>
              </select>
            </div>

            <div className="form-group">
              <label>Adicionar notas</label>
              <textarea
                placeholder="Adicionar nota..."
                value={formData.notas}
                onChange={(e) =>
                  setFormData({ ...formData, notas: e.target.value })
                }
                rows={3}
              />
            </div>

            <div className="form-buttons">
              <button
                className="btn-cancel"
                onClick={() => setShowForm(false)}
              >
                Cancelar
              </button>
              <button className="btn-save" onClick={handleAddFraldas}>
                Salvar
              </button>
            </div>
          </div>
        )}

        {/* List */}
        <div className="fraldas-list">
          {faldasData.map((item, index) => (
            <div key={index} className="fraldas-item">
              <div className="item-icon">🔄</div>
              <div className="item-details">
                <div className="item-type">{item.tipo}</div>
                <div className="item-time">{item.hora}</div>
                {item.condicao && (
                  <div className="item-condicao">{item.condicao}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="action-buttons">
        <button className="btn-primary">Finalizar</button>
        <button className="btn-secondary">Salvar</button>
      </div>
    </div>
  );
}
