const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    process.env.NODE_ENV === "production"
      ? postcss([
          purgecss({
            content: ["./src/**/*.html", "./src/**/*.vue"],
            // Include any special characters you're using in this regular expression
            defaultExtractor: content =>
              content.match(/[A-Za-z0-9-_:/]+/g) || []
          })
        ])
      : ""
  ]
};
