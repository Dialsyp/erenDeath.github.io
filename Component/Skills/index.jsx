import { styled } from "styled-components";
import { SkillsDataCompetence } from "../../Utils/datas/SkillsData";
import { knowledgeList } from "../../Utils/datas/SkillsData";
const Body = styled.section({
  fontFamily: "monospace",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "80px",
});

const BodyTitle = styled.h1`
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

const SkillsContainer = styled.div({
  display: "flex",
  textAlign: "center",
  justifyContent: "space-around",
});

const SkillsIl = styled.li`
  list-style: none;
  padding: 5px;

  margin: 2.5px;
  border: 2px solid black;
  border-radius: 20px;
`;

const SkillsUl = styled.ul({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  padding: 0,
});

const SkillsContente = styled.div``;

const SkillsTitle = styled.h2`
background: rgb(251, 174, 150);
background: linear-gradient(
  121deg,
  rgba(251, 174, 150, 1) 0%,
  rgba(171, 131, 254, 1) 100%
);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-align: center;
`;

function Skills() {
  return (
    <Body>
      <BodyTitle>Skills</BodyTitle>
      <SkillsContainer>
        <SkillsContente>
          <SkillsTitle>Competence</SkillsTitle>
          <SkillsUl>
            {SkillsDataCompetence.map((Skills) => (
              <SkillsIl key={Skills.id}>{Skills.text}</SkillsIl>
            ))}
          </SkillsUl>
        </SkillsContente>
        <SkillsContente>
          <SkillsTitle>Connaissance</SkillsTitle>
          <SkillsUl>
            {knowledgeList.map((Skills) => (
              <SkillsIl key={Skills.id}>{Skills.text}</SkillsIl>
            ))}
          </SkillsUl>
        </SkillsContente>
      </SkillsContainer>
    </Body>
  );
}

export default Skills;
