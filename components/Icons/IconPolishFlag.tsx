import * as React from "react";
import { SVGProps } from "react";
export const IconPolishFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    // style={{
    //   enableBackground: "new 0 0 512.001 512.001",
    // }}
    viewBox="0 0 512.001 512.001"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M0 256h512v158.897a8.829 8.829 0 0 1-8.828 8.828H8.828A8.829 8.829 0 0 1 0 414.897V256z"
      style={{
        fill: "#ff4b55",
      }}
    />
    <path
      d="M512 256H0V97.103a8.829 8.829 0 0 1 8.828-8.828h494.345a8.829 8.829 0 0 1 8.828 8.828L512 256z"
      style={{
        fill: "#f5f5f5",
      }}
    />
  </svg>
);
