const {defaults} = require('jest-config');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^src/(.*)$': 'src/$1',
  },
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  testPathIgnorePatterns: [
    "/node_modules/",
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'css', 'node'],
  // https://github.com/zeit/next.js/issues/8663#issue-490553899
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsconfig: './test/tsconfig.jest.json',
    },
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};
