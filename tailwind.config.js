/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/src/assets/imgs/bg2.jpg')",
      },
      animation: {
        bg: "bg 50s linear infinite", // 배경 애니메이션 정의
        fadeScale: "fadeScale 0.5s ease-in-out forwards",
      },
      keyframes: {
        bg: {
          "0%": { "background-position-x": "0" },
          "100%": { "background-position-x": "5000px" },
        },
        fadeScale: {
          "0%": {
            transform: "scale(0.3) rotate(45deg)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1) rotate(0deg)",
            opacity: "1",
          },
        },
      },

      colors: {
        purple1: "#CCABDB",
        purple2: "#9747FF",
        purple3: "#D797EE",

        gray100: "#2f2f2f",
        gray90: "#4A4A4A",
        gray80: "#6B6B6B",
        gray70: "#B5B5B5",
        gray60: "#E9E8E7",
      },
      fontSize: {
        Head1: ["3rem", { fontWeight: 700 }],
        Head2: ["2rem", { fontWeight: 600 }],
        Head3: ["1.5rem", { fontWeight: 600 }],
        SubTitle1: ["1.25rem", { fontWeight: 600 }],
        SubTitle2: ["1.125rem", { fontWeight: 600 }],
        SubTitle3: ["1rem", { fontWeight: 600 }],
        P1: ["1.25rem", { fontWeight: 400 }],
        P2: ["1.125rem", { fontWeight: 400 }],
        P3: ["1rem", { fontWeight: 400 }],
        Span1: ["0.875rem", { fontWeight: 400 }],
        Span2: ["0.75rem", { fontWeight: 400 }],
        SpanMid1: ["0.875rem", { fontWeight: 500 }],
        SpanMid2: ["0.75rem", { fontWeight: 500 }],
      },
      fontFamily: {
        "Noto-Sans-KR": ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
