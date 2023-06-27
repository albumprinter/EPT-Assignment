/** @type {import('jest').Config} */
const config = {
  displayName: {
    name: 'ept-gallery-app',
    color: 'teal',
  },
  roots: ['./src/'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.{jsx,tsx}'],
  transform: {
    '^.+\\.[jt]s$': ['@swc/jest'],
  },
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{jsx,tsx}',
    '!src/fixtures/**/*.ts',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.serverless/'],
};

module.exports = config;
