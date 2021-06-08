import React from 'react';

import Wrapper from '../../components/organisms/Wrapper';
import Header from '../../components/organisms/Header';
import Container from '../../components/organisms/Container';
import { menuList } from '../../components/organisms/MainMenu';

export const Performance: React.FC = () => {
  const recentMenu = menuList[0];

  return (
    <Wrapper>
      <Header paramMenu={recentMenu} />
      <Container>
        <Container.Aside>Container.Aside</Container.Aside>
        <Container.Main>Container.Main</Container.Main>
      </Container>
    </Wrapper>
  );
};

export default Performance;
