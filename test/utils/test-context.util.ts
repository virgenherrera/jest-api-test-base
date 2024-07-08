import * as supertest from 'supertest';

export class TestContext {
  private static instance: TestContext = null;

  static getInstance() {
    if (TestContext.instance) return TestContext.instance;

    const instance = new TestContext();

    TestContext.instance = instance.initContext();

    return TestContext.instance;
  }

  request: ReturnType<typeof supertest> = null;

  private get apiUrl(): string {
    const { API_URL } = process.env;

    if (!API_URL) {
      const errMsg = 'You forgot to provide "API_URL" environment Variable.';

      console.error('', errMsg);
      throw new Error(errMsg);
    }

    return API_URL;
  }

  private initContext() {
    const { apiUrl } = this;

    this.request = supertest(apiUrl);

    Object.freeze(this);
    Object.seal(this);

    return this;
  }
}
