import React from 'react';
import styled from 'styled-components';
import Header from "./components/header/Header";
import Video from "./components/video/Video";
import Portfolio from "./components/portfolio/Portfolio";

const AppContainer = styled.div`
  background-color: rgba(0, 255, 0, 1);
`;

function App() {
  return (
    <AppContainer>
      <header className="App-header">
        <Header />
        <Video />
        <Portfolio />
      </header>
      <body></body>
    </AppContainer>
  );
}

export default App;
