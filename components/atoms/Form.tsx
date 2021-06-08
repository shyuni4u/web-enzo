import React, { forwardRef } from 'react';

type MFormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  /**
   * If true, the button will be disabled
   */
  isView?: boolean;
};
export type FormProps = React.DetailedHTMLProps<MFormProps, HTMLFormElement>;

export const FormContext = React.createContext(false);

export const Form = forwardRef((props: FormProps, ref: React.Ref<HTMLFormElement>) => {
  return (
    <FormContext.Provider value={props.isView}>
      <form {...props} ref={ref}>
        {props.children}
      </form>
    </FormContext.Provider>
  );
});

export default Form;
