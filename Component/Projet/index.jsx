import styled from "styled-components";

const ProjetContainer = styled.section({
  fontFamily: "monospace",
  display: "flex",
  flexDirection: "column",
  margin: "80px",
});

const ProjetTitle = styled.h2`
  background: rgb(251, 174, 150);
  background: linear-gradient(
    121deg,
    rgba(251, 174, 150, 1) 0%,
    rgba(171, 131, 254, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 64px;
`;

const ProjetContent = styled.article({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

const ArticleCase = styled.article`
  background: rgb(251, 174, 150);
  background: linear-gradient(
    121deg,
    rgba(251, 174, 150, 1) 0%,
    rgba(171, 131, 254, 1) 100%
  );

  margin: 2px;

  border-radius: 20px;
  transition: transform 0.3s;
  transform-origin: center;

  &:hover {
    transform: scale(1.2);
  }
`;

const ArticleTitle = styled.h3({
  fontSize: "20px",
  padding: "0 8px 0 8px",
});

function Projet() {
  return (
    <ProjetContainer>
      <ProjetTitle>Projets</ProjetTitle>
      <ProjetContent>
        <ArticleCase>
          <ArticleTitle>
            Réalisation d'une application web de gestion d'un laboratoire
            médical
          </ArticleTitle>
        </ArticleCase>
        <ArticleCase>
          <ArticleTitle>Création d'une LFSR en utilisant OCAML</ArticleTitle>
        </ArticleCase>

        <ArticleCase>
          <ArticleTitle>Application de prise de rendez-vous</ArticleTitle>
        </ArticleCase>

        <ArticleCase>
          <ArticleTitle>Création de jeu vidéo avec threeJs</ArticleTitle>
        </ArticleCase>

        <ArticleCase>
          <ArticleTitle>
            Conception et réalisation d'un jeu "Sudoku" en Java
          </ArticleTitle>
        </ArticleCase>

        <ArticleCase>
          <ArticleTitle>
            Conception et réalisation d'un jeu "chess" en Python
          </ArticleTitle>
        </ArticleCase>
      </ProjetContent>
    </ProjetContainer>
  );
}

export default Projet;
