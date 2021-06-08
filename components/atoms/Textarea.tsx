import React, { useContext, useEffect, useState, forwardRef, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { BsExclamationCircle } from 'react-icons/bs';
import { FormContext } from './Form';

type MTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
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
export type TextareaProps = React.DetailedHTMLProps<MTextareaProps, HTMLTextAreaElement>;

type StyledInputTextareaProps = {
  focus?: boolean;
  label?: string;
  variant: 'outline' | 'ghost';
  error?: boolean;
};
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const StyledInputTextareaWrapper = styled.div<StyledInputTextareaProps>`
  position: relative;
  box-sizing: border-box;
  min-height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4px 8px;
  align-items: center;
  background-color: ${(prop) => prop.theme.colors.white};
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
  outline-width: 0px;
`;
const StyledInputWithLabel = styled.div`
  flex: 1 1 auto;
  display: flex;
  textarea::placeholder {
    color: ${({ theme }) => theme.colors.grayC};
  }
`;
const StyledInputTextarea = styled.textarea<StyledInputTextareaProps>`
  flex: 1 1 auto;
  line-height: 1.5;
  font-size: ${(prop) => prop.theme.fontSizes.f14};
  font-weight: 400;
  border-radius: 3px;
  ${(prop) =>
    prop.label
      ? css`
          margin-top: 18px;
        `
      : css``}

  outline: 0px;
  border: 0px;
  resize: none;
  -webkit-transition: 0.2s;
  transition: 0.2s;
`;
const StyledLabel = styled.label`
  position: absolute;
  top: 2px;
  font-size: ${({ theme }) => theme.fontSizes.f12};
  color: ${({ theme }) => theme.colors.gray8};
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
type StyledInputTextareaMessageProps = {
  error?: boolean;
};
const StyledInputTextareaMessage = styled.span<StyledInputTextareaMessageProps>`
  font-size: ${({ theme }) => theme.fontSizes.f12};
  color: ${(prop) => (prop.error ? prop.theme.colors.red : prop.theme.colors.gray8)};
  margin-top: 4px;
  svg {
    vertical-align: middle;
    margin-right: 5px;
  }
`;

const StyledView = styled.textarea`
  box-sizing: border-box;
  min-height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4px 8px;
  align-items: center;
  line-height: 1.5;
  outline: 0px;
  border: 0px;
  resize: none;
  font-size: 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
`;

export const InputTextarea = forwardRef((props: TextareaProps, ref: React.Ref<HTMLTextAreaElement>) => {
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
    return (
      <StyledView rows={props.rows} readOnly={true}>
        {props.value}
      </StyledView>
    );
  } else {
    const [focus, setFocus] = useState(false);

    useEffect(() => setFocus(false), []);

    return (
      <StyledWrapper style={props.style}>
        <StyledInputTextareaWrapper focus={focus} variant={variant} error={error} tabIndex={-1}>
          {leadingIcon && <StyledLeadingIcon className={leadingIconClassName}>{leadingIcon}</StyledLeadingIcon>}
          <StyledInputWithLabel>
            {label && <StyledLabel>{label}</StyledLabel>}
            <StyledInputTextarea
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
        </StyledInputTextareaWrapper>
        {message && (
          <StyledInputTextareaMessage error={error}>
            <BsExclamationCircle />
            {message}
          </StyledInputTextareaMessage>
        )}
      </StyledWrapper>
    );
  }
});

export default InputTextarea;
