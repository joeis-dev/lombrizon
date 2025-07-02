import type { SVGProps } from "react";

export function WormIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.7 15.3a4.9 4.9 0 0 0 6.6 0" />
      <path d="M13.7 15.3a4.9 4.9 0 0 0 6.6 0" />
      <path d="M10.3 8.7a4.9 4.9 0 0 1 6.6 0" />
      <path d="M17 12a5 5 0 0 0-10 0" />
      <path d="M17 12h.1" />
      <path d="M13.7 8.7a4.9 4.9 0 0 0-6.6 0" />
      <path d="M7 12a5 5 0 0 1 10 0" />
      <path d="M7 12H6.9" />
      <path d="M10.3 15.3a4.9 4.9 0 0 1-6.6 0" />
    </svg>
  );
}
