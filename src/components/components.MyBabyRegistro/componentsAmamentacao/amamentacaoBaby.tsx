import { useState } from "react";
import "./amamentacaoBaby.css";
import smallLeftIconGreen from "../../../assets/icons/smallLeftGreen.svg";
import { Link, NavLink } from "react-router-dom";
import controleConfIcon from "../../../assets/icons/controles-deslizantes-de-configuracoes.svg"


interface AmamentacaoData {
  tipo: "direto" | "mamadeira" | "misto";
  horario: string;
  duracao: string;
  lado?: "esquerdo" | "direito";
}

export default function AmamentacaoBaby() {
  const [activeTab, setActiveTab] = useState<"diario" | "mensal">("diario");
  const [amamentacaoData, setAmamentacaoData] = useState<AmamentacaoData[]>([
    {
      tipo: "direto",
      horario: "08:00",
      duracao: "15 min",
      lado: "esquerdo",
    },
    {
      tipo: "mamadeira",
      horario: "12:00",
      duracao: "10 min",
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<AmamentacaoData>({
    tipo: "direto",
    horario: "",
    duracao: "",
  });

  const handleAddAmamentacao = () => {
    if (formData.horario && formData.duracao) {
      setAmamentacaoData([...amamentacaoData, formData]);
      setFormData({ tipo: "direto", horario: "", duracao: "" });
      setShowForm(false);
    }
  };

  return (
    <div className="amamentacao-container">
      {/* Header */}
      <div className="amamentacao-header">
      <Link to="/" aria-label="Meu beber">
          <img
            src={smallLeftIconGreen}
            alt="voltar"
            id="HomeVolta"
            style={{ cursor: "pointer" }}
          />
        </Link>
      <h1>Alimentação</h1>
      </div>

      {/* Tabs */}
      <div className="amamentacao-tabs">
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
          Tipos
        </button>
        <button className="tab-btn info-btn">
          <NavLink to="#" aria-label="Voltar para Home">
          <img
            src={controleConfIcon}
            alt="voltar"
            id="HomeVolta"
            style={{ cursor: "pointer" }}
          />
          </NavLink>          
        </button>
      </div>

      {/* Main Content */}
      <div className="amamentacao-main">
        {/* View Type Selector */}
        <div className="view-selector">
          <span>Diário</span>
          <span>Mensal</span>
        </div>

        {/* Content Grid */}
        <div className="amamentacao-grid">
          {/* Left Column - Resumo */}
          <div className="amamentacao-left">
            <h2>Diário</h2>
            <div className="resumo-box">
              <div className="resumo-item">
                <span>Mamadeira</span>
                <strong className="big-number">4</strong>
              </div>
              <div className="resumo-item">
                <span>Peito</span>
                <strong className="big-number">8 min</strong>
                <small>em média</small>
              </div>
            </div>
          </div>

          {/* Right Column - Detalhes */}
          <div className="amamentacao-right">
            <h2>Mensal</h2>
            <div className="resumo-box">
              <div className="resumo-item">
                <span>Mamadeira</span>
                <strong className="big-number">3</strong>
                <small>sem contar</small>
              </div>
              <div className="resumo-item">
                <span>Peito</span>
                <strong className="big-number">8 min</strong>
                <small>em média</small>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        {!showForm && (
          <button className="add-btn" onClick={() => setShowForm(true)}>
            + Adicionar Amamentação
          </button>
        )}

        {showForm && (
          <div className="form-section">
            <div className="form-group">
              <label>Tipo</label>
              <select
                value={formData.tipo}
                onChange={(e) =>
                  setFormData({ ...formData, tipo: e.target.value as any })
                }
              >
                <option value="direto">Direto</option>
                <option value="mamadeira">Mamadeira</option>
                <option value="misto">Misto</option>
              </select>
            </div>

            <div className="form-group">
              <label>Horário</label>
              <input
                type="time"
                value={formData.horario}
                onChange={(e) =>
                  setFormData({ ...formData, horario: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Duração</label>
              <input
                type="text"
                placeholder="ex: 15 min"
                value={formData.duracao}
                onChange={(e) =>
                  setFormData({ ...formData, duracao: e.target.value })
                }
              />
            </div>

            <div className="form-buttons">
              <button
                className="btn-cancel"
                onClick={() => setShowForm(false)}
              >
                Cancelar
              </button>
              <button className="btn-save" onClick={handleAddAmamentacao}>
                Finalizar
              </button>
            </div>
          </div>
        )}

        {/* List */}
        <div className="amamentacao-list">
          {amamentacaoData.map((item, index) => (
            <div key={index} className="amamentacao-item">
              <div className="item-icon">🍼</div>
              <div className="item-details">
                <div className="item-type">{item.tipo}</div>
                <div className="item-time">
                  {item.horario} - {item.duracao}
                </div>
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
