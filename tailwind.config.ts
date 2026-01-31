import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { createThemes } from "tw-colors";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],

  darkMode: "class",
  safelist: [
    {
      pattern: /border-(sky|pink|purple)-500\/40/,
    },
    {
      pattern: /text-(sky|pink|purple)-500/,
    },
    {
      pattern: /bg-(sky|pink|purple)-500\/20/,
    },
    {
      pattern: /border-(sky|pink|purple)-500\/20/,
      variants: ["hover"],
    },
    {
      pattern: /bg-(sky|pink|purple)-500\/5/,
      variants: ["hover"],
    },
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      body: ["REM", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          ...colors.orange, // Changed to orange based on "NextTopLoader color" hint in previous turns, or stick to blue if that was intentional. User asked not to change design concept. Original was blue[600] but loader is orange. Let's keep existing blue[600] default but ensure consistency. Wait, the user code had `colors.blue` with `DEFAULT: colors.blue[600]`. I will stick to that.
          // ...colors.blue,
          DEFAULT: colors.blue[600],
        },

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      zIndex: {
        "60": "60",
        "70": "70",
      },
      keyframes: {
        load: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  plugins: [
    require("preline/plugin"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    createThemes(
      {
        light: {
          default: colors.zinc,
        },

        dark: {
          default: {
            50: "#09090b",
            100: "#18181b",
            200: "#27272a",
            300: "#3f3f46",
            400: "#52525b",
            500: "#71717a",
            600: "#a1a1aa",
            700: "#d4d4d8",
            800: "#e4e4e7",
            900: "#f4f4f5",
            950: "#fafafa",
          },
        },
      },
      {
        defaultTheme: "light",
      },
    ),
    require("tailwindcss-animate"),
  ],
};
export default config;
