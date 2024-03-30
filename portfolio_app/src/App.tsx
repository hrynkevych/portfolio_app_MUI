// Add animation
import styled from "styled-components";
import Header from "./components/header/Header";
import Video from "./components/video/Video";
import Portfolio from "./components/portfolio/Portfolio";
import Presentation from "./components/presentation/Presentation";

const AppContainer = styled.div`
  background-color: rgba(0, 255, 0, 1);
`;

function App() {
  return (
    <AppContainer>
      <header className="App-header">
        <Header />
      </header>
      <body>
        <Video />
        <Portfolio />
        <Presentation />
      </body>
    </AppContainer>
  );
}

export default App;
