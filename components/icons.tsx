import * as React from "react";

import { IconSvgProps } from "@/types";

const base = (props: IconSvgProps) => ({
  fill: "none" as const,
  height: props.size || props.height || 24,
  width: props.size || props.width || 24,
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const PhoneIcon = (props: IconSvgProps) => (
  <svg {...base(props)} {...props}>
    <path d="M5.5 3.5h2.7l1.3 3.8-2 1.6a11.6 11.6 0 0 0 5.6 5.6l1.6-2 3.8 1.3v2.7c0 1-.8 1.8-1.8 1.7C8.9 17.9 6.1 15.1 4.8 7.3c-.1-1 .7-1.8 1.7-1.8Z" />
  </svg>
);

export const MapPinIcon = (props: IconSvgProps) => (
  <svg {...base(props)} {...props}>
    <path d="M12 21s-7-6.1-7-11.5a7 7 0 1 1 14 0C19 14.9 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.4" />
  </svg>
);

export const BoltIcon = (props: IconSvgProps) => (
  <svg {...base(props)} fill="currentColor" stroke="none" {...props}>
    <path d="M13 2 4.5 14h5.7l-1.2 8L18 10h-5.7L13 2Z" />
  </svg>
);

export const LightbulbIcon = (props: IconSvgProps) => (
  <svg {...base(props)} {...props}>
    <path d="M9 18h6M10 21h4M8 14.5A5 5 0 1 1 16 14.5c-.8.9-1.4 1.6-1.4 2.5H9.4c0-.9-.6-1.6-1.4-2.5Z" />
  </svg>
);

export const PlugIcon = (props: IconSvgProps) => (
  <svg {...base(props)} {...props}>
    <path d="M9 3v4M15 3v4M7 7h10v3.5a5 5 0 0 1-5 5 5 5 0 0 1-5-5V7ZM12 15.5V19M8.5 21h7" />
  </svg>
);

export const WireIcon = (props: IconSvgProps) => (
  <svg {...base(props)} {...props}>
    <path d="M3 6h4l3 5-3 5h-4M21 6h-4l-3 5 3 5h4" />
    <circle cx="12" cy="11" fill="currentColor" r="1.6" stroke="none" />
  </svg>
);

export const WrenchIcon = (props: IconSvgProps) => (
  <svg {...base(props)} {...props}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 4.9L4 16.5V20h3.5l5.3-5.3a4 4 0 0 0 4.9-5.4l-2.8 2.8-2.5-2.5 2.3-2.3Z" />
  </svg>
);

export const HomeIcon = (props: IconSvgProps) => (
  <svg {...base(props)} {...props}>
    <path d="M4 11.5 12 4l8 7.5M6 10v9.5h12V10" />
  </svg>
);

export const BuildingIcon = (props: IconSvgProps) => (
  <svg {...base(props)} {...props}>
    <path d="M5 21V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16M12 21v-8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v8M8 7h1M8 11h1M8 15h1M16 13h1M16 17h1M3 21h18" />
  </svg>
);

export const ClipboardCheckIcon = (props: IconSvgProps) => (
  <svg {...base(props)} {...props}>
    <path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1ZM6 6h12v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6ZM9.5 13.5 11.5 15.5 15 11.5" />
  </svg>
);

export const CheckCircleIcon = (props: IconSvgProps) => (
  <svg {...base(props)} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.5 2.3 2.3L15.5 9.5" />
  </svg>
);

export const ArrowRightIcon = (props: IconSvgProps) => (
  <svg {...base(props)} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const HardHatIcon = (props: IconSvgProps) => (
  <svg {...base(props)} {...props}>
    <path d="M4 16a8 8 0 0 1 16 0M2 16h20M12 6v3" />
  </svg>
);

export const SunIcon = (props: IconSvgProps) => (
  <svg {...base(props)} {...props}>
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
);

export const MoonIcon = (props: IconSvgProps) => (
  <svg {...base(props)} {...props}>
    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
  </svg>
);
