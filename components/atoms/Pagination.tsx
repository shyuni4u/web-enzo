import React, { useEffect, useState, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

type MPaginationProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Current page.
   */
  current?: number;
  /**
   * Item per page.
   */
  per?: number;
  /**
   * Total item count.
   */
  totalItems?: number;
  /**
   * Pagination not used button.
   */
  compact?: boolean;
  /**
   * If true, the Pagination will be disabled. (deprecated)
   */
  disabled?: boolean;
  /**
   * The size of the pagination.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Align
   */
  align?: 'flex-start' | 'center' | 'flex-end';
  /**
   * onPageMove event handler (if used in Table component. its not used.).
   */
  onPageMove?: (n: number) => void;
};
export type PaginationProps = React.DetailedHTMLProps<MPaginationProps, HTMLDivElement>;

type StyledPaginationProps = {
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  align?: 'flex-start' | 'center' | 'flex-end';
};
const StyledWrapper = styled.div<StyledPaginationProps>`
  display: flex;
  width: 100%;
  justify-content: ${(prop) => prop.align};
`;
const StyledCompactWrapper = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledUl = styled.ul<StyledPaginationProps>`
  display: flex;
`;
const StyledCompact = styled.div`
  flex: 1 0 100%;
  font-size: 12px;
  margin-top: 10px;
`;
const StyledLi = styled.li<StyledPaginationProps>`
  ${(prop) => {
    const { size, theme } = prop;
    return css`
      display: flex;
      align-items: center;
      text-align: center;
      min-width: ${size === 'small' ? 30 : size === 'medium' ? 40 : 50}px;
      height: ${size === 'small' ? 30 : size === 'medium' ? 40 : 50}px;
      border: 1px solid ${theme.colors.grayE};
      border-radius: 4px;
      margin: 0 4px;
      background-color: ${theme.colors.white};
      user-select: none;
      &.active {
        border: 1px solid ${theme.colors.main};
        button {
          color: ${theme.colors.main};
          font-weight: 800;
        }
      }
      &:not(.disabled):hover {
        transition: 0.2s;
      }
      button {
        svg {
          vertical-align: middle;
          transform: scale(1.4);
        }
      }
    `;
  }}
`;
const StyledItem = styled.button<StyledPaginationProps>`
  ${(prop) => {
    const { size, theme } = prop;
    return css`
      flex: 1 1 auto;
      font-size: ${size === 'small'
        ? theme.fontSizes.f12
        : size === 'medium'
        ? theme.fontSizes.f14
        : theme.fontSizes.f18};
      cursor: pointer;
    `;
  }}
`;

export const Pagination = forwardRef((props: PaginationProps, ref: React.Ref<HTMLDivElement>) => {
  const current = props.current || 1;
  const per = props.per || 10;
  const totalItems = props.totalItems || 200;
  const compact = props.compact || false;
  const disabled = props.disabled || false;
  const size = props.size || 'medium';
  const align = props.align || 'center';
  const onPageMove = props.onPageMove;

  const pageCount = Math.ceil(totalItems / per);
  const [currentPage, setCurrentPage] = useState(current);

  useEffect(() => {
    setCurrentPage(current);
  }, [current]);

  const movePage = (to: number) => {
    setCurrentPage(to);
    onPageMove(to);
  };

  const makePage = () => {
    const dottedRange = 3;
    let existPrevDotted = false;
    let existNextDotted = false;

    return Array.from({ length: pageCount }, (_, i) => i + 1).map((el) => {
      if (el !== 1 && currentPage - el > dottedRange) {
        if (existPrevDotted) {
          return undefined;
        } else {
          existPrevDotted = true;
          return (
            <StyledLi key={el} className={'disabled'} disabled={true} size={size}>
              <StyledItem type="button" size={size}>
                ...
              </StyledItem>
            </StyledLi>
          );
        }
      } else if (el !== pageCount && el - currentPage > dottedRange) {
        if (existNextDotted) {
          return undefined;
        } else {
          existNextDotted = true;
          return (
            <StyledLi key={el} className={'disabled'} disabled={true} size={size}>
              <StyledItem type="button" size={size}>
                ...
              </StyledItem>
            </StyledLi>
          );
        }
      } else {
        return (
          <StyledLi key={el} className={currentPage === el ? 'active' : ''} size={size} onClick={(_) => movePage(el)}>
            <StyledItem type="button" size={size}>
              {el}
            </StyledItem>
          </StyledLi>
        );
      }
    });
  };

  if (totalItems === undefined && totalItems === 0) {
    return <></>;
  } else if (compact) {
    return (
      <StyledWrapper align={align} {...props} ref={ref}>
        <StyledCompactWrapper>
          <StyledUl disabled={disabled}>
            <StyledLi
              size={size}
              className={currentPage === 1 ? 'disabled' : ''}
              onClick={() => (currentPage > 1 ? movePage(currentPage - 1) : undefined)}
            >
              <StyledItem type="button" disabled={currentPage === 1}>
                <BsChevronLeft />
              </StyledItem>
            </StyledLi>
            <StyledLi
              size={size}
              className={currentPage === pageCount ? 'disabled' : ''}
              onClick={() => (currentPage < pageCount ? movePage(currentPage + 1) : undefined)}
            >
              <StyledItem type="button" disabled={currentPage === pageCount}>
                <BsChevronRight />
              </StyledItem>
            </StyledLi>
          </StyledUl>
          <StyledCompact>
            Page {currentPage} of {pageCount}
          </StyledCompact>
        </StyledCompactWrapper>
      </StyledWrapper>
    );
  } else {
    return (
      <StyledWrapper align={align} {...props} ref={ref}>
        <StyledUl disabled={disabled}>
          <StyledLi
            size={size}
            className={currentPage === 1 ? 'disabled' : ''}
            onClick={() => (currentPage > 1 ? movePage(currentPage - 1) : undefined)}
          >
            <StyledItem type="button" disabled={currentPage === 1} size={size}>
              <BsChevronLeft />
            </StyledItem>
          </StyledLi>
          {makePage()}
          <StyledLi
            size={size}
            className={currentPage === pageCount ? 'disabled' : ''}
            onClick={() => (currentPage < pageCount ? movePage(currentPage + 1) : undefined)}
          >
            <StyledItem type="button" disabled={currentPage === pageCount} size={size}>
              <BsChevronRight />
            </StyledItem>
          </StyledLi>
        </StyledUl>
      </StyledWrapper>
    );
  }
});

export default Pagination;
