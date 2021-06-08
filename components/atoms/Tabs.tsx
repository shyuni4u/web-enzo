import React, { useState } from 'react';
import styled, { css } from 'styled-components';

export type TabsProps = {
  /**
   * ActiveKey. tab name displayed.
   */
  activeKey: string;
  /**
   * Select event function
   */
  onSelect?: (e?: any) => void;
};

export type TabProps = {
  /**
   * Key of tab.
   */
  eventKey: string;
  /**
   * Tab title.
   */
  title: string;
  /**
   * Disabled.
   */
  disabled?: boolean;
};

type TabsExtProps = TabsProps & { push: (v: TabProps) => void };

const StyledNav = styled.nav`
  ${({ theme }) => {
    return css`
      margin-top: 10px;
      margin-left: 20px;
    `;
  }}
`;

const StyledTabUl = styled.ul`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-wrap: wrap;
    `;
  }}
`;

const StyledTabLi = styled.li`
  ${({ theme }) => {
    return css`
      flex: 0 0 auto;
      padding: 8px 20px;
      cursor: pointer;
      color: ${theme.colors.gray8};
      &:hover:not(.disabled):not(.active) {
        border-bottom: 2px solid ${theme.colors.grayE};
      }

      &.active {
        color: ${theme.colors.black};
        border-bottom: 2px solid ${theme.colors.main};
        font-weight: 700;
      }

      &.disabled {
        cursor: default;
        color: ${theme.colors.grayC};
      }
    `;
  }}
`;

export const TabsContext = React.createContext<TabsExtProps>({
  activeKey: '',
  onSelect: () => {},
  push: (v: TabProps) => {}
});

export const Tabs: React.FC<TabsProps> = ({ activeKey, onSelect = () => {}, children }) => {
  const [tablist, setTablist] = useState<TabProps[]>([]);
  return (
    <TabsContext.Provider
      value={{
        activeKey: activeKey,
        onSelect: onSelect,
        push: (v) => setTablist((prev) => [...prev, v])
      }}
    >
      <StyledNav>
        <StyledTabUl>
          {tablist.map((el, elIdx) => (
            <StyledTabLi
              key={elIdx}
              className={el.disabled ? 'disabled' : activeKey === el.eventKey ? 'active' : undefined}
              onClick={() => !el.disabled && onSelect(el.eventKey)}
            >
              {el.title}
            </StyledTabLi>
          ))}
        </StyledTabUl>
      </StyledNav>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

export default Tabs;
