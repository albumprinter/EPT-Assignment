const {defaults} = require('jest-config');

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
    '^.+\\.(ts|tsx)$': ['@swc/jest'],
  },
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{jsx,tsx}',
    '!src/fixtures/**/*.ts',
    '!src/**/*.css',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^image![a-zA-Z0-9$_-]+$': 'GlobalImageStub',
    '^[./a-zA-Z0-9$_-]+\\.png$': '<rootDir>/__mocks__/assets.js',
    '\\.(css|less|svg)$': '<rootDir>/__mocks__/assets.js',
  },
  setupFiles: ['<rootDir>/src/setupTests.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTestsAfterEnv.ts'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};

module.exports = config;
