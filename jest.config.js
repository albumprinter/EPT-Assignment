/** @type {import('jest').Config} */
const config = {
  projects: ['<rootDir>/packages/*'],
  // testMatch: ['**/src/**/*.test.{js,ts}'],
  // transform: {
  //   '^.+\\.[jt]s$': ['@swc/jest'],
  // },
  // clearMocks: true,
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   '**/src/**/*.{js,ts}',
  //   '!**/src/handler.ts',
  //   '!**/*.d.ts',
  //   '!**/node_modules/**',
  // ],
  // testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.serverless/'],
};

module.exports = config;
