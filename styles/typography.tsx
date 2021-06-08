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
    mix-blend-mode: exclusion;
  }
`;

export const Typography: React.FC = () => {
  return (
    <Wrapper>
      [Tag] (global style)
      <ul>
        <li>
          <h1>headline1</h1>
        </li>
        <li>
          <h2>headline2</h2>
        </li>
        <li>
          <h3>headline3</h3>
        </li>
        <li>
          <h4>headline4</h4>
        </li>
        <li>
          <h5>headline5</h5>
        </li>
        <li>
          <h6>headline6</h6>
        </li>
      </ul>
      <hr />
      [Use Theme]
      <ul>
        {Object.keys(Theme.fontSizes).map((key) => (
          <li key={key} style={{ fontSize: Theme.fontSizes[key] }}>
            {key}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Typography;
