module.exports = {
  enabled: process.env.NODE_ENV === "production",
  "content": [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {},
  },
  "plugins": []
}