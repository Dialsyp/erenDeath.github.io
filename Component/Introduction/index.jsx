import { styled } from "styled-components";
import Image from "../../Utils/Assets/Circle.png";


const HugeHeadline = styled.div`
  background: rgb(251, 174, 150);
  background: linear-gradient(
    121deg,
    rgba(251, 174, 150, 1) 0%,
    rgba(171, 131, 254, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 96px;
  font-weight: 700;
  line-height: 100px;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img({
  width: "200px",

  height: "auto",
});

const Body = styled.section({
  margin: "40px 80px 0 80px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  wordBreak: "break-word",
});

export default function Introduction() {
  return (
    <Body>
      <Img src={Image} />
      <HugeHeadline>
        <div>Hi, I'm Syphax.</div>
        <div>I'm looking for an AlternanceShip.</div>
      </HugeHeadline>
    </Body>
  );
}
