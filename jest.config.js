module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/configs/jest/setupTests.ts'],
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageReporters: ['json-summary', 'text', 'lcov'],
  collectCoverageFrom: ['src'],
  coveragePathIgnorePatterns: ['styles.ts', 'style.ts'],
  testPathIgnorePatterns: ['node_modules'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/src/configs/jest/__mocks__/svgrMock.ts',
  },
  moduleNameMapper: {
    '^root(.*)$': '<rootDir>/src$1',
    '^configs(.*)$': '<rootDir>/src/configs$1',
    '^data(.*)$': '<rootDir>/src/data$1',
    '^domain(.*)$': '<rootDir>/src/domain$1',
    '^infra(.*)$': '<rootDir>/src/infra$1',
    '^presentation(.*)$': '<rootDir>/src/presentation$1',
    '^.+\\.(css|less)$': '<rootDir>/src/config/CSSStub.js',
  },
};
