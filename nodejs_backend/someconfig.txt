module.exports = {
  env: {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true,
    "jasmine": true,
    "jquery": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "parser": "babel-eslint",
  "rules": {
    "indent": [
      "warn",
      2
    ],
    "linebreak-style": [
        "warn",
        "unix"
    ],
    "quotes": [
        "warn",
        "single"
    ]
  }
}
