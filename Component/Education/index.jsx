import styled from "styled-components";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const EducationContainer = styled.section({
  fontFamily: "monospace",
  display: "flex",
  flexDirection: "column",
  margin: "80px",
});

const EducationTitle = styled.h2`
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
const ArticleContainer = styled.div({});

const Articlecontent = styled.div`
  display: flex;
  
  ${({ $Left }) =>
    $Left &&
    `
    justify-content: flex-start;

  `}
  ${({ $Right }) =>
    $Right &&
    `
      justify-content:flex-end;
    `}
  ${({ $Middel }) =>
    $Middel &&
    `
    justify-content:center;
  `}
div {
    background: rgb(251, 174, 150);
    background: linear-gradient(
      121deg,
      rgba(251, 174, 150, 1) 0%,
      rgba(171, 131, 254, 1) 100%
    );

    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px;
    padding: 20px;
  }
p{
  line-height:0px;
}
`;

const ArticleTitle = styled.h3({
  fontSize: "20px",
  wordBreak: "break-word",
});

const StyledLink = styled(Link)`
  text-align: center;
  padding-top: 20px;
`;

function Education() {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  return (
    <EducationContainer>
      <EducationTitle>Formation</EducationTitle>
      <ArticleContainer>
        <Articlecontent $Left onClick={() => console.log("fe")}>
          <div onMouseLeave={onLeave} onMouseEnter={onEnter}>
            <ArticleTitle>Master Ingénierie informatique</ArticleTitle>
            <p>École EPSI</p>
            <p>09 2023 -- 07 2025</p>
            <p> Bordeaux, France</p>
          </div>
        </Articlecontent>

        <Articlecontent $Middel onClick={() => console.log("fe")}>
          <div onMouseLeave={onLeave} onMouseEnter={onEnter}>
            <ArticleTitle>Licence en informatique</ArticleTitle>
            <p>UNIVERSITÉ DE ROUEN</p>
            <p>09 2021 -- 07 2023</p>
            <p>Rouen, France</p>
            <StyledLink to="URN">Voir plus</StyledLink>
          </div>
        </Articlecontent>

        <Articlecontent $Right onClick={() => console.log("fe")}>
          <div onMouseLeave={onLeave} onMouseEnter={onEnter}>
            <ArticleTitle>Licence en informatique</ArticleTitle>
            <p>UNIVERSITÉ DE TIZI OUZOU (UMMTO)</p>
            <p>09 2018 -- 06 2021 </p>
            <p>Tizi Ouzou, Algérie</p>
            <StyledLink to="/">Voir plus</StyledLink>
          </div>
        </Articlecontent>
      </ArticleContainer>
    </EducationContainer>
  );
}

export default Education;
