module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  testEnvironmentOptions: {
    testURL: 'http://localhost',
    customExportConditions: [
      'node',
      'node-addons',
    ],
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    'ts',
    'js',
  ],
  watchPathIgnorePatterns: [
    "<rootDir>/examples/",
    "/node_modules/"
  ],
  testRegex: "^.+\\.spec\\.tsx?$"
}
