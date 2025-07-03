module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/packages/**/test/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  roots: ['<rootDir>/packages'],
};

