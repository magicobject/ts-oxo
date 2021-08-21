module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['<rootDir>/dist/*'],
    reporters: ['default'],
    testTimeout: 20000
  }