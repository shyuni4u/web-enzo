import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

export type BoxProps = {
  /**
   * Wrapper CSS.
   */
  wrapperStyle?: CSSProperties;
  /**
   * Box CSS.
   */
  boxStyle?: CSSProperties;
  /**
   * Wrapper class name.
   */
  wrapperClassName?: string;
  /**
   * Box class name.
   */
  boxClassName?: string;
  /**
   * Title.
   */
  title?: string;
  /**
   * Horizontal.
   */
  horizontal?: 'horizontal' | 'vertical';
};

const StyledWrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      padding: 0px 20px 25px 20px;
    `;
  }}
`;
const StyledTitle = styled.div`
  ${({ theme }) => {
    const { colors, fontSizes } = theme;
    return css`
      flex: 0 0 100%;
      color: ${colors.black};
      font-weight: 600;
      font-size: ${fontSizes.f18};
      margin-bottom: 10px;
    `;
  }}
`;
type StyledBoxProps = {
  horizontal: 'horizontal' | 'vertical';
};
const StyledBox = styled.div<StyledBoxProps>`
  ${({ theme, horizontal }) => {
    const { colors } = theme;
    return css`
      display: flex;
      flex-direction: ${horizontal === 'horizontal' ? 'row' : 'column'};
      flex-wrap: wrap;
      flex: 0 1 100%;
      background-color: ${colors.white};
      border: 1px solid ${colors.grayE};
      border-radius: 10px;
      padding: 20px;
    `;
  }}
`;

export const Box: React.FC<BoxProps> = ({
  wrapperStyle = {},
  wrapperClassName = undefined,
  boxStyle = {},
  boxClassName = undefined,
  title = undefined,
  horizontal = 'horizontal',
  children
}) => {
  return (
    <StyledWrapper className={wrapperClassName} style={wrapperStyle}>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledBox className={boxClassName} style={boxStyle} horizontal={horizontal}>
        {children}
      </StyledBox>
    </StyledWrapper>
  );
};

export default Box;
