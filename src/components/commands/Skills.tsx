import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
    return (
        <AboutWrapper data-testid="about">
            <p>
                <HighlightSpan>my Skills</HighlightSpan> :
            </p>
            <p>
                JavaScript   <br />
                Html,Css   <br />
                Bootstrap  <br />
                FlexBox  <br />
                React js  <br />
                ES7  <br />
                Blockchain  <br />
                Solidity  <br />
                Smart Contract  <br />
                TS  <br />
                Network  <br />
                Git  <br />
                Digital Marketing  <br />
                SEO  <br />
                MBA  <br />
            </p>
        </AboutWrapper>
    );
};

export default About;
