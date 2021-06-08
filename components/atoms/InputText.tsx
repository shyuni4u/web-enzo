import React, { useContext, useEffect, useState, forwardRef, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { BsExclamationCircle } from 'react-icons/bs';
import { FormContext } from './Form';

type MInputTextProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /**
   * The size of the input. (With labels, the size is fixed 'large'.)
   */
  sizeMoreh?: 'medium' | 'large';
  /**
   * The variant of the input.
   */
  variant?: 'outline' | 'ghost';
  /**
   * Label text to be present in the top of the input.
   */
  label?: string;
  /**
   * The message of the input element.
   */
  message?: string;
  /**
   * Error.
   */
  error?: boolean;
  /**
   * Icon before the children
   */
  leadingIcon?: ReactNode;
  /**
   * Icon after the children
   */
  trailingIcon?: ReactNode;
  /**
   * For css customization
   */
  leadingIconClassName?: string;
  /**
   * For css customization
   */
  trailingIconClassName?: string;
};
export type InputTextProps = React.DetailedHTMLProps<MInputTextProps, HTMLInputElement>;

type StyledInputTextProps = {
  _size: 'medium' | 'large';
  focus: boolean;
  label?: string;
  variant: 'outline' | 'ghost';
  disabled?: boolean;
  error?: boolean;
};
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const StyledInputTextWrapper = styled.div<StyledInputTextProps>`
  position: relative;
  box-sizing: border-box;
  height: ${(prop) => (prop._size === 'large' ? '50px' : '40px')};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8px;
  align-items: center;
  border-radius: 4px;
  border: 1px solid
    ${(prop) => {
      if (prop.error) return prop.theme.colors.red;
      else {
        if (prop.variant === 'ghost' && prop.focus) return prop.theme.colors.black;
        else if (prop.variant === 'ghost' && !prop.focus) return prop.theme.colors.white;
        else if (prop.variant === 'outline' && prop.focus) return prop.theme.colors.black;
        else if (prop.variant === 'outline' && !prop.focus) return prop.theme.colors.grayC;
        else return prop.theme.colors.black;
      }
    }};
  background-color: ${(prop) => (prop.disabled ? prop.theme.colors.grayE : prop.theme.colors.white)};
  outline-width: 0px;
`;
const StyledInputWithLabel = styled.div`
  flex: 1 1 auto;
  display: flex;
  input::placeholder {
    color: ${({ theme }) => theme.colors.grayC};
  }
`;
const StyledInputText = styled.input<StyledInputTextProps>`
  flex: 1 1 auto;
  line-height: 1.5;
  font-size: ${(prop) => (prop._size === 'large' ? prop.theme.fontSizes.f18 : prop.theme.fontSizes.f14)};
  font-weight: 400;
  border-radius: 3px;
  color: ${(prop) => (prop.disabled ? prop.theme.colors.grayC : prop.theme.colors.black)};
  ${(prop) =>
    prop.label
      ? css`
          margin-top: 18px;
        `
      : css``}

  -webkit-transition: 0.2s;
  transition: 0.2s;
`;
const StyledLabel = styled.label`
  position: absolute;
  top: 4px;
  font-size: ${({ theme }) => theme.fontSizes.f12};
  color: ${(prop) => prop.theme.colors.gray8};
  user-select: none;
`;
const StyledLeadingIcon = styled.span`
  margin-right: 5px;
  svg {
    vertical-align: middle;
    margin-bottom: 2px;
  }
`;
const StyledTrailingIcon = styled.span`
  margin-left: 5px;
  svg {
    vertical-align: middle;
    margin-bottom: 2px;
  }
`;
type StyledInputTextMessageProps = {
  error?: boolean;
};
const StyledInputTextMessage = styled.span<StyledInputTextMessageProps>`
  font-size: ${({ theme }) => theme.fontSizes.f12};
  color: ${(prop) => (prop.error ? prop.theme.colors.red : prop.theme.colors.gray8)};
  margin-top: 4px;
  svg {
    vertical-align: middle;
    margin-right: 5px;
  }
`;

type StyledViewProps = {
  size: 'medium' | 'large';
};
const StyledView = styled.div<StyledViewProps>`
  width: 100%;
  min-height: ${(prop) => (prop.size === 'large' ? '50px' : '40px')};
  justify-content: center;
  padding: 5px 8px;
  align-items: center;
`;

export const InputText = forwardRef((props: InputTextProps, ref: React.Ref<HTMLInputElement>) => {
  const size = props.sizeMoreh || 'medium';
  const variant = props.variant || 'outline';
  const label = props.label || undefined;
  const placeholder = props.placeholder || 'Input text ...';
  const message = props.message || undefined;
  const error = props.error || false;
  const leadingIcon = props.leadingIcon || undefined;
  const trailingIcon = props.trailingIcon || undefined;
  const leadingIconClassName = props.leadingIconClassName || '';
  const trailingIconClassName = props.trailingIconClassName || '';

  const isView = useContext(FormContext);
  if (isView) {
    return <StyledView size={size}>{props.value}</StyledView>;
  } else {
    const [focus, setFocus] = useState(false);

    useEffect(() => setFocus(false), []);

    return (
      <StyledWrapper style={props.style}>
        <StyledInputTextWrapper
          _size={size}
          focus={focus}
          variant={variant}
          error={error}
          disabled={props.disabled}
          tabIndex={-1}
        >
          {leadingIcon && <StyledLeadingIcon className={leadingIconClassName}>{leadingIcon}</StyledLeadingIcon>}
          <StyledInputWithLabel>
            {label && <StyledLabel>{label}</StyledLabel>}
            <StyledInputText
              _size={size}
              focus={focus}
              variant={variant}
              label={label}
              placeholder={placeholder}
              {...props}
              onFocus={(e) => {
                setFocus(true);
                props.onFocus && props.onFocus(e);
              }}
              onBlur={(e) => {
                setFocus(false);
                props.onBlur && props.onBlur(e);
              }}
              ref={ref}
            />
          </StyledInputWithLabel>
          {trailingIcon && <StyledTrailingIcon className={trailingIconClassName}>{trailingIcon}</StyledTrailingIcon>}
        </StyledInputTextWrapper>
        {message && (
          <StyledInputTextMessage error={error}>
            <BsExclamationCircle />
            {message}
          </StyledInputTextMessage>
        )}
      </StyledWrapper>
    );
  }
});

export default InputText;
