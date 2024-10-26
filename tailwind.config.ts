import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        lamaSky:"#C3EBFA",
        lamaSkyLight:"#EDF9FD",
        lamaPurple:"#CFCEFF",
        lamaPurpleLight:"#F1F0FF",
        lamaYellow:"#FAE27C",
        lamaYellowLight:"#FEFCE8",
        lazanOne:"#e7cb63",
        lazanOneLight: '#f2e1a1',
        lazanTwo: '#3fbf94',
        lazanTwoLight: '#73d8b8',
        lazanThree: '#59b5c0',
        lazanThreeLight: '#8acfd3',
        lazanFour:"#5c78c9",
        lazanFourLight:"#7c93d3"
      }
    },
  },
  plugins: [],
};
export default config;
