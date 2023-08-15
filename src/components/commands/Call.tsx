import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled";

const Call: React.FC = () => {
    return (
        <AboutWrapper data-testid="about">
            <p>
                <HighlightSpan>my Numbers </HighlightSpan> :
            </p>
            <p>
                09178376279 || 09017896279
            </p>
        </AboutWrapper>
    );
};

export default Call;
