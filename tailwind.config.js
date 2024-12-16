module.exports = {
  mode: "jit",
  important: true, // All classes will include !important
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        'p-red': '#CF5258',    // Custom red
        'p-orange': '#E19E29', // Custom orange
        'p-teal': '#78A4A3',   // Custom teal
        'p-blue': '#444B5B',   // Custom blue
      },
    },
  },
  plugins: [],
};
