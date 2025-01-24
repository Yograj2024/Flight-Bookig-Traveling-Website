/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      screens:{
        'ex-s':'360px' /* custom breakpoint for 380px  */
      },
      fontFamily:{
        PtSans:[ "PT Sans", "serif"],
        systemUI:["system-ui"]
      },
      animation:{
        "up-in": "upIn 0.3s ease-in-out forwards", 
        "down-out": "downOut 0.3s ease-in-out forwards", 
      },
      /* forwards property ensures that jab animation complete ho jaye, toh uski final state (height: 100%) maintain ho jaye. */
      keyframes: {
        upIn: {
          "0%":{height: "0%", opacity:"0"},
          "100%":{height: "100%", opacity:"1"},
        },
        downOut: {
          "0%":{height: "100%", opacity:"1"},
          "100%":{height: "0%", opacity:"0"},
        }
      }
    },
  },
  plugins: [],
}

