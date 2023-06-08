import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>Visitor</User>@<WebsiteName>Arta</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
