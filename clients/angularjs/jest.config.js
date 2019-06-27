module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/app/components/$1',
    '^@core/(.*)$': '<rootDir>/src/app/core/$1',
  },
};