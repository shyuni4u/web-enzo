import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import styled from 'styled-components';

export type SelectMultiItemProps = {
  label: string;
  value: string;
};
export type SelectMultiItemWithOrderProps = SelectMultiItemProps & {
  order: number;
};
export type SelectMultiProps = {
  /**
   * Item list
   */
  items: SelectMultiItemProps[];
  /**
   * default values
   */
  defaultValue?: SelectMultiItemProps[];
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
  onClick?: () => void;
  /**
   * onChange
   */
  onChange?: (selectedItems: SelectMultiItemWithOrderProps[]) => void;
};

const defaultWrapperHeight = 40;
const defaultItemListMaxHeight = 200;
const defaultItemHeight = 32;

type StyledWrapperProps = {
  focus: boolean;
};
const StyledWrapper = styled.div<StyledWrapperProps>`
  line-height: 1.2;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${(prop) => (prop.focus ? prop.theme.colors.hover : prop.theme.colors.grayC)};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  min-width: 180px;
  width: 100%;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  min-height: 40px;
  box-sizing: border-box;
  outline: 0px !important;

  -webkit-transition: 0.2s;
  transition: 0.2s;
  z-index: 1;
`;
const StyledPlaceholder = styled.div`
  position: absolute;
  left: 10px;
  color: ${({ theme }) => theme.colors.gray8};
`;
const StyledItemBox = styled.div`
  display: flex;
  width: 100%;
`;
const StyledSelectMultiedItems = styled.div`
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;

  flex: 1 1 0%;
  overflow: hidden;
  padding: 4px 8px;
`;
const StyledAllClear = styled.div`
  -webkit-box-align: center;
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-shrink: 0;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.black};
`;

type StyledItemsProps = {
  posTop: number;
  show: boolean;
  maxHeight: number;
};
const StyledItems = styled.ul<StyledItemsProps>`
  position: absolute;
  top: ${(prop) => prop.posTop + 3}px;
  width: 100%;
  max-height: ${(prop) => prop.maxHeight}px;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.colors.grayC};
  border-radius: 4px;
  display: ${(prop) => (prop.show ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.colors.white};
`;
const StyledItem = styled.li`
  height: ${defaultItemHeight}px;
  padding: 4px 8px;
  &.highlight {
    background-color: ${({ theme }) => theme.colors.grayE};
  }
  &:not(.highlight):hover {
    background-color: ${({ theme }) => theme.colors.grayE};
  }
`;

const StyledSelectMultiedItemBox = styled.div`
  background-color: #ffd6ca59;
  border: 1px solid #f7834054;
  border-radius: 2px;
  display: flex;
  margin: 2px;
  min-width: 0px;
  box-sizing: border-box;
`;
const StyledSelectMultiedItem = styled.div`
  border-radius: 4px;
  font-size: 85%;
  overflow: hidden;
  padding: 3px 3px 3px 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
`;
const StyledSelectMultiedItemClose = styled.div`
  -webkit-box-align: center;
  align-items: center;
  border-radius: 2px;
  display: flex;
  padding-left: 4px;
  padding-right: 4px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

const StyledInputBoxWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
`;
const StyledInputBox = styled.div`
  overflow: hidden;
  white-space: nowrap;
`;
const StyledInput = styled.input`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 28px;
  margin: 2px;
  color: ${({ theme }) => theme.colors.black};
  &:focus {
    width: 100px;
  }
`;

const itemCloseSVG = (
  <svg
    height="14"
    width="14"
    viewBox="0 0 20 20"
    aria-hidden="true"
    focusable="false"
    style={{
      display: 'inline-block',
      fill: 'currentcolor',
      lineHeight: 1,
      stroke: 'currentcolor',
      strokeWidth: 0
    }}
  >
    <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
  </svg>
);
const itemAllCloseSVG = (
  <div
    style={{
      display: 'flex',
      padding: '8px',
      transition: 'color 150ms ease 0s',
      boxSizing: 'border-box'
    }}
  >
    <svg
      height="20"
      width="20"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      style={{
        display: 'inline-block',
        fill: 'currentcolor',
        lineHeight: 1,
        stroke: 'currentcolor',
        strokeWidth: 0
      }}
    >
      <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
    </svg>
  </div>
);

/**
 * Primary UI component for user interaction
 */
