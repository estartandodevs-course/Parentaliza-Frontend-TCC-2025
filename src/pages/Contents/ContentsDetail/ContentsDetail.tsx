import { useLocation, useNavigate } from "react-router-dom";
import type { Content } from "../Contents";
import BottomNav from "../../../components/components.bottomNav/bottomNav";
import CompartilharContents from "../../../components/components.compartilharContents/compartilharContents";
import "./ContentsDetail.css";
import { smallLeftIconGreen } from "../../../App";
import antonioDrImg from "../../../assets/images/antonioDr.png";

export default function ContentsDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const content = location.state?.content as Content | undefined;

  if (!content) {
    return (
      <div className="contents-detail-container">
        <div className="contents-detail-empty">
          <p>Conteúdo não encontrado</p>
          <button onClick={() => navigate("/contents")}>Voltar</button>
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="contents-detail-container">
      {/* Header */}
      <div className="detail-header">
        <img src={smallLeftIconGreen} alt="Home" className="home-icon" onClick={() => navigate("/Contents")}/>
        <h1>Conteúdos/Detalhamento</h1>
      </div>

      {/* Main Content */}
      <div className="detail-main">
        {/* Featured Image */}
        <div className="detail-image-wrapper">
          <img
            src={content.image}
            alt={content.title}
            className="detail-image"
          />
        </div>

        {/* Author Info */}
        {content.author && (
          <div className="detail-author">
            <img
              src={antonioDrImg}
              alt={content.author}
              className="author-avatar"
            />
            <div className="author-info">
              <p className="author-name">{content.author}</p>
            </div>
            <CompartilharContents title={content.title} />
          </div>
        )}

        {/* Content Title */}
        <h2 className="detail-content-title">{content.title}</h2>

        {/* Content Body */}
        <div className="detail-content-body">
          <p>{content.fullContent || content.description}</p>
        </div>

        {/* Date */}
        {content.date && (
          <div className="detail-date">
            <span>{content.date}</span>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
