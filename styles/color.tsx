import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/organisms/Wrapper';
import Theme from './theme';

type StyledColorBoxProps = {
  text: string;
  backgroundColor: string;
};
const StyledColorBox = styled.div<StyledColorBoxProps>`
  flex: 0 0 150px;
  min-height: 100px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(prop) => prop.backgroundColor};
  &:after {
    content: '${(prop) => prop.text}';
    color: #fff;
    mix-blend-mode: exclusion;
  }
`;

export const Color: React.FC = () => {
  return (
    <Wrapper>
      <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
        {Object.keys(Theme.colors).map((key) => (
          <StyledColorBox key={key} text={key} backgroundColor={Theme.colors[key]}></StyledColorBox>
        ))}
      </div>
    </Wrapper>
  );
};

export default Color;
