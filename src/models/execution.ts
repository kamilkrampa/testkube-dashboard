import {Args} from '@models/args';
import {AssertionResult} from '@models/assertionResult';
import {EntityMap} from '@models/entityMap';
import {TestContent} from '@models/test';
import {TestExecutor} from '@models/testExecutors';
import {Variables} from '@models/variable';

export type ExecutionStatusEnum = 'running' | 'passed' | 'failed' | 'queued' | 'cancelled';
export type ExecutionResultOutputTypeEnum = 'text/plain' | 'application/junit+xml' | 'application/json';
export type ExecutionStepResultStatusEnum = 'success' | 'error';

export type ExecutionStepResult = {
  name: string;
  duration?: string;
  status: ExecutionStepResultStatusEnum;
  assertionResults: AssertionResult;
};

export type ExecutionResult = {
  status: ExecutionStatusEnum;
  output?: string;
  outputType?: ExecutionResultOutputTypeEnum;
  errorMessage?: string;
  steps?: ExecutionStepResult[];
  reports: any;
};

export type Execution = {
  id: string;
  testName: string;
  testNamespace: string;
  testType: TestExecutor;
  name: string;
  envs: EntityMap;
  args: Args;
  params: EntityMap;
  paramsFile: string;
  content: TestContent;
  startTime: Date;
  endTime: Date;
  duration: string;
  executionResult: ExecutionResult;
  labels: EntityMap;
  number: number;
  variables?: Variables;
};

export type ExecutionRequest = {
  description: string;
  name: string;
  testSuiteName?: string;
  number: number;
  executionLabels: EntityMap;
  namespace: string;
  variablesFile: string;
  variables?: Variables;
  testSecretUUID: string;
  testSuiteSecretUUID: string;
  args: Args;
  image: string;
  envs: EntityMap;
  secretEnvs: EntityMap;
  sync: boolean;
  httpProxy: string;
  httpsProxy: string;
  activeDeadlineSeconds?: number;
};
