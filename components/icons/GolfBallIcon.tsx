
import React from 'react';

export const GolfBallIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 12a4.2 4.2 0 0 1 4.2 4.2"></path>
    <path d="M12 12a4.2 4.2 0 0 0-4.2 4.2"></path>
    <path d="m10 14.5 2-2.5 2 2.5"></path>
    <path d="M12 7.8a4.2 4.2 0 0 1 0 8.4 4.2 4.2 0 0 1 0-8.4z"></path>
  </svg>
);
