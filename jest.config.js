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
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'node',
    'vue',
  ],
  watchPathIgnorePatterns: [
    "<rootDir>/examples/",
    "/node_modules/"
  ]
}
