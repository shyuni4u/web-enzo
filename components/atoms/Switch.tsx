import React, { forwardRef, CSSProperties } from 'react';
import styled, { css } from 'styled-components';

type MSwitchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /**
   * The variant of the badge.
   */
  variant?: 'main' | 'purple' | 'green' | 'red' | 'yellow' | 'blue' | 'cornflowerblue' | 'black' | 'white' | 'gray8';
  /**
   * Label (wrapper) CSS.
   */
  labelStyle?: CSSProperties;
  /**
   * Label.
   */
  label?: string;
};
export type SwitchProps = React.DetailedHTMLProps<MSwitchProps, HTMLInputElement>;

const StyledSwitchLabel = styled.label<SwitchProps>`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;
const StyledSwitch = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 0;
`;
const StyledSlider = styled.span<SwitchProps>`
  ${(prop) => {
    const { colors, fontSizes } = prop.theme;
    return css`
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${prop.checked ? '#2196f3' : '#ccc'};
      -webkit-transition: 0.4s;
      transition: 0.4s;

      user-select: none;

      &:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        ${prop.checked
          ? css`
              -webkit-transform: translateX(26px);
              -ms-transform: translateX(26px);
              transform: translateX(26px);
            `
          : undefined};
      }
    `;
  }}
`;

export const Switch = forwardRef((props: SwitchProps, ref: React.Ref<HTMLInputElement>) => {
  return (
    <StyledSwitchLabel style={props.labelStyle}>
      <StyledSwitch type={'checkbox'} {...props} ref={ref} />
      <StyledSlider checked={props.checked}>{props.label}</StyledSlider>
    </StyledSwitchLabel>
  );
});

export default Switch;
