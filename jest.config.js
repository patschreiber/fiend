module.exports = {
  name: "fiend",
  automock: true,
  // Don't have jest bail after n errors.
  bail: 0,
  collectCoverage: true,
  // An array of glob patterns indicating a set of files for which coverage
  // information should be collected. If a file matches the specified glob
  // pattern, coverage information will be collected for it even if no tests
  // exist for this file and it's never required in the test suite.
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  coverageDirectory: "./build/test-results",
  coveragePathIgnorePatterns: ["./node_modules", "./build", "./src/lib/data"],
  errorOnDeprecated: true,
  // Jest uses node-notifier to display desktop notifications.
  notify: true,
  roots: ["<rootDir>/tests"],
  // The testMatch config is a glob pattern matcher for discovering .test /
  // .spec files in ts / tsx / js format.
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  // The transform config just tells jest to use ts-jest for ts / tsx files.
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  testPathIgnorePatterns: ["./node_modules", "./build", "./src/lib/data"],
};
