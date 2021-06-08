import React, { useEffect, useState, CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import { SelectSearchingItemProps } from './SelectSearching';

export type SelectBaseProps = {
  /**
   * Item list required
   */
  items: SelectSearchingItemProps[];
  /**
   * default values
   */
  defaultValue?: SelectSearchingItemProps;
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
  onChange?: (selectedItem: SelectSearchingItemProps) => void;
};

const defaultWrapperHeight = 32;
const defaultItemListMaxHeight = 300;

const StyledSelect = styled.select`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      height: ${defaultWrapperHeight}px;
      min-width: 150px;
      width: 100%;
      border: 1px solid ${colors.grayC};
      border-radius: 2px;
      padding-left: 10px;
      padding-right: 10px;
      outline: 0;
      line-height: 1;
      vertical-align: middle;

      -moz-appearance: none; /* Firefox */
      -webkit-appearance: none; /* Safari and Chrome */
      appearance: none;

      background-image: linear-gradient(45deg, transparent 45%, gray 45%, gray 55%, transparent 55%),
        linear-gradient(135deg, transparent 45%, gray 45%, gray 55%, transparent 55%);
      background-position: calc(100% - 20px) calc(1em - 2px), calc(100% - 13px) calc(1em - 2px);
      background-size: 8px 8px, 8px 8px;
      background-repeat: no-repeat;
    `;
  }}
`;

/**
 * Primary UI component for user interaction
 */
export const SelectSearching: React.FC<SelectBaseProps> = ({
  items = [],
  defaultValue = null,
  style = {},
  variant = 'normal',
  readonly = false,
  disabled = false,
  searching = false,
  placeholder = 'SelectSearching ...',
  clearable = false,
  maxHeight = defaultItemListMaxHeight,
  onClick = () => {},
  onChange = (_) => {}
}) => {
  const [val, setVal] = useState<SelectSearchingItemProps>(undefined);

  useEffect(() => {
    if (defaultValue) {
      onChange(defaultValue);
      setVal(defaultValue);
    } else {
      onChange(items[0]);
      setVal(items[0]);
    }
  }, []);

  if (val) {
    return (
      <StyledSelect
        style={style}
        value={val.value}
        onClick={(e?) => onClick(e)}
        onChange={(e) => {
          const rs = { value: e.target.value, label: e.target.selectedOptions[0].label };
          setVal(rs);
          onChange(rs);
        }}
      >
        {items.map((el, elIdx) => (
          <option key={elIdx} value={el.value}>
            {el.label}
          </option>
        ))}
      </StyledSelect>
    );
  } else {
    return <></>;
  }
};

export default SelectSearching;
