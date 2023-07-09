import { styled } from "styled-components";

const ExperienceContainer = styled.section({
  fontFamily: "monospace",
  display: "flex",
  flexDirection: "column",
  margin: "80px",
});

const ExperienceTitle = styled.h2`
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

const ExperienceArticle = styled.article`
  width: 500px;
  border-radius: 20px;
  background: rgb(251, 174, 150);
  background: linear-gradient(
    121deg,
    rgba(251, 174, 150, 1) 0%,
    rgba(171, 131, 254, 1) 100%
  );
  div {
    padding: 20px;
  }
`;

const ExperienceContent = styled.article({
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row",
});

const ArticleTitle = styled.h3({
  textAlign: "center",
});

function Experience() {
  return (
    <ExperienceContainer>
      <ExperienceTitle>Experience Professionnelle</ExperienceTitle>
      <ExperienceContent>
        <ExperienceArticle>
          <div>
            <ArticleTitle>Service civique</ArticleTitle>
            <p>LE FOYER STEPHANAIS</p>
            <p> 03 2023 -- en cours </p>
            <p>Rouen, France</p>
          </div>
        </ExperienceArticle>

        <ExperienceArticle>
          <div>
            <ArticleTitle>Projet Safe Road</ArticleTitle>
            <p>ÉVOLUKID - Programme KESK'IA </p>
            <p> 01 2023 -- 06 2023 </p>
            <p> Paris, France</p>
          </div>
        </ExperienceArticle>
      </ExperienceContent>
    </ExperienceContainer>
  );
}

export default Experience;
