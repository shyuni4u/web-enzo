import React, { CSSProperties } from 'react';
import SelectSearching, { SelectSearchingItemProps, SelectSearchingItemWithOrderProps } from './SelectSearching';
import SelectBase from './SelectBase';

export type SelectItemProps = SelectSearchingItemProps;
export type SelectItemWithOrderProps = SelectSearchingItemWithOrderProps;

export type SelectProps = {
  /**
   * Item list required
   */
  items: SelectItemProps[];
  /**
   * default values
   */
  defaultValue?: SelectItemProps;
  /**
   * CSS
   */
  style?: CSSProperties;
  /**
   * Color type
   */
  variant?: 'normal' | 'primary' | 'success' | 'danger' | 'warning';
  /**
   * readonly
   */
  readonly?: boolean;
  /**
   * Is disabled
   */
  disabled?: boolean;
  /**
   * Searching
   */
  searching?: boolean;
  /**
   * placeholder
   */
  placeholder?: string;
  /**
   * clearable
   */
  clearable?: boolean;
  /**
   * item list max height (px)
   */
  maxHeight?: number;
  /**
   * onClick
   */
  onClick?: (e?: any) => void;
  /**
   * onChange
   */
  onChange?: (selectedItem: SelectItemProps) => void;
};

const defaultWrapperHeight = 40;
const defaultItemListMaxHeight = 300;

/**
 * Primary UI component for user interaction
 */
export const Select: React.FC<SelectProps> = ({
  items = [],
  defaultValue = null,
  style = {},
  variant = 'normal',
  readonly = false,
  disabled = false,
  searching = false,
  placeholder = 'Select ...',
  clearable = false,
  maxHeight = defaultItemListMaxHeight,
  onClick = () => {},
  onChange = (_) => {}
}) => {
  if (searching) {
    return (
      <SelectSearching
        items={items}
        defaultValue={defaultValue}
        style={style}
        variant={variant}
        readonly={readonly}
        disabled={disabled}
        searching={searching}
        placeholder={placeholder}
        clearable={clearable}
        maxHeight={maxHeight}
        onClick={onClick}
        onChange={onChange}
      />
    );
  } else {
    return (
      <SelectBase
        items={items}
        defaultValue={defaultValue}
        style={style}
        variant={variant}
        readonly={readonly}
        disabled={disabled}
        searching={searching}
        placeholder={placeholder}
        clearable={clearable}
        maxHeight={maxHeight}
        onClick={onClick}
        onChange={onChange}
      />
    );
  }
};

export default Select;
