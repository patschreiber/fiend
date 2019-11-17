module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  // The testMatch config is a glob pattern matcher for discovering .test /
  // .spec files in ts / tsx / js format.
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  // The transform config just tells jest to use ts-jest for ts / tsx files.
  "transform": {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },
}
