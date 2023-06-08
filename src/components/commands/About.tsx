import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Arta yaqubi</HighlightSpan> !
      </p>
      <p>
        I'm <HighlightAlt>a Frontend & Blockchain Developer</HighlightAlt> based in Shiraz - Fars
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing web applications to solve real-life challenges. <br /><br />
        <HighlightSpan>" 𝒞ℴ𝒹ℯ 𝒾𝓈 ℒ𝒶𝓌 "</HighlightSpan>
      </p>
    </AboutWrapper>
  );
};

export default About;
