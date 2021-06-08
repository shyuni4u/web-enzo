import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

export type BreadcrumbsProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLOListElement>, HTMLOListElement>;

type MBreadcrumbsItemProps = React.HTMLAttributes<HTMLLIElement> & {
  /**
   * <href> attribute for the inner <a> element
   */
  href?: string;
  /**
   * <target> attribute for the inner <a> element
   */
  target?: string;
  /**
   * Adds a visual "active" state to a Breadcrumb Item and disables the link.
   */
  active?: boolean;
};
export type BreadcrumbsItemProps = React.DetailedHTMLProps<MBreadcrumbsItemProps, HTMLSpanElement>;

const StyledBreadcrumbs = styled.ol`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      display: flex;
      flex-wrap: wrap;

      & > li:not(:last-child)::after {
        content: '/';
        color: ${colors.grayC};
        padding: 0 5px;
      }
    `;
  }}
`;

const StyledBreadcrumbsItem = styled.li`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      display: flex;
      color: ${colors.gray8};

      &:hover {
        /* color: ${colors.black}; */
      }

      &.active {
        color: ${colors.black};
        font-weight: 600;
      }
    `;
  }}
`;

export const Breadcrumbs: any & typeof Item = forwardRef(
  (props: BreadcrumbsProps, ref: React.Ref<HTMLOListElement>) => {
    return (
      <nav aria-label={'breadcrumb'}>
        <StyledBreadcrumbs {...props} ref={ref}>
          {props.children}
        </StyledBreadcrumbs>
      </nav>
    );
  }
);

const Item = forwardRef((props: BreadcrumbsItemProps, ref: React.Ref<HTMLLIElement>) => {
  // href = '#',
  // target = undefined,
  // title = '',
  // active = false
  return (
    <StyledBreadcrumbsItem
      className={props.active ? 'active' : undefined}
      aria-current={props.active ? 'page' : undefined}
      {...props}
      ref={ref}
    >
      {props.active && <span style={{ userSelect: 'none' }}>{props.children}</span>}
      {
        !props.active && props.children
        // <a href={props.href} target={props.target}>
        //   {props.children}
        // </a>
      }
    </StyledBreadcrumbsItem>
  );
});

Breadcrumbs.Item = Item;

export default Breadcrumbs;
