import {TestExecutor} from '@models/testExecutors';

type ExecutorGridItem = {
  type: TestExecutor | 'custom' | 'container';
  title: string;
  description: string;
  docLink: string;
};

export const executorsList: ExecutorGridItem[] = [
  {
    type: 'cypress/project',
    title: 'Cypress',
    description:
      'Fast, easy and reliable testing for anything that runs in a browser. The de-facto standard for frontend tests.',
    docLink: 'https://kubeshop.github.io/testkube/test-types/executor-cypress/',
  },
  {
    type: 'postman/collection',
    title: 'Postman',
    description: 'Run tests from Postman definitions. Easy to define and collaborate across your team.',
    docLink: 'https://kubeshop.github.io/testkube/test-types/executor-postman/',
  },
  {
    type: 'custom',
    title: 'Build your own',
    description:
      'Our executors are modular and can easily be extended. We help you to get started with some templates and guides.',
    docLink: 'https://kubeshop.github.io/testkube/test-types/executor-custom/',
  },
  {
    type: 'k6/script',
    title: 'K6',
    description:
      'k6 is an open-source tool and cloud service that makes load testing easy for developers and QA engineers.',
    docLink: 'https://kubeshop.github.io/testkube/test-types/executor-k6/',
  },
  {
    type: 'curl/test',
    title: 'curl',
    description: 'Test your API by running Curl commands directly from your testkube and evaluate server responses.',
    docLink: 'https://kubeshop.github.io/testkube/test-types/executor-curl/',
  },
  {
    type: 'soapui/xml',
    title: 'SoapUI',
    description: "SoapUI is the world's most widely-used automated testing tool for SOAP and REST APIs.",
    docLink: 'https://kubeshop.github.io/testkube/test-types/executor-soapui/',
  },
  {
    type: 'artillery/test',
    title: 'Artillery',
    description:
      'Artillery is a modern load testing & smoke testing for SRE and DevOps. Runs on multiple geographical regions.',
    docLink: 'https://kubeshop.github.io/testkube/test-types/executor-artillery/',
  },
  {
    type: 'kubepug/yaml',
    title: 'KubePug',
    description: 'Kubernetes Pre UpGrade (Checker) checks whether your objects are deprecated before migrating. ',
    docLink: 'https://kubeshop.github.io/testkube/test-types/executor-kubepug/',
  },
  {
    type: 'maven/test',
    title: 'Maven',
    description:
      'Maven is a build automation tool used primarily for Java projects. You can run any maven based project and run it as a test. You can use the RestAssured framework with this Maven executor for example.',
    docLink: 'https://kubeshop.github.io/testkube/test-types/executor-maven/',
  },
  {
    type: 'gradle/test',
    title: 'Gradle',
    description:
      'Gradle is a build automation tool for multi-language software development. It’s primarily used for Java and a more modern alternative to Maven. You can use the RestAssured framework with this Maven executor for example.',
    docLink: 'https://kubeshop.github.io/testkube/test-types/executor-gradle/',
  },
  {
    type: 'ginkgo/test',
    title: 'Ginkgo',
    description:
      'Ginkgo is a mature testing framework for Go designed to help you write expressive specs. Whether you are writing basic unit specs, complex integration specs, or even performance specs.',
    docLink: 'https://kubeshop.github.io/testkube/test-types/executor-ginkgo/',
  },
  {
    type: 'jmeter/test',
    title: 'JMeter',
    description:
      'The Apache JMeter™ application is open source software, a 100% pure Java application designed to load test functional behavior and measure performance.',
    docLink: 'https://kubeshop.github.io/testkube/test-types/executor-jmeter',
  },
];
