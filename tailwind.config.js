module.exports = {
  mode: "jit",
  important: true, // All classes will include !important
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
