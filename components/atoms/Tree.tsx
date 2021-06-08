import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import TreeItem, { TreeItemProps } from './TreeItem';

type MTreeProps = React.OlHTMLAttributes<HTMLOListElement> & {
  /**
   * If you used json api result, don't create children. Using items attributes.
   */
  items?: TreeItemProps[];
};
export type TreeProps = React.DetailedHTMLProps<MTreeProps, HTMLOListElement>;

const StyledTree = styled.ul`
  ${({ theme }) => {
    return css``;
  }}
`;

export const Tree = forwardRef((props: TreeProps, ref: React.Ref<HTMLOListElement>) => {
  const items = props.items || [];

  return (
    <StyledTree {...props} ref={ref}>
      {items.map((el, elIdx) => (
        <TreeItem
          key={elIdx}
          text={el.text}
          onClick={(e) => el.onClick(e)}
          sub={el.sub}
          subClose={el.subClose}
        ></TreeItem>
      ))}
    </StyledTree>
  );
});

export default Tree;
