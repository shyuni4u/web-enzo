import * as React from 'react';

export const SVG: React.FC = () => {
  return (
    <svg
      width="65px"
      height="30px"
      viewBox="0 0 65 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill: 'currentColor' }}
    >
      <title>toggle/off</title>
      <g id="toggle/off" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect id="Rectangle" fill="#CCCCCC" x="0" y="0" width="65" height="30" rx="4"></rect>
        <rect id="Rectangle" fill="#FFFFFF" x="3" y="2" width="26" height="26" rx="4"></rect>
        <path
          d="M39.082,20.22 C41.938,20.22 44.15,17.952 44.15,15.04 C44.15,12.198 41.938,10 39.082,10 C36.226,10 34,12.198 34,15.04 C34,17.952 36.226,20.22 39.082,20.22 Z M39.082,18.946 C37.066,18.946 35.428,17.266 35.428,15.04 C35.428,12.884 37.066,11.26 39.082,11.26 C41.098,11.26 42.722,12.884 42.722,15.04 C42.722,17.266 41.098,18.946 39.082,18.946 Z M47.552,20.052 L47.552,15.824 L51.01,15.824 L51.01,14.62 L47.552,14.62 L47.552,11.372 L51.612,11.372 L51.612,10.168 L46.166,10.168 L46.166,20.052 L47.552,20.052 Z M54.846,20.052 L54.846,15.824 L58.304,15.824 L58.304,14.62 L54.846,14.62 L54.846,11.372 L58.906,11.372 L58.906,10.168 L53.46,10.168 L53.46,20.052 L54.846,20.052 Z"
          id="OFF"
          fill="#FFFFFF"
          fillRule="nonzero"
        ></path>
      </g>
    </svg>
  );
};

export default SVG;
