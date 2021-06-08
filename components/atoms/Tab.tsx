import React, { useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { TabProps, TabsContext } from './Tabs';

type StyledTabPrpos = {
  display: string;
};
const StyledTab = styled.div<StyledTabPrpos>`
  ${(prop) => {
    return css`
      display: ${prop.display};
      width: 100%;
    `;
  }}
`;

export const Tab: React.FC<TabProps> = ({ eventKey, title, disabled = false, children }) => {
  const selected = useContext(TabsContext);

  useEffect(() => selected.push({ eventKey: eventKey, title: title, disabled: disabled }), []);

  return <StyledTab display={selected.activeKey === eventKey ? 'inherit' : 'none'}>{children}</StyledTab>;
};

export default Tab;
