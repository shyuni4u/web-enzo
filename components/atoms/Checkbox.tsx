import React, { forwardRef, CSSProperties } from 'react';
import styled from 'styled-components';

type MCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /**
   * The variant of the badge.
   */
  variant?: 'main' | 'purple' | 'green' | 'red' | 'yellow' | 'blue' | 'cornflowerblue' | 'black' | 'white' | 'gray8';
  /**
   * Border pill.
   */
  pill?: boolean;
  /**
   * If you make this 'true' the UI will change to the radio type
   */
  radio?: boolean;
  /**
   * Label (wrapper) CSS.
   */
  labelStyle?: CSSProperties;
  /**
   * Label.
   */
  label?: string;
};
export type CheckboxProps = React.DetailedHTMLProps<MCheckboxProps, HTMLInputElement>;

const StyledCheckboxLabel = styled.label<CheckboxProps>`
  color: ${(props) => (props.disabled ? ({ theme }) => theme.colors.grayC : ({ theme }) => theme.colors.black)};
  text-align: left;
  width: 100%;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;
const StyledCheckboxText = styled.span<CheckboxProps>`
  color: ${(props) => (props.disabled ? ({ theme }) => theme.colors.grayC : ({ theme }) => theme.colors.black)};
  text-align: left;
  vertical-align: top;
  margin-left: 5px;
  user-select: none;
`;
const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  margin: 0;
`;
const StyledCheckboxMarkOut = styled.span<CheckboxProps>`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background-color: ${(props) =>
    props.checked ? ({ theme }) => theme.colors.white : ({ theme }) => theme.colors.white};
  border-width: 0 2px 2px 0;
  border: solid 1px
    ${(props) =>
      props.disabled
        ? ({ theme }) => theme.colors.grayC
        : props.checked
        ? ({ theme }) => theme.colors.main
        : ({ theme }) => theme.colors.grayA};
  :before {
    content: '';
    position: absolute;
    top: 0px;
    left: 5px;
    width: 6px;
    height: 11px;
    border: solid ${(props) => (props.disabled ? ({ theme }) => theme.colors.grayC : ({ theme }) => theme.colors.main)};
    border-radius: 2px;
    background-color: transparent;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    display: ${(props) => (props.checked ? 'inherit' : 'none')};
  }
`;
const StyledRadioButtonMarkOut = styled.span<CheckboxProps>`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  border: solid 1px
    ${(props) =>
      props.disabled
        ? ({ theme }) => theme.colors.grayC
        : props.checked
        ? ({ theme }) => theme.colors.main
        : ({ theme }) => theme.colors.grayA};
  :before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 10px;
    height: 10px;
    border: solid ${(props) => (props.disabled ? ({ theme }) => theme.colors.grayC : ({ theme }) => theme.colors.main)};
    border-radius: 50%;
    background-color: ${(props) =>
      props.disabled ? ({ theme }) => theme.colors.grayC : ({ theme }) => theme.colors.main};
    border-width: 0;
    display: ${(props) => (props.checked ? 'inherit' : 'none')};
  }
`;

export const Checkbox = forwardRef((props: CheckboxProps, ref: React.Ref<HTMLInputElement>) => {
  return (
    <StyledCheckboxLabel style={props.style}>
      <StyledCheckbox type={props.radio ? 'radio' : 'checkbox'} {...props} ref={ref} />
      {props.radio && (
        <>
          <StyledRadioButtonMarkOut checked={props.checked} disabled={props.disabled} />
        </>
      )}
      {!props.radio && (
        <>
          <StyledCheckboxMarkOut checked={props.checked} disabled={props.disabled} />
        </>
      )}
      <StyledCheckboxText disabled={props.disabled}>{props.label}</StyledCheckboxText>
    </StyledCheckboxLabel>
  );
});

export default Checkbox;
