import * as React from 'react';

export const SVG: React.FC = () => {
  return (
    <svg version="1.1" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" style={{ fill: 'currentColor' }}>
      <g>
        <path
          d="M15,0H1C0.4,0,0,0.4,0,1v4v1v4v1v4c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-4v-1V6V5V1C16,0.4,15.6,0,15,0z
		 M15,15H1v-4h14V15z M15,10H1V6h14V10z M1,1h14v4H1V1z"
        />
        <rect x="8" y="3" width="6" height="1" />
        <rect x="8" y="8" width="6" height="1" />
        <rect x="8" y="13" width="6" height="1" />
        <rect x="2" y="3" width="1" height="1" />
        <rect x="2" y="8" width="1" height="1" />
        <rect x="2" y="13" width="1" height="1" />
      </g>
    </svg>
  );
};

export default SVG;
