import {
  Cmd,
  HeroContainer,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
    _____       __     _   __      _            
   / ___/____ _/ /_   / | / /___ _(_)___  ____ _
   \\__ \\/ __ \`/ __/  /  |/ / __ \`/ / __  / __ \`/
  ___/ / /_/ / /_   / /|  / /_/ / / / / / /_/ / 
 /____/\\__,_/\\___/ /_/ |_/\\__,_/_/_/ /_/\\__, /  
                                       /____/   
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    ____     __          
   / __/__ _/ /_         
  _\\ \\/ _ \`/ __/         
 /___/\\_,_/\\__/          
    _  __     _          
   / |/ /__ _(_)__  ___ _
  /    / _ \`/ / _ \\/ _ \`/
 /_/|_/\\_,_/_/_//_/\\_, / 
                  /___/  
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio.
          Just rty it..
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available Commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
