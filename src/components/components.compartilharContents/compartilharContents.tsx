import "./compartilharContents.css";
import compartilharIcon from "../../assets/icons/compartilhar.svg";

interface CompartilharContentsProps {
  title?: string;
  url?: string;
  onShare?: () => void;
}

export default function CompartilharContents({
  title = "Compartilhe este conteúdo",
  url = window.location.href,
  onShare,
}: CompartilharContentsProps) {
  const handleShare = async () => {
    // Se houver callback customizado, executa
    if (onShare) {
      onShare();
      return;
    }

    // Tenta usar Web Share API (funciona em mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
      } catch (err) {
        console.log("Compartilhamento cancelado ou erro:", err);
      }
    } else {
      // Fallback: copia URL para clipboard
      navigator.clipboard.writeText(url);
      alert("Link copiado para área de transferência!");
    }
  };

  return (
    <button className="compartilhar-btn" onClick={handleShare} title="Compartilhar">
      <img src={compartilharIcon} alt="Compartilhar" className="compartilhar-icon" />
    </button>
  );
}
