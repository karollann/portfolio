import * as React from "react";

const SvgComponent = (props) => (
  <svg
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 8.5h7.5V16M16.5 8.5 7 18"
      stroke="currentColor"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgComponent;
