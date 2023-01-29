module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  testEnvironmentOptions: {
    testURL: 'http://localhost',
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
    'css'
  ],
  'setupFiles': [
    '<rootDir>/__test__/setup.js'
  ],
}
