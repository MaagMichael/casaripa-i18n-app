import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // add paths to the files that will use Tailwind class names:
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // https://tailwindcss.com/docs/customizing-colors#using-css-variables
        primary: "rgb(var(--color-primary))",
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        // 'my-bg-color': '#1d232a',
        //           'my-hover-color': '#2b3139',
        //           'my-text-bright': "rgb(156 163 175)",
        //           'my-text-hover': "white",
      },
    },
  },
  plugins: [],
};
export default config;
