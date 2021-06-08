import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

// https://projects.lukehaas.me/css-loaders/

type MSpinnerProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Background color.
   */
  backgroundColor?: string;
  /**
   * Border color.
   */
  color?: string;
  /**
   * Size (px).
   */
  size?: string;
  /**
   * Title.
   */
  title?: string;
};
export type SpinnerProps = React.DetailedHTMLProps<MSpinnerProps, HTMLDivElement>;
const StyledSpinnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    position: absolute;
    top: auto;
    left: auto;
  }
`;
const StyledSpinner = styled.div<SpinnerProps>`
  ${(prop) => {
    const color = prop.color === '' ? prop.theme.colors.yellow : prop.color;
    const backgroundColor = prop.backgroundColor === '' ? prop.theme.colors.grayE : prop.backgroundColor;
    return css`
      border: 10px solid ${backgroundColor}; /* Light grey */
      border-top: 10px solid ${color}; /* Blue */
      border-radius: 50%;
      width: ${prop.size};
      height: ${prop.size};
      animation: spin 2s linear infinite;

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `;
  }}
`;
export const Spinner = forwardRef((props: SpinnerProps, ref: React.Ref<HTMLDivElement>) => {
  const backgroundColor = props.backgroundColor || '';
  const color = props.color || '';
  const size = props.size || '80px';
  const title = props.title || '';

  return (
    <StyledSpinnerWrapper>
      <StyledSpinner backgroundColor={backgroundColor} color={color} size={size} {...props} ref={ref} />
      {title !== '' && <span>{title}</span>}
    </StyledSpinnerWrapper>
  );
});

export default Spinner;
