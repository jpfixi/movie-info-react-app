module.exports = {
  "extends": "airbnb",
  "globals": {
    "fetch": true,
    "document": true,
  },
  "env": {
    "es6": true,
    "jest": true,
    "browser": true
  },
  "plugins": [
    "jest"
  ],
  "rules": {
    "react/jsx-filename-extension": 0,
    "padded-blocks": 0
  }
};