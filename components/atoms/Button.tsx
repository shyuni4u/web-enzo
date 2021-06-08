import React, { useContext, ReactNode, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { FormContext } from './Form';

type MButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button.
   */
  variant?: 'fill' | 'outline' | 'ghost';
  /**
   * Icon before the children.
   */
  leadingIcon?: ReactNode;
};

export type ButtonProps = React.DetailedHTMLProps<MButtonProps, HTMLButtonElement>;

type StyledButtonProps = {
  size: 'small' | 'medium' | 'large';
  variant: 'fill' | 'outline' | 'ghost';
  bDisabled: boolean;
};
const StyledButton = styled.button<StyledButtonProps>`
  line-height: 1.5;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.f14};
  background: ${(prop) =>
    prop.variant === 'fill'
      ? prop.theme.colors.main
      : prop.variant === 'outline'
      ? prop.theme.colors.white
      : prop.theme.colors.none};
  border: 1px solid
    ${(prop) =>
      prop.variant === 'fill'
        ? prop.theme.colors.main
        : prop.variant === 'outline'
        ? prop.theme.colors.black
        : 'transparent'};
  ${(prop) =>
    prop.variant === 'ghost'
      ? css`
          text-decoration: underline;
        `
      : undefined}
  color: ${(prop) =>
    prop.variant === 'fill'
      ? prop.theme.colors.white
      : prop.variant === 'outline'
      ? prop.theme.colors.black
      : prop.theme.colors.main};
  min-width: ${(prop) => (prop.size === 'large' ? '180px' : prop.size === 'medium' ? '100px' : '60px')};
  padding: ${(prop) => (prop.size === 'large' ? '14px 30px' : prop.size === 'medium' ? '9px 20px' : '4px 10px')};
  text-transform: uppercase;
  border-radius: 5px;
  opacity: ${(prop) => (prop.bDisabled ? 0.7 : 1)};
  cursor: pointer;
  ${(prop) =>
    prop.bDisabled
      ? css`
          color: ${prop.theme.colors.white};
          border: 1px solid ${prop.theme.colors.grayC};
          background-color: ${prop.theme.colors.grayC};
          cursor: default;
        `
      : css`
          &:hover {
            ${prop.variant === 'fill'
              ? css`
                  background: ${prop.theme.colors.hover};
                  border: 1px solid ${prop.theme.colors.hover};
                  color: ${prop.theme.colors.white};
                `
              : prop.variant === 'outline'
              ? css`
                  background-color: ${prop.theme.colors.grayF};
                `
              : css`
                  color: ${prop.theme.colors.hover};
                  :after {
                    border-bottom: 1px solid ${prop.theme.colors.main};
                  }
                `};
            outline-width: 0;
          }
        `};

  -webkit-transition: 0.3s;
  transition: 0.3s;
  &.primary {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.main};
    border: 1px solid ${({ theme }) => theme.colors.main};
    ${(prop) =>
      prop.bDisabled
        ? css``
        : css`
            &:hover {
              background: ${({ theme }) => theme.colors.hover};
              color: ${({ theme }) => theme.colors.white};
              outline-width: 0;
            }
          `};
  }
`;
const StyledIcon = styled.span`
  margin-right: 5px;
  svg {
    vertical-align: middle;
    /* margin-bottom: 1px; */
    font-size: 16px;
  }
`;

export const Button = forwardRef((props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const isView = useContext(FormContext);

  if (isView) {
    return <></>;
  } else {
    return (
      <StyledButton
        type={props.type || 'button'}
        size={props.size || 'medium'}
        variant={props.variant || 'outline'}
        bDisabled={props.disabled}
        {...props}
        ref={ref}
      >
        {props.leadingIcon && <StyledIcon>{props.leadingIcon}</StyledIcon>}
        {props.children}
      </StyledButton>
    );
  }
});

export default Button;
