/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      animation: {
        box1: "abox1 4s infinite ease-in-out",
        box2: "abox2 4s infinite ease-in-out",
        box3: "abox3 4s infinite ease-in-out",
      },
      keyframes: {
        abox1: {
          "0%, 100%": {
            width: "14rem", // 112px * 2 / 16
            height: "6rem", // 48px * 2 / 16
            marginTop: "8rem", // 64px * 2 / 16
            marginLeft: "0rem", // 0px * 2 / 16
          },
          "25%": {
            width: "6rem", // 48px * 2 / 16
            height: "6rem", // 48px * 2 / 16
            marginTop: "8rem", // 64px * 2 / 16
            marginLeft: "0rem", // 0px * 2 / 16
          },
          "60%": {
            width: "6rem", // 48px * 2 / 16
            height: "6rem", // 48px * 2 / 16
            marginTop: "8rem", // 64px * 2 / 16
            marginLeft: "0rem", // 0px * 2 / 16
          },
          "75%": {
            width: "6rem", // 48px * 2 / 16
            height: "14rem", // 112px * 2 / 16
            marginTop: "0rem", // 0px * 2 / 16
            marginLeft: "0rem", // 0px * 2 / 16
          },
        },
        abox2: {
          "0%, 100%": {
            width: "6rem", // 48px * 2 / 16
            height: "6rem", // 48px * 2 / 16
            marginTop: "0rem", // 0px * 2 / 16
            marginLeft: "0rem", // 0px * 2 / 16
          },
          "30%": {
            width: "6rem", // 48px * 2 / 16
            height: "6rem", // 48px * 2 / 16
            marginTop: "0rem", // 0px * 2 / 16
            marginLeft: "0rem", // 0px * 2 / 16
          },
          "60%": {
            width: "14rem", // 112px * 2 / 16
            height: "6rem", // 48px * 2 / 16
            marginTop: "0rem", // 0px * 2 / 16
            marginLeft: "0rem", // 0px * 2 / 16
          },
          "75%": {
            width: "6rem", // 48px * 2 / 16
            height: "6rem", // 48px * 2 / 16
            marginTop: "0rem", // 0px * 2 / 16
            marginLeft: "8rem", // 64px * 2 / 16
          },
        },
        abox3: {
          "0%, 100%": {
            width: "6rem", // 48px * 2 / 16
            height: "6rem", // 48px * 2 / 16
            marginTop: "0rem", // 0px * 2 / 16
            marginLeft: "8rem", // 64px * 2 / 16
          },
          "10%": {
            width: "6rem", // 48px * 2 / 16
            height: "6rem", // 48px * 2 / 16
            marginTop: "0rem", // 0px * 2 / 16
            marginLeft: "8rem", // 64px * 2 / 16
          },
          "30%": {
            width: "6rem", // 48px * 2 / 16
            height: "14rem", // 112px * 2 / 16
            marginTop: "0rem", // 0px * 2 / 16
            marginLeft: "8rem", // 64px * 2 / 16
          },
          "50%": {
            width: "6rem", // 48px * 2 / 16
            height: "6rem", // 56px * 2 / 16
            marginTop: "8rem", // 56px * 2 / 16
            marginLeft: "8rem", // 64px * 2 / 16
          },
          "75%": {
            width: "6rem", // 48px * 2 / 16
            height: "6rem", // 56px * 2 / 16
            marginTop: "8rem", // 56px * 2 / 16
            marginLeft: "8rem", // 64px * 2 / 16
          },
        },
      },
    },
  },
  plugins: [],
};
