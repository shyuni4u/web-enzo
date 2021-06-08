import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

type MMenuItemProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Adds a visual "active" state to a Menu Item..
   */
  active?: boolean;
};
export type MenuItemProps = React.DetailedHTMLProps<MMenuItemProps, HTMLDivElement>;

const StyledMenuItem = styled.div`
  ${({ theme }) => {
    return css`
      ${theme.media.mobile`${`
        display: flex;
        align-items: center;
        color: ${theme.colors.grayA};
        font-weight: 400;
        height: 40px;
        width: 100%;
        padding: 4px ${theme.layoutSize.mobilePadding};
        user-select: none;
        cursor: pointer;

        &.active {
          color: ${theme.colors.black};
          cursor: default;
        }
        &:not(.active):hover {
        }
      `}`}
      ${theme.media.tablet`${`
        display: inline-block;
        color: ${theme.colors.grayA};
        font-weight: 400;
        height: ${theme.layoutSize.headerHeight};
        line-height: ${theme.layoutSize.headerHeight};
        vertical-align: middle;
        margin: 0 20px;
        background-color: transparent;
        user-select: none;
        cursor: pointer;
        transition: color 130ms ease-out;

        &.active {
          color: ${theme.colors.black};
          :after {
            content: '';
            display: block;
            border-bottom: 2px solid ${theme.colors.main};
            margin-top: -15px;
          }
          cursor: default;
        }
        &:not(.active):hover {
          color: ${theme.colors.black};
        }`}`}
      ${theme.media.desktop`${`
        display: inline-block;
        color: ${theme.colors.grayA};
        font-weight: 400;
        height: ${theme.layoutSize.headerHeight};
        line-height: ${theme.layoutSize.headerHeight};
        vertical-align: middle;
        margin: 0 20px;
        background-color: transparent;
        user-select: none;
        cursor: pointer;
        transition: color 130ms ease-out;

        &.active {
          color: ${theme.colors.black};
          :after {
            content: '';
            display: block;
            border-bottom: 2px solid ${theme.colors.main};
            margin-top: -15px;
          }
          cursor: default;
        }
        &:not(.active):hover {
          color: ${theme.colors.black};
        }`}`}
      ${theme.media.notebook`${`
        display: inline-block;
        color: ${theme.colors.grayA};
        font-weight: 400;
        height: ${theme.layoutSize.headerHeight};
        line-height: ${theme.layoutSize.headerHeight};
        vertical-align: middle;
        margin: 0 20px;
        background-color: transparent;
        user-select: none;
        cursor: pointer;
        transition: color 130ms ease-out;

        &.active {
          color: ${theme.colors.black};
          :after {
            content: '';
            display: block;
            border-bottom: 2px solid ${theme.colors.main};
            margin-top: -15px;
          }
          cursor: default;
        }
        &:not(.active):hover {
          color: ${theme.colors.black};
        }`}`}
    `;
  }}
`;

export const MenuItem = forwardRef((props: MenuItemProps, ref: React.Ref<HTMLDivElement>) => {
  const active = props.active || false;
  return (
    <StyledMenuItem className={active ? `${props.className} active` : undefined} {...props} ref={ref}>
      {props.children}
    </StyledMenuItem>
  );
});

export default MenuItem;
