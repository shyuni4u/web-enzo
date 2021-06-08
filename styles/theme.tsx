import baseStyled, { css, CSSProp, ThemedStyledInterface } from 'styled-components';

const sizes: { [key: string]: number } = {
  mobile: 320,
  tablet: 768,
  notebook: 1200,
  desktop: 1440
};

type BackQuoteArgs = string[];

type Media = {
  mobile: (...args: BackQuoteArgs) => CSSProp | undefined;
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
  notebook: (...args: BackQuoteArgs) => CSSProp | undefined;
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
};

const media: Media = {
  mobile: (...args: BackQuoteArgs) => undefined,
  tablet: (...args: BackQuoteArgs) => undefined,
  notebook: (...args: BackQuoteArgs) => undefined,
  desktop: (...args: BackQuoteArgs) => undefined
};

Object.keys(sizes).reduce((acc: Media, label: string) => {
  switch (label) {
    case 'desktop':
      acc.desktop = (...args: BackQuoteArgs) => css`
        @media only screen and (min-width: ${sizes.desktop}px) {
          ${args}
        }
      `;
      break;
    case 'notebook':
      acc.notebook = (...args: BackQuoteArgs) => css`
        @media only screen and (max-width: ${sizes.desktop}px) and (min-width: ${sizes.notebook}px) {
          ${args}
        }
      `;
      break;
    case 'tablet':
      acc.tablet = (...args: BackQuoteArgs) => css`
        @media only screen and (max-width: ${sizes.notebook}px) and (min-width: ${sizes.tablet}px) {
          ${args}
        }
      `;
      break;
    case 'mobile':
      acc.mobile = (...args: BackQuoteArgs) => css`
        @media only screen and (max-width: ${sizes.tablet}px) {
          ${args}
        }
      `;
      break;
    default:
      break;
  }
  return acc;
}, media);

const colors = {
  black: '#222222',
  white: '#ffffff',
  gray8: '#888888',
  grayA: '#aaaaaa',
  grayC: '#cccccc',
  grayE: '#eeeeee',
  grayF: '#f5f5f5',
  main: '#ff5700',
  hover: '#fa8246',
  green: '#bdd67a',
  shadowgreen: '#8DC7A5',
  red: '#e03737',
  yellow: '#f9d02c',
  cornflowerblue: '#7990ed',
  blue: '#6baaf1',
  purple: '#bb7bee'
};

const secondaryColors = {};
const fontFamily = ['Museo Sans', 'Noto Sans', 'Arial', 'Courier'].join(',');
const fontSizes = {
  f36: '36px',
  f24: '24px',
  f18: '18px',
  f14: '14px',
  f12: '12px'
};

const layoutSize = {
  headerHeight: '60px',
  footerHeight: '40px',
  breadcrumbsHeight: '50px',
  mobilePadding: '15px'
};

const timezone = 'Asia/Seoul';

const theme = {
  layoutSize,
  colors,
  fontSizes,
  fontFamily,
  secondaryColors,
  media,
  timezone,
  sizes
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
