module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/configs/jest/setupTests.ts'],
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageReporters: ['json-summary', 'text', 'lcov'],
  coveragePathIgnorePatterns: ['styles.ts', 'style.ts'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/src/configs/jest/__mocks__/svgrMock.ts',
  },
  collectCoverageFrom: [
    '<rootDir>/src/presentation/ui/components/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/presentation/pages/**/*.{js,jsx,ts,tsx}',
    '!**/index.ts',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/src/configs',
    '<rootDir>/src/data',
    '<rootDir>/src/domain',
  ],
  moduleNameMapper: {
    '^root(.*)$': '<rootDir>/src$1',
    '^configs(.*)$': '<rootDir>/src/configs$1',
    '^data(.*)$': '<rootDir>/src/data$1',
    '^domain(.*)$': '<rootDir>/src/domain$1',
    '^infra(.*)$': '<rootDir>/src/infra$1',
    '^presentation(.*)$': '<rootDir>/src/presentation$1',
  },
};
