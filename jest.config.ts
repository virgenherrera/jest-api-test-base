/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html

*/
import type { Config } from '@jest/types';

export const BaseConfig: Config.InitialOptions = {
  maxWorkers: '95%',
  reporters: [
    'default',
    'summary',
    [
      'jest-html-reporter',
      {
        pageTitle: 'API Test Report',
        outputPath: './reports/API-report.html',
        includeFailureMsg: true,
      },
    ],
  ],
  rootDir: 'test/suites',
  setupFiles: ['dotenv/config'],
  testEnvironment: 'node',
  testRegex: '.spec.ts$',
  testTimeout: 3e4,
  transform: { '^.+\\.ts$': 'ts-jest' },
  verbose: false,
};

export default BaseConfig;
