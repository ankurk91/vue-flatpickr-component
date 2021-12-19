module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  testURL: 'http://localhost',
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
