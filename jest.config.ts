/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  coverageProvider: "v8",
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1'
  },
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: false,
            decorators: true,  
          },
          target: 'es2019',
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true
          },
        },
        module: {
          type: 'es6',
          noInterop: false,
        },
      }
    ]
  },
  // module.exports = {
  //   roots: ['<rootDir>/tests'],
  //   collectCoverageFrom: [
  //     '<rootDir>/src/**/*.ts',
  //     '!<rootDir>/src/main/**'
  //   ],
  //   coverageDirectory: 'coverage',
  //   coverageProvider: 'babel',
  //   testEnvironment: 'node',
  //   preset: '@shelf/jest-mongodb',
  //   transform: {
  //     '.+\\.ts$': 'ts-jest'
  //   },
    // moduleNameMapper: {
    //   '@/tests/(.*)': '<rootDir>/tests/$1',
    //   '@/(.*)': '<rootDir>/src/$1'
    // }
  // }

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "\\\\node_modules\\\\",
  //   "\\.pnp\\.[^\\\\]+$"
  // ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // verbose: undefined,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
};
