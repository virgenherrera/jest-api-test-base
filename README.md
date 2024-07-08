# Jest API Test Base

This is a basic template [Jest](https://jestjs.io/)  for testing APIs using Jest, Supertest, and TypeScript.

## Prerequisites

Before you start, make sure you have the following engines installed:

- **Node.js**: `>=22.2.0 <23`
  - [Download Node.js](https://nodejs.org/)

- **pnpm**: `>=9.5.0`
  - Install pnpm with npm:

    ```bash
    npm install -g pnpm
    ```

## Configuration

### Environment Variables

You need to declare an environment variable called `API_URL`. You can use the `.env.example` file as a reference to declare it at the repository level. Simply copy the file and name it to `.env`, then adjust the value of `API_URL` as needed.

```bash
cp .env.example .env
```

### Installation

To install the project dependencies, run:

```bash
pnpm install
```

## Scripts

The following scripts are available in the project:

- `test`: Runs cleanup and all test scripts.

  ```bash
  pnpm test
  ```

- `test:static`: Runs ESLint on the test files.

  ```bash
  pnpm test:static
  ```

- `test:api`: Runs Jest to execute API tests.

  ```bash
  pnpm test:api
  ```

## Running Tests

To run the tests, use the following command:

```bash
pnpm test
```

This command will perform the following actions:

1. Cleanup any previous test data.
2. Run static analysis on test files.
3. Execute the API tests using Jest.

Entendido, Hugo. Aquí está la parte de la documentación que describes sobre la estructura del proyecto y el uso de `TestContext`.

## Project Structure

The main structure of the project is as follows:

```text
test/
┣ suites/
┃ ┗ fact.spec.ts
┗ utils/
  ┣ index.ts
  ┗ test-context.util.ts
```

All files ending with `.spec.ts` will be crawled and executed by the Jest engine as defined in the `jest.config.ts` file.

### Test Context

The `test-context.util.ts` file is responsible for setting up a singleton instance for Supertest, ensuring the `API_URL` environment variable is provided and used correctly. 

In summary, it validates the existence of the environment variable and uses it to configure Supertest. Once configured, it creates a singleton instance that can be used in your test suites.

### Using TestContext in Test Suites

You can use the `TestContext` singleton in your test suites as follows:

```typescript
let testCtx: TestContext = null;

beforeAll(async () => {
  testCtx = await TestContext.getInstance();
});
```

This ensures that all your API tests are properly configured and ready to use the Supertest instance with the provided `API_URL`.
