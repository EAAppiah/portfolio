module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {screens: {
    sm: '375px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },
    extend: {
    },
  },
  plugins: [require("flowbite/plugin")],
};
