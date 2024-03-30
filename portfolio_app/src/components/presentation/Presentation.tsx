import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import { animated, useSpring } from 'react-spring';

const PresentationContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 255, 0, 1);
  position: relative;
  overflow: hidden;
`;

const Ball = styled(animated.div)`
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
`;

const Presentation: React.FC = () => {
  const props = useSpring({
    to: async (next: any) => {
      while (true) {
        await next({ y: 100, config: { duration: 1000 } });
        await next({ y: 0, config: { duration: 1000 } });
      }
    },
    from: { y: 0 },
    loop: true
  });

  return (
    <PresentationContainer>
      <Ball style={props} />
    </PresentationContainer>
  );
}

export default Presentation;
