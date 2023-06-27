/** @type {import('jest').Config} */
const config = {
  displayName: {
    name: 'ept-gallery-api',
    color: 'yellow',
  },
  roots: ['./src/'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.{js,ts}'],
  transform: {
    '^.+\\.[jt]s$': ['@swc/jest'],
  },
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,ts}',
    '!src/handler.ts',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.serverless/'],
  transformIgnorePatterns: ['node_modules/(?!tiny-lru)'],
};

module.exports = config;
