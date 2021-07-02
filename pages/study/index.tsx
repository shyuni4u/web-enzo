import React from 'react';

import Wrapper from '../../components/organisms/Wrapper';
import Header from '../../components/organisms/Header';
import Container from '../../components/organisms/Container';
import { menuList } from '../../components/organisms/MainMenu';

export const Index: React.FC = () => {
  const recentMenu = menuList[1];

  return (
    <Wrapper>
      <Header paramMenu={recentMenu} />
      <Container>
        <Container.Main>Study</Container.Main>
      </Container>
    </Wrapper>
  );
};

export default Index;