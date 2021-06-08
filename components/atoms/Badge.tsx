import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

type MBadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  /**
   * The variant of the badge.
   */
  variant?: 'main' | 'purple' | 'green' | 'red' | 'yellow' | 'blue' | 'cornflowerblue' | 'black' | 'white' | 'gray8';
  /**
   * Border pill.
   */
  pill?: boolean;
};

export type BadgeProps = React.DetailedHTMLProps<MBadgeProps, HTMLSpanElement>;

const StyledBadge = styled.span<BadgeProps>`
  ${(prop) => {
    const { colors, fontSizes } = prop.theme;
    return css`
      display: inline-block;
      padding: 5px 10px;
      font-size: ${fontSizes.f12};
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      text-transform: uppercase;
      border-radius: ${prop.pill ? '15px' : '4px'};
      ${prop.variant === 'main' ||
      prop.variant === 'purple' ||
      prop.variant === 'green' ||
      prop.variant === 'red' ||
      prop.variant === 'yellow' ||
      prop.variant === 'blue' ||
      prop.variant === 'cornflowerblue' ||
      prop.variant === 'black' ||
      prop.variant === 'gray8'
        ? css`
            color: ${colors.white};
            background-color: ${colors[prop.variant]};
          `
        : css`
            color: ${colors.black};
            background-color: ${colors[prop.variant]};
          `}
    `;
  }}
`;

export const Badge = forwardRef((props: BadgeProps, ref: React.Ref<HTMLSpanElement>) => {
  return (
    <StyledBadge variant={props.variant || 'main'} pill={props.pill || false} {...props} ref={ref}>
      {props.children}
    </StyledBadge>
  );
});

export default Badge;
