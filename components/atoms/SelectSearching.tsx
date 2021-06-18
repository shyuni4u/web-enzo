import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import styled from 'styled-components';

export type SelectSearchingItemProps = {
  label: string;
  value: string;
};
export type SelectSearchingItemWithOrderProps = SelectSearchingItemProps & {
  order: number;
};
export type SelectSearchingProps = {
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

const defaultWrapperHeight = 40;
const defaultItemListMaxHeight = 300;
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
  left: 11px;
  color: ${({ theme }) => theme.colors.gray8};
`;
const StyledValue = styled.div`
  position: absolute;
  left: 11px;
  color: ${({ theme }) => theme.colors.black};
`;
const StyledItemBox = styled.div`
  display: flex;
  width: 100%;
`;
const StyledSelectSearchingedItems = styled.div`
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

const StyledInputBoxWrapper = styled.div`
  width: 100%;
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
  width: 100%;
  height: 30px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.content};
`;

/**
 * Primary UI component for user interaction
 */
export const SelectSearching: React.FC<SelectSearchingProps> = ({
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
  onChange = (_) => {},
  ...props
}) => {
  const refWrapper = useRef(null);
  const refItemBox = useRef(null);
  const refInput = useRef(null);

  const refItemList = useRef(null); //  for scroll

  const [itemBoxHeight, setItemBoxHeight] = useState<number>(defaultWrapperHeight);
  const [showItems, setShowItems] = useState<boolean>(false);
  const [readyItems, setReadyItems] = useState<SelectSearchingItemWithOrderProps[]>([]);
  const [filteredItems, setFilteredItems] = useState<SelectSearchingItemWithOrderProps[]>([]);
  const [selectedItem, setSelectSearchingedItem] = useState<SelectSearchingItemWithOrderProps>(undefined);
  const [highlightIndex, setHighlightIndex] = useState<number>(0);

  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    //  for default value
    const temp = items.map((el: SelectSearchingItemWithOrderProps, elIdx: number) => {
      el.order = elIdx;
      return el;
    });
    //  init
    setSelectSearchingedItem(undefined);
    setReadyItems([]);
    temp.forEach((el) => {
      defaultValue && defaultValue.value === el.value
        ? setSelectSearchingedItem(el)
        : setReadyItems((prev) => [...prev, el]);
    });
  }, [items]);

  useEffect(() => {
    if (inputValue === '') setFilteredItems(readyItems);
    else {
      setFilteredItems(readyItems.filter((el) => el.label.toUpperCase().indexOf(inputValue.toUpperCase()) > -1));
      setHighlightIndex(0);
    }
    setItemBoxHeight(refItemBox.current.offsetHeight);
  }, [readyItems, inputValue]);

  useEffect(() => onChange(selectedItem), [selectedItem]);
  useEffect(() => {
    let check = true;
    items.forEach((el) => {
      if (inputValue === el.label) check = false;
    });
    if (check) setInputValue('');
    refItemList.current.scrollTo(0, 0);
    setHighlightIndex(0);
  }, [showItems]);

  const pushItem = (item: SelectSearchingItemWithOrderProps) => {
    if (filteredItems.length > 0 && showItems) {
      const temp = items.map((el: SelectSearchingItemWithOrderProps, elIdx: number) => {
        el.order = elIdx;
        return el;
      });
      setSelectSearchingedItem(item);
      setReadyItems(temp.filter((el) => el.value !== item.value).sort((a, b) => a.order - b.order));
      setHighlightIndex(0);
      setInputValue('');
      refInput.current.blur();
    }
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
      {inputValue === '' && !selectedItem && !showItems && <StyledPlaceholder>{placeholder}</StyledPlaceholder>}
      {inputValue === '' && selectedItem && !showItems && <StyledValue>{selectedItem.label}</StyledValue>}
      {inputValue === '' && selectedItem && showItems && <StyledPlaceholder>{selectedItem.label}</StyledPlaceholder>}
      <StyledItemBox ref={refItemBox}>
        <StyledSelectSearchingedItems>
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
                  if (e.key === 'Escape') {
                    refInput.current.blur();
                  }
                }}
              ></StyledInput>
            </StyledInputBox>
          </StyledInputBoxWrapper>
        </StyledSelectSearchingedItems>
      </StyledItemBox>
      <StyledItems ref={refItemList} posTop={itemBoxHeight} show={showItems} maxHeight={maxHeight}>
        {filteredItems.length > 0 &&
          filteredItems.map((el: SelectSearchingItemWithOrderProps, elIdx: number) => (
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

export default SelectSearching;
