module.exports = {
  verbose: true,
  preset: 'jest-playwright-preset',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  //modulePathIgnorePatterns: ["playwright"],
  testMatch: ['**/tests/jest/*.ts?(x)'],

}