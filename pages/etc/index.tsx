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
        <Container.Main>
          <ul style={{ margin: '10px auto' }}>
            <li style={{ marginBottom: '30px' }}>
              <a href={'http://wow.enzo.kr'}>Auth0 TEST</a>
            </li>
            <li style={{ marginBottom: '30px' }}>
              <a href={'http://wow.enzo.kr'}>월드 오브 워크래프트 직업 추천</a>
            </li>
            <li style={{ marginBottom: '30px' }}>
              <a href={'http://lostark.enzo.kr'}>로스트 아크 직업 추천</a>
            </li>
          </ul>
        </Container.Main>
      </Container>
    </Wrapper>
  );
};

export default Performance;
