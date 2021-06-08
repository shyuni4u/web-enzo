import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

export type TreeItemProps = {
  /**
   * Text.
   */
  text: string;
  /**
   * Callback when click.
   */
  onClick?: (e?: any) => void;
  /**
   * Sub list (like children).
   */
  sub?: TreeItemProps[];
  /**
   * Open sub
   */
  subClose?: boolean;
  /**
   * Item level.
   */
  level?: number;
};

const StyledUl = styled.ul`
  ${({ theme }) => {
    return css``;
  }}
`;

const StyledLi = styled.li`
  ${({ theme }) => {
    return css`
      display: flex;
      vertical-align: middle;
      padding: 10px;
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid ${theme.colors.grayE};
      background-color: ${theme.colors.white};
      &:hover {
        background-color: ${theme.colors.grayE};
      }

      &.first {
        &:hover {
          background-color: ${theme.colors.grayE};
        }
      }
    `;
  }}
`;
const StyledLiText = styled.div`
  ${({ theme }) => {
    return css`
      flex: 1 1 auto;
    `;
  }}
`;
const StyledLiButton = styled.div`
  ${({ theme }) => {
    return css`
      flex: 0 0 30px;
      vertical-align: middle;
    `;
  }}
`;

type StyledSubTreeProps = {
  close?: boolean;
};
const StyledSubTree = styled.li<StyledSubTreeProps>`
  ${(prop) => {
    return css`
      display: ${prop.close ? 'none' : 'inherit'};
    `;
  }}
`;

export const TreeItem: React.FC<TreeItemProps> = ({
  text = '',
  onClick = () => {},
  sub = undefined,
  subClose = false,
  level = 0
}) => {
  const [close, setClose] = useState<boolean>(subClose);
  if (sub && sub.length > 0) {
    return (
      <>
        <StyledLi className={level === 0 ? 'first' : ''}>
          <StyledLiText onClick={(e) => onClick(e)}>{text}</StyledLiText>
          {sub && sub.length > 0 && (
            <StyledLiButton onClick={() => setClose((prev) => !prev)}>
              {close ? <BsChevronUp /> : <BsChevronDown />}
            </StyledLiButton>
          )}
        </StyledLi>
        <StyledSubTree close={close}>
          <StyledUl>
            {sub.map((el, elIdx) => (
              <TreeItem
                key={elIdx}
                text={el.text}
                onClick={(e) => el.onClick(e)}
                sub={el.sub}
                subClose={el.subClose}
                level={level + 1}
              ></TreeItem>
            ))}
          </StyledUl>
        </StyledSubTree>
      </>
    );
  } else {
    return (
      <StyledLi className={level === 0 ? 'first' : ''}>
        <StyledLiText onClick={(e) => onClick(e)}>{text}</StyledLiText>
      </StyledLi>
    );
  }
};

export default TreeItem;
