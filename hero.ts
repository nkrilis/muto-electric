import { heroui } from "@heroui/theme";

// Dark-mode red: readable as text on black (content1 #0A0A0A), and as a
// button/CTA fill (shade 400) behind white text — verified WCAG AA (4.5:1+).
const primaryDark = {
  50: "#3d0407",
  100: "#67060b",
  200: "#910910",
  300: "#bb0b14",
  400: "#e50e18",
  500: "#ED1C24",
  600: "#f0424a",
  700: "#f36970",
  800: "#f68f95",
  900: "#f9b6ba",
  DEFAULT: "#ED1C24",
  foreground: "#FFFFFF",
};

// Light-mode red: the same hue/saturation, shifted ~5% darker across the
// scale. The brand red at full brightness only reaches ~4.4:1 against white
// (text and white-on-red buttons both need 4.5:1) — this shade clears it.
const primaryLight = {
  50: "#250204",
  100: "#4F0508",
  200: "#79080D",
  300: "#A30A11",
  400: "#CD0D15",
  500: "#DE1219",
  600: "#EE2A33",
  700: "#F15159",
  800: "#F4777F",
  900: "#F79EA4",
  DEFAULT: "#DE1219",
  foreground: "#FFFFFF",
};

export default heroui({
  defaultTheme: "dark",
  themes: {
    dark: {
      colors: {
        background: "#000000",
        foreground: "#F5F5F5",
        content1: "#0A0A0A",
        content2: "#141414",
        content3: "#1E1E1E",
        divider: "#262626",
        primary: primaryDark,
        focus: "#ED1C24",
      },
    },
    light: {
      colors: {
        background: "#FFFFFF",
        foreground: "#18181B",
        content1: "#FAFAFA",
        content2: "#F1F1F3",
        content3: "#E4E4E7",
        divider: "#E4E4E7",
        primary: primaryLight,
        focus: "#DE1219",
      },
    },
  },
});
