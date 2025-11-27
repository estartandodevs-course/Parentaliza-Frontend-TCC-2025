import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/components.bottomNav/bottomNav";
import "./Contents.css";
import { smallLeftIconGreen } from "../../App";
import maeGestanteImg from "../../assets/images/maeGestante.png";
import maeGestanteOneImg from "../../assets/images/maeGestanteOne.png";
import paiPaternidadeImg from "../../assets/images/paiPaternidade.png";

export interface Content {
  id: number;
  title: string;
  description: string;
  image: string;
  fullContent?: string;
  author?: string;
  date?: string;
  category: "nutrition" | "postpartum" | "rights";
}

const CONTENTS: Content[] = [
  {
    id: 1,
    title: "Semanas da Gestação",
    description:
      "Cada semana é um milagre silencioso, uma jornada íntima de transformação e crescimento mútuo...",
    fullContent:
      "Cada semana é um milagre silencioso, uma jornada íntima de transformação e crescimento mútuo. Celebramos a espera com a certeza de que a maior aventura da vida está prestes a começar.",
    image: maeGestanteImg, //imagem
    author: "Antônio Ferreira",
    category: "nutrition",
  },
  {
    id: 2,
    title: "Auxílio-Maternidade em 2025",
    description: "Tudo o que você precisa saber para solicitar o benefício",
    fullContent:
      "O Auxílio-Maternidade é um benefício garantido pela legislação brasileira que assegura renda durante o período de afastamento do trabalho.",
    image: maeGestanteOneImg, //imagem
    date: "18 de Outubro, 2025",
    category: "rights",
  },
  {
    id: 3,
    title: "Licença-Paternidade no Brasil",
    description: "direitos, benefícios e regulamentação",
    fullContent:
      "A Licença-Paternidade garante ao pai o direito de se afastar do trabalho nos primeiros dias de vida do filho.",
    image: paiPaternidadeImg,
    date: "18 de Outubro, 2025",
    category: "rights",
  },
];

export default function Contents() {
  const [activeTab, setActiveTab] = useState<"nutrition" | "postpartum" | "rights">("nutrition");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredContents = CONTENTS.filter(
    (content) =>
      content.category === activeTab &&
      content.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleContentClick = (content: Content) => {
    navigate("/contents-detail", { state: { content } });
  };

  return (
    <div className="contents-container">
      {/* Header */}
      <div className="contents-header">
        <img src={smallLeftIconGreen} alt="Home" className="home-icon" onClick={() => navigate("/")}/>
        <h1>Conteúdos</h1>
      </div>

      {/* Search */}
      <div className="contents-search">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Tabs */}
      <div className="contents-tabs">
        <button
          className={`tab-button ${activeTab === "nutrition" ? "active" : ""}`}
          onClick={() => setActiveTab("nutrition")}
        >
          Nutrição
        </button>
        <button
          className={`tab-button ${activeTab === "postpartum" ? "active" : ""}`}
          onClick={() => setActiveTab("postpartum")}
        >
          Pós-parto
        </button>
        <button
          className={`tab-button ${activeTab === "rights" ? "active" : ""}`}
          onClick={() => setActiveTab("rights")}
        >
          Direitos
        </button>
      </div>

      {/* Main Content Area */}
      <div className="contents-main">
        {/* Recommended Section */}
        <div className="contents-recommended-section">
          <h2>Recomendado para você</h2>
          <div className="contents-featured">
            {filteredContents.length > 0 && (
              <div
                className="featured-item"
                onClick={() => handleContentClick(filteredContents[0])}
              >
                <img
                  src={filteredContents[0].image}
                  alt={filteredContents[0].title}
                  className="featured-image"
                />
                <h3 className="featured-title">{filteredContents[0].title}</h3>
                <p className="featured-description">
                  {filteredContents[0].description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Recommended Contents Section */}
        <div className="contents-recommended-articles">
          <h2>Conteúdos recomendados</h2>
          <div className="articles-list">
            {filteredContents.length > 0 ? (
              filteredContents.map((content) => (
                <div
                  key={content.id}
                  className="article-item"
                  onClick={() => handleContentClick(content)}
                >
                  <img
                    src={content.image}
                    alt={content.title}
                    className="article-thumbnail"
                  />
                  <div className="article-info">
                    <h4>{content.title}</h4>
                    {content.date && (
                      <span className="article-date">{content.date}</span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="no-results">Nenhum conteúdo encontrado</p>
            )}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
