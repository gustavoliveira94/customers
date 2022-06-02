module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/config/jest/setupTests.ts'],
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageReporters: ['json-summary', 'text', 'lcov'],
  collectCoverageFrom: ['src'],
  coveragePathIgnorePatterns: ['styles.ts', 'style.ts'],
  testPathIgnorePatterns: ['node_modules'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/src/config/jest/__mocks__/svgrMock.ts',
  },
};
