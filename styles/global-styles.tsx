import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const sizes = {
  mobile: 320,
  tablet: 768,
  notebook: 1200,
  desktop: 1440
};

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: "Museo Sans";
    src: url("/font/EXLJBRIS-MUSEOSANS-300.OTF");
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Noto Sans";
    src: url("/font/NOTOSANSMONOCJKKR-REGULAR.OTF");
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
    font-family: 'Museo Sans', 'Noto Sans';
    line-height: 1.5;
  }
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    font-family: 'Museo Sans', 'Noto Sans';
    line-height: 1.5;
  }
  body {
    font-size: 14px;
    background-color: #f5f5f5;
    padding: 0 !important;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

   /* Track */
  ::-webkit-scrollbar-track {
    background-color: #aaa;
    border-radius : 3px;
  }

   /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 3px;
  }

  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12,
  .col-sm-1,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-lg-1,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-xl-1,
  .col-xl-2,
  .col-xl-3,
  .col-xl-4,
  .col-xl-5,
  .col-xl-6,
  .col-xl-7,
  .col-xl-8,
  .col-xl-9,
  .col-xl-10,
  .col-xl-11,
  .col-xl-12 {
    position: relative;
    width: 100%;
  }
  
  .col-1 {
    flex: 0 0 8.33%;
    max-width: 8.33%;
  }
  .col-2 {
    flex: 0 0 16.66%;
    max-width: 16.66%;
  }
  .col-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-4 {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
  .col-5 {
    flex: 0 0 41.66%;
    max-width: 41.66%;
  }
  .col-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-7 {
    flex: 0 0 58.33%;
    max-width: 58.33%;
  }
  .col-8 {
    flex: 0 0 66.66%;
    max-width: 66.66%;
  }
  .col-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-10 {
    flex: 0 0 83.33%;
    max-width: 83.33%;
  }
  .col-11 {
    flex: 0 0 91.66%;
    max-width: 91.66%;
  }
  .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media print {
    .d-print-none, .d-print-none * {
      display: none !important;
    }
  }

  @media only screen and (min-width: ${sizes.desktop}px) {
    .col-xl-0 {
      display: none !important;
    }
    .col-xl-1 {
      flex: 0 0 8.33%;
      max-width: 8.33%;
    }
    .col-xl-2 {
      flex: 0 0 16.66%;
      max-width: 16.66%;
    }
    .col-xl-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-xl-4 {
      flex: 0 0 33.33%;
      max-width: 33.33%;
    }
    .col-xl-5 {
      flex: 0 0 41.66%;
      max-width: 41.66%;
    }
    .col-xl-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-xl-7 {
      flex: 0 0 58.33%;
      max-width: 58.33%;
    }
    .col-xl-8 {
      flex: 0 0 66.66%;
      max-width: 66.66%;
    }
    .col-xl-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-xl-10 {
      flex: 0 0 83.33%;
      max-width: 83.33%;
    }
    .col-xl-11 {
      flex: 0 0 91.66%;
      max-width: 91.66%;
    }
    .col-xl-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  @media only screen and (max-width: ${sizes.desktop}px) and (min-width: ${sizes.notebook}px) {
    .col-lg-0 {
      display: none !important;
    }
    .col-lg-1 {
      flex: 0 0 8.33%;
      max-width: 8.33%;
    }
    .col-lg-2 {
      flex: 0 0 16.66%;
      max-width: 16.66%;
    }
    .col-lg-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-lg-4 {
      flex: 0 0 33.33%;
      max-width: 33.33%;
    }
    .col-lg-5 {
      flex: 0 0 41.66%;
      max-width: 41.66%;
    }
    .col-lg-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-lg-7 {
      flex: 0 0 58.33%;
      max-width: 58.33%;
    }
    .col-lg-8 {
      flex: 0 0 66.66%;
      max-width: 66.66%;
    }
    .col-lg-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-lg-10 {
      flex: 0 0 83.33%;
      max-width: 83.33%;
    }
    .col-lg-11 {
      flex: 0 0 91.66%;
      max-width: 91.66%;
    }
    .col-lg-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media only screen and (max-width: ${sizes.notebook}px) and (min-width: ${sizes.tablet}px) {
    .col-md-0 {
      display: none !important;
    }
    .col-md-1 {
      flex: 0 0 8.33%;
      max-width: 8.33%;
    }
    .col-md-2 {
      flex: 0 0 16.66%;
      max-width: 16.66%;
    }
    .col-md-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-md-4 {
      flex: 0 0 33.33%;
      max-width: 33.33%;
    }
    .col-md-5 {
      flex: 0 0 41.66%;
      max-width: 41.66%;
    }
    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-md-7 {
      flex: 0 0 58.33%;
      max-width: 58.33%;
    }
    .col-md-8 {
      flex: 0 0 66.66%;
      max-width: 66.66%;
    }
    .col-md-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-md-10 {
      flex: 0 0 83.33%;
      max-width: 83.33%;
    }
    .col-md-11 {
      flex: 0 0 91.66%;
      max-width: 91.66%;
    }
    .col-md-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media only screen and (max-width: ${sizes.tablet}px) {
    .col-sm-0 {
      display: none !important;
    }
    .col-sm-1 {
      flex: 0 0 8.33%;
      max-width: 8.33%;
    }
    .col-sm-2 {
      flex: 0 0 16.66%;
      max-width: 16.66%;
    }
    .col-sm-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-sm-4 {
      flex: 0 0 33.33%;
      max-width: 33.33%;
    }
    .col-sm-5 {
      flex: 0 0 41.66%;
      max-width: 41.66%;
    }
    .col-sm-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-sm-7 {
      flex: 0 0 58.33%;
      max-width: 58.33%;
    }
    .col-sm-8 {
      flex: 0 0 66.66%;
      max-width: 66.66%;
    }
    .col-sm-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-sm-10 {
      flex: 0 0 83.33%;
      max-width: 83.33%;
    }
    .col-sm-11 {
      flex: 0 0 91.66%;
      max-width: 91.66%;
    }
    .col-sm-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
`;

export default GlobalStyle;
