module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "jest": true,
    // Enable all ECMAScript 6 features except for modules (this automatically
    // sets the ecmaVersion parser option to 6).
    "es6": true,
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    // Extends base config so we don't have to redefine the compilerOptions.
    "extends": "./tsconfig.json"
  },
  "plugins": [
    "@typescript-eslint",
    "airbnb-base",
    "prettier",
    "jest",
    "babel",
  ],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier/@typescript-eslint",
  ],
  "rules": {
    "plugin:@typescript-eslint/recommended": "error"
  }

}
