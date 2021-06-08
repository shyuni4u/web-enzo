import React, { useContext, ReactNode } from 'react';
import styled, { css } from 'styled-components';

export type ListProps = {
  /**
   * ActiveKey. list name displayed.
   */
  activeKey: string | any;
  /**
   * Select event function
   */
  onSelect?: (e?: any) => void;
};

export type ListItemProps = {
  /**
   * Value.
   */
  eventKey: string | any;
  /**
   * Disabled.
   */
  disabled?: boolean;
  /**
   * Icon before the children.
   */
  leadingIcon?: ReactNode;
};

const StyledListUl = styled.ul`
  ${({ theme }) => {
    return css`
      margin-top: 30px;
    `;
  }}
`;
const StyledListLi = styled.li`
  ${({ theme }) => {
    return css`
      padding: 0 20px;
      margin-bottom: 5px;
      /* padding-left: 26px; */
      /* border-left: 4px solid transparent; */
      color: ${theme.colors.gray8};
      user-select: none;
      cursor: pointer;
      div {
        padding: 8px 8px 8px 10px;
        border-radius: 6px;
        transition: background-color 130ms ease-out;
        &.active {
          color: ${theme.colors.main};
          background-color: ${theme.colors.main}11;
        }
        &:not(.active):hover {
          transition: background-color 130ms ease-out;
          color: ${theme.colors.black};
          background-color: ${theme.colors.grayF};
        }
      }
    `;
  }}
`;
const StyledIcon = styled.span`
  margin-right: 8px;
  svg {
    vertical-align: middle;
    margin-bottom: 2px;
  }
`;

export const ListContext = React.createContext<ListProps>({
  activeKey: '',
  onSelect: () => {}
});

export const List: React.FC<ListProps> & { Item: React.FC<ListItemProps> } = ({
  activeKey = '',
  onSelect = () => {},
  children
}) => {
  return (
    <ListContext.Provider value={{ activeKey: activeKey, onSelect: onSelect }}>
      <StyledListUl>{children}</StyledListUl>
    </ListContext.Provider>
  );
};

const Item: React.FC<ListItemProps> = ({ eventKey = '', disabled = false, leadingIcon = undefined, children }) => {
  const selected = useContext(ListContext);
  return (
    <StyledListLi onClick={() => selected.onSelect(eventKey)}>
      <div className={eventKey === selected.activeKey ? 'active' : undefined}>
        {leadingIcon && <StyledIcon>{leadingIcon}</StyledIcon>}
        {children}
      </div>
    </StyledListLi>
  );
};

List.Item = Item;

export default List;
