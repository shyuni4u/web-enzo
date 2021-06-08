import React, { useEffect, useState, ReactNode, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { BsArrowUpDown, BsArrowUp, BsArrowDown } from 'react-icons/bs';
import Pagination, { PaginationProps } from './Pagination';
import Util from '../../lib/utilMethods';

export type TableHeaderProps = {
  /**
   * Column key
   */
  key: string;
  /**
   * Column type
   */
  type?: 'string' | 'number' | 'boolean' | 'format';
  /**
   * If you used 'format' type, create format.
   */
  format?: (value: any) => ReactNode;
  /**
   * Column label.
   */
  label?: string | ReactNode;
  /**
   * Column content align.
   */
  align?: 'left' | 'center' | 'right';
  /**
   * Column width
   */
  width?: string;
  /**
   * Column order.
   */
  order?: number;
  /**
   * Check using 'sorted'. (Only number[value] sorted type[format])
   */
  sorted?: boolean;
};
type MTableProps = React.TableHTMLAttributes<HTMLTableElement> & {
  /**
   * Table size.
   */
  size?: 'medium' | 'large';
  /**
   * Adds borders on all sides of the table and cells.
   */
  bordered?: boolean;
  /**
   * Removes all borders on the table and cells, including table header.
   */
  borderless?: boolean;
  /**
   * Use hover in <tbody>.
   */
  hover?: boolean;
  /**
   * Use striped in <tbody>.
   */
  striped?: boolean;
  /**
   * CSS
   */
  style?: React.CSSProperties;
  /**
   * If you used json api result, don't create children. Using items attributes.
   */
  items?: any[];
  /**
   * Use headers to define items.
   */
  headers?: TableHeaderProps[];
  /**
   * You can use 'sorted' when using the 'items' attribute.
   */
  sorted?: boolean;
  /**
   * Setting pagination options when using the pagination.
   */
  pagination?: PaginationProps;
};
export type TableProps = React.DetailedHTMLProps<MTableProps, HTMLTableElement>;

const StyledTable = styled.table<TableProps>`
  ${(prop) => {
    const { size, bordered, borderless, hover, striped, theme } = prop;
    return css`
      width: 100%;
      background-color: ${theme.colors.white};

      & > thead > tr > th {
        text-align: left;
        font-weight: 600;
        font-size: ${size === 'medium' ? theme.fontSizes.f12 : theme.fontSizes.f14};
        padding: ${size === 'medium' ? 14 : 16}px;
        vertical-align: bottom;
        border-top: 1px solid ${theme.colors.grayE};
        border-left: 1px solid ${theme.colors.grayE};
        border-right: 1px solid ${theme.colors.grayE};
        border-bottom: 1px solid ${theme.colors.black};
        border-bottom-width: 1px;
        user-select: none;
        &.can-sort {
          cursor: pointer;
        }
      }
      & > tbody > tr > td,
      & > tfoot > tr > td {
        font-size: ${size === 'medium' ? theme.fontSizes.f12 : theme.fontSizes.f14};
        padding: ${size === 'medium' ? 12 : 14}px;
        border: 1px solid ${theme.colors.grayE};
      }

      ${!bordered &&
      css`
        & > thead > tr > th,
        & > tbody > tr > td,
        & > tfoot > tr > td {
          border-left: none;
          border-right: none;
        }
      `}

      ${borderless &&
      css`
        & > thead > tr > th,
        & > tbody > tr > td,
        & > tfoot > tr > td {
          border: none;
        }
      `}

      ${striped &&
      css`
        & > tbody > tr:nth-of-type(odd),
        & > tfoot > tr:nth-of-type(odd) {
          /* background-color: ${theme.colors.grayF}; */
        }
      `}

      ${hover &&
      css`
        & > tbody > tr:hover {
          background-color: ${theme.colors.grayE};
        }
      `}
    `;
  }}
`;

enum Direction {
  NONE = 'NONE',
  ASC = 'ASC',
  DESC = 'DESC'
}

export const Table = forwardRef((props: TableProps, ref: React.Ref<HTMLTableElement>) => {
  const size = props.size || 'medium';
  const bordered = props.bordered || false;
  const borderless = props.borderless || false;
  const hover = props.hover || false;
  const striped = props.striped || false;
  const style = props.style || {};
  const items = props.items || undefined;
  const headers = props.headers || undefined;
  const sorted = props.sorted || false;
  const pagination = props.pagination || undefined;

  const [sortColumn, setSortColumn] = useState<string>('');
  const [direction, setDirection] = useState<Direction>(Direction.NONE);
  const [pageIndex, setPageIndex] = useState<number>(1);

  useEffect(() => {
    setSortColumn('');
    setDirection(Direction.NONE);
    setPageIndex(1);
  }, []);

  const sortData = (item: TableHeaderProps) => {
    if (item.sorted) {
      if (item.key === sortColumn || sortColumn === '') {
        if (direction === Direction.NONE) {
          setSortColumn(item.key);
          setDirection(Direction.ASC);
        } else if (direction === Direction.ASC) {
          setSortColumn(item.key);
          setDirection(Direction.DESC);
        } else {
          setSortColumn('');
          setDirection(Direction.NONE);
        }
      } else {
        setSortColumn(item.key);
        setDirection(Direction.ASC);
      }
    }
  };

  const createHeaders = () => {
    const thead: TableHeaderProps[] = headers
      ? headers.map((el: TableHeaderProps, elIdx: number) => {
          const obj: TableHeaderProps = {
            key: el.key,
            type: el.type || 'string',
            label: el.label || el.key,
            format: el.format || undefined,
            width: el.width || undefined,
            align: el.align,
            order: el.order || elIdx,
            sorted: el.sorted || sorted
          };
          return obj;
        })
      : Object.keys(items[0]).map((el: string, elIdx: number) => {
          const obj: TableHeaderProps = {
            key: el,
            type: 'string',
            label: el,
            width: undefined,
            align: undefined,
            order: elIdx,
            sorted: sorted
          };
          return obj;
        });
    return thead.sort((a, b) => a.order - b.order);
  };

  const createColgroup = (thead: TableHeaderProps[]) => {
    return (
      <colgroup>
        {thead.map((el, elIdx) => (
          <col key={elIdx} width={el.width} />
        ))}
      </colgroup>
    );
  };

  const createThead = (thead: TableHeaderProps[]) => {
    return (
      <thead>
        <tr>
          {thead.map((el, elIdx) => (
            <th
              key={elIdx}
              className={el.sorted ? 'can-sort' : ''}
              onClick={() => sortData(el)}
              style={{ position: 'relative' }}
            >
              {el.label}
              {el.sorted && el.key !== sortColumn ? (
                <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translate(0, -50%)' }}>
                  <BsArrowUpDown />
                </div>
              ) : (
                <></>
              )}
              {el.sorted && el.key === sortColumn && direction === Direction.ASC ? (
                <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translate(0, -50%)' }}>
                  <BsArrowUp />
                </div>
              ) : (
                <></>
              )}
              {el.sorted && el.key === sortColumn && direction === Direction.DESC ? (
                <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translate(0, -50%)' }}>
                  <BsArrowDown />
                </div>
              ) : (
                <></>
              )}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const createTbody = (thead: TableHeaderProps[]) => {
    const copy = JSON.parse(JSON.stringify(items));
    const sortResult =
      sortColumn === ''
        ? copy
        : copy.sort((a: any, b: any) => {
            if (Util.isInteger(a[sortColumn])) {
              return direction === Direction.ASC ? a[sortColumn] - b[sortColumn] : b[sortColumn] - a[sortColumn];
            } else {
              return direction === Direction.ASC
                ? a[sortColumn] >= b[sortColumn]
                  ? 1
                  : -1
                : b[sortColumn] >= a[sortColumn]
                ? 1
                : -1;
            }
          });
    const filtered = pagination
      ? sortResult.filter(
          (_: any, elIdx: number) => elIdx >= (pageIndex - 1) * pagination.per && elIdx < pageIndex * pagination.per
        )
      : sortResult;
    return (
      <tbody>
        {filtered.map((tr: any, trIdx: number) => (
          <tr key={trIdx}>
            {thead.map((td, tdIdx) => {
              if (td.type === 'string') {
                return (
                  <td key={tdIdx} style={{ textAlign: td.align ? td.align : 'left' }}>
                    {tr[td.key]}
                  </td>
                );
              } else if (td.type === 'number') {
                const val = tr[td.key];
                if (Util.isInteger(val)) {
                  return (
                    <td key={tdIdx} style={{ textAlign: td.align ? td.align : 'right' }}>
                      {parseInt(val, 10)}
                    </td>
                  );
                } else {
                  return (
                    <td key={tdIdx} style={{ textAlign: td.align ? td.align : 'left' }}>
                      {val}
                    </td>
                  );
                }
              } else if (td.type === 'boolean') {
                const val = tr[td.key];
                return (
                  <td key={tdIdx} style={{ textAlign: td.align ? td.align : 'center' }}>
                    {val} : not yet
                  </td>
                );
              } else if (td.type === 'format') {
                const val = tr[td.key];
                return (
                  <td key={tdIdx} style={{ textAlign: td.align ? td.align : 'left' }}>
                    {td.format(val)}
                  </td>
                );
              } else {
                return (
                  <td key={tdIdx} style={{ textAlign: td.align ? td.align : 'left' }}>
                    {tr[td.key]}
                  </td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    );
  };

  const createItems = () => {
    if (items && items.length > 0) {
      const thead = createHeaders();
      return (
        <>
          {createColgroup(thead)}
          {createThead(thead)}
          {createTbody(thead)}
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <StyledTable
        size={size}
        bordered={bordered}
        borderless={borderless}
        hover={hover}
        striped={striped}
        style={style}
        {...props}
        ref={ref}
      >
        {props.children}
        {createItems()}
      </StyledTable>
      {pagination && (
        <Pagination
          current={pageIndex}
          per={pagination.per}
          totalItems={items.length}
          align={'center'}
          style={{ marginTop: '20px' }}
          onPageMove={(n) => setPageIndex(n)}
          {...pagination}
          ref={undefined}
        />
      )}
    </>
  );
});

export default Table;
