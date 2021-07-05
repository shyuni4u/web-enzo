import React from 'react';

import Wrapper from '../../components/organisms/Wrapper';
import Header from '../../components/organisms/Header';
import Container from '../../components/organisms/Container';
import { menuList } from '../../components/organisms/MainMenu';
import Etc from '../../components/organisms/Etc';

export const Index: React.FC = () => {
  const recentMenu = menuList[4];

  return (
    <Wrapper>
      <Header paramMenu={recentMenu} />
      <Container>
        <Container.Wide>
          <Etc />
        </Container.Wide>
      </Container>
    </Wrapper>
  );
};

export default Index;
