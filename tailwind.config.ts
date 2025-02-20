import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["var(--font-pixel)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
