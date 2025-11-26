import HeaderUser from "../../components/components.headerUser/headerUser";
import BabyCard from "../../components/components.babycard/babyCard";
import ConsultationCard from "../../components/components.consutationCard/consutationCard";
import ContentCard from "../../components/components.contentCard/contentCard";
import BottomNav from "../../components/components.bottomNav/bottomNav";

import avatarUrl from "../../assets/images/avatarUrl.png";
import baby from "../../assets/images/baby.png";
import contentImage from "../../assets/images/Content.png";
import type { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div
      style={{
        maxWidth: "390px",
        minHeight: "844px",
        margin: "0 auto",
        backgroundColor: "#F9F9F9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "80px",
      }}
    >
      {/* Header */}
      <div
        style={{
          width: "90%",
          marginLeft: "35px",
          marginTop: "20px",
          alignSelf: "flex-start",
        }}
      >
        <HeaderUser name="Cecília" avatarUrl={avatarUrl} />
      </div>

      {/* Baby Card */}
      <div style={{ width: "90%", marginTop: "20px" }}>
        <BabyCard
          babyImage={baby}
          age="9 meses"
          onViewMore={() => alert("Mais sobre o bebê")}
        />
      </div>

      {/* Consultas */}
      <div style={{ width: "90%", marginTop: "30px" }}>
        <h2
          style={{
            fontSize: "2-px",
            fontWeight: "600",
            fontStyle: "semibold",
            fontFamily: "poppins",
          }}
        >
          Suas consultas
        </h2>

        <ConsultationCard
          type="Cardiologia"
          doctor="Dra. Catarina"
          date="31/10, Sexta"
          time="8:00 - 8:30"
          status="Em dia"
        />
      </div>

      {/* Conteúdos */}
      <div style={{ width: "90%", marginTop: "30px" }}>
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "12px",
          }}
        >
          Conteúdos recomendados
        </h2>

        <ContentCard
          title="Auxílio-Maternidade em 2025"
          subtitle="Tudo o que você precisa saber"
          image={contentImage}
        />
      </div>

      <BottomNav />
    </div>
  );
}