export const SelectMulti: React.FC<SelectMultiProps> = ({
  items = [],
  defaultValue = [],
  style = {},
  variant = 'normal',
  readonly = false,
  disabled = false,
  placeholder = 'SelectMulti ...',
  clearable = false,
  maxHeight = defaultItemListMaxHeight,
  onClick = () => {},
  onChange = (_) => {},
  ...props
}) => {
  const refWrapper = useRef(null);
  const refItemBox = useRef(null);
  const refInput = useRef(null);

  const refItemList = useRef(null); //  for scroll

  const [itemBoxHeight, setItemBoxHeight] = useState<number>(defaultWrapperHeight);
  const [showItems, setShowItems] = useState<boolean>(false);
  const [readyItems, setReadyItems] = useState<SelectMultiItemWithOrderProps[]>([]);
  const [filteredItems, setFilteredItems] = useState<SelectMultiItemWithOrderProps[]>([]);
  const [selectedItems, setSelectMultiedItems] = useState<SelectMultiItemWithOrderProps[]>([]);
  const [highlightIndex, setHighlightIndex] = useState<number>(0);

  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    //  for default value
    const temp = items.map((el: SelectMultiItemWithOrderProps, elIdx: number) => {
      el.order = elIdx;
      return el;
    });
    //  init
    setSelectMultiedItems([]);
    setReadyItems([]);
    temp.forEach((el) => {
      const check = defaultValue.some((defaultEl) => el.value === defaultEl.value);
      check ? setSelectMultiedItems((prev) => [...prev, el]) : setReadyItems((prev) => [...prev, el]);
    });

    //  for ready item list position
    const handleResize = () => setItemBoxHeight(refItemBox.current.offsetHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (inputValue === '') setFilteredItems(readyItems);
    else {
      setFilteredItems(readyItems.filter((el) => el.label.toUpperCase().indexOf(inputValue.toUpperCase()) > -1));
      setHighlightIndex(0);
    }
    setItemBoxHeight(refItemBox.current.offsetHeight);
  }, [readyItems, inputValue]);

  useEffect(() => onChange(selectedItems), [selectedItems]);
  useEffect(() => {
    refItemList.current.scrollTo(0, 0);
    setHighlightIndex(0);
    setInputValue('');
  }, [showItems]);

  const pushItem = (item: SelectMultiItemWithOrderProps) => {
    if (filteredItems.length > 0 && showItems) {
      setSelectMultiedItems((prev) => [...prev, item]);
      setReadyItems((prev) => prev.filter((el) => el.value !== item.value));
      setHighlightIndex(0);
      // setInputValue('');
    }
  };

  const popItem = (item: SelectMultiItemWithOrderProps) => {
    setReadyItems((prev) => [...prev, item].sort((a, b) => a.order - b.order));
    setSelectMultiedItems((prev) => prev.filter((el) => el.value !== item.value));
    setHighlightIndex(0);
    setInputValue('');
  };

  const popAllItem = () => {
    setReadyItems(
      items.map((el: SelectMultiItemWithOrderProps, elIdx: number) => {
        el.order = elIdx;
        return el;
      })
    );
    setSelectMultiedItems([]);
    setHighlightIndex(0);
    setInputValue('');
  };

  return (
    <StyledWrapper
      ref={refWrapper}
      tabIndex={-1}
      focus={showItems}
      onFocus={() => {
        refInput.current.focus();
        setItemBoxHeight(refItemBox.current.offsetHeight);
        setShowItems(true);
      }}
      onBlur={() => {
        setShowItems(false);
      }}
      style={style}
      {...props}
    >
      {inputValue === '' && selectedItems.length === 0 && !showItems && (
        <StyledPlaceholder>{placeholder}</StyledPlaceholder>
      )}
      <StyledItemBox ref={refItemBox}>
        <StyledSelectMultiedItems>
          {selectedItems.map((el: SelectMultiItemWithOrderProps, elIdx: number) => (
            <StyledSelectMultiedItemBox key={elIdx}>
              <StyledSelectMultiedItem>{el.label}</StyledSelectMultiedItem>
              <StyledSelectMultiedItemClose onClick={() => popItem(el)}>{itemCloseSVG}</StyledSelectMultiedItemClose>
            </StyledSelectMultiedItemBox>
          ))}
          <StyledInputBoxWrapper>
            <StyledInputBox>
              <StyledInput
                type="text"
                ref={refInput}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (!showItems) {
                    setShowItems(true);
                  }
                  if (e.key === 'Enter') {
                    pushItem(filteredItems[highlightIndex]);
                  }
                  if (e.key === 'ArrowDown') {
                    const nextHighlightIndex = highlightIndex + 1 + 1; //  next (+1), not yet increase highlight index (+1)
                    if (
                      nextHighlightIndex * defaultItemHeight > maxHeight &&
                      refItemList.current.scrollHeight >= maxHeight + refItemList.current.scrollTop
                    ) {
                      refItemList.current.scrollTo({
                        top: nextHighlightIndex * defaultItemHeight - maxHeight,
                        behavior: 'smooth'
                      });
                    }
                    setHighlightIndex((prev) => (prev + 1 < filteredItems.length ? prev + 1 : prev));
                    e.preventDefault();
                  }
                  if (e.key === 'ArrowUp') {
                    const nextHighlightIndex = highlightIndex - 1;
                    if (nextHighlightIndex * defaultItemHeight < refItemList.current.scrollTop) {
                      refItemList.current.scrollTo({
                        top: nextHighlightIndex * defaultItemHeight,
                        behavior: 'smooth'
                      });
                    }
                    setHighlightIndex((prev) => (prev > 0 ? prev - 1 : prev));
                    e.preventDefault();
                  }
                  if (e.key === 'Backspace' && inputValue === '' && selectedItems.length > 0) {
                    popItem(selectedItems[selectedItems.length - 1]);
                  }
                  if (e.key === 'Escape') {
                    setShowItems(false);
                    refInput.current.blur();
                  }
                }}
              ></StyledInput>
            </StyledInputBox>
          </StyledInputBoxWrapper>
        </StyledSelectMultiedItems>
        {clearable && (
          <StyledAllClear
            onClick={(e) => {
              if (selectedItems.length > 0) {
                popAllItem();
                e.preventDefault();
              }
            }}
          >
            {itemAllCloseSVG}
          </StyledAllClear>
        )}
      </StyledItemBox>
      <StyledItems ref={refItemList} posTop={itemBoxHeight} show={showItems} maxHeight={maxHeight}>
        {filteredItems.length > 0 &&
          filteredItems.map((el: SelectMultiItemWithOrderProps, elIdx: number) => (
            <StyledItem
              key={el.value}
              className={highlightIndex === elIdx ? 'highlight' : ''}
              onClick={() => pushItem(el)}
            >
              {el.label}
            </StyledItem>
          ))}
        {filteredItems.length === 0 && <StyledItem>No options</StyledItem>}
      </StyledItems>
    </StyledWrapper>
  );
};

export default SelectMulti;
