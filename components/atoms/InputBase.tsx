import React, { forwardRef, ReactNode } from 'react';
import InputText from './InputText';
import InputNumber from './InputNumber';
import Textarea from './Textarea';
import InputPassword from './InputPassword';

type MInputBaseProps = React.InputHTMLAttributes<HTMLInputElement> & {
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
export type InputBaseProps = React.DetailedHTMLProps<MInputBaseProps, HTMLInputElement>;

export const InputBase = forwardRef((props: InputBaseProps, ref: React.Ref<HTMLInputElement>) => {
  const type = props.type || 'text';
  const sizeMoreh = props.sizeMoreh || 'medium';
  const variant = props.variant || 'outline';
  const label = props.label || undefined;
  const message = props.message || undefined;
  const error = props.error || false;
  const leadingIcon = props.leadingIcon || undefined;
  const trailingIcon = props.trailingIcon || undefined;
  const leadingIconClassName = props.leadingIconClassName || '';
  const trailingIconClassName = props.trailingIconClassName || '';

  if (type === 'text') {
    return (
      <InputText
        sizeMoreh={sizeMoreh}
        variant={variant}
        label={label}
        message={message}
        error={error}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
        leadingIconClassName={leadingIconClassName}
        trailingIconClassName={trailingIconClassName}
        {...props}
        ref={ref}
      />
    );
  } else if (type === 'number') {
    return (
      <InputNumber
        sizeMoreh={sizeMoreh}
        variant={variant}
        label={label}
        message={message}
        error={error}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
        leadingIconClassName={leadingIconClassName}
        trailingIconClassName={trailingIconClassName}
        {...props}
        ref={ref}
      />
    );
  } else if (type === 'password') {
    return (
      <InputPassword
        sizeMoreh={sizeMoreh}
        variant={variant}
        label={label}
        message={message}
        error={error}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
        leadingIconClassName={leadingIconClassName}
        trailingIconClassName={trailingIconClassName}
        {...props}
        ref={ref}
      />
    );
  } else {
    return <span>not yet</span>;
  }
});

type MTextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
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
export type TextAreaProps = React.DetailedHTMLProps<MTextAreaProps, HTMLTextAreaElement>;

export const TextArea = forwardRef((props: TextAreaProps, ref: React.Ref<HTMLTextAreaElement>) => {
  const variant = props.variant || 'outline';
  const label = props.label || undefined;
  const message = props.message || undefined;
  const error = props.error || false;
  const leadingIcon = props.leadingIcon || undefined;
  const trailingIcon = props.trailingIcon || undefined;
  const leadingIconClassName = props.leadingIconClassName || '';
  const trailingIconClassName = props.trailingIconClassName || '';

  return (
    <Textarea
      variant={variant}
      label={label}
      message={message}
      error={error}
      leadingIcon={leadingIcon}
      trailingIcon={trailingIcon}
      leadingIconClassName={leadingIconClassName}
      trailingIconClassName={trailingIconClassName}
      {...props}
      ref={ref}
    />
  );
});

export default InputBase;
