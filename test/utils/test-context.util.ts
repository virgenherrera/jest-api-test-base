import * as supertest from 'supertest';

export class TestContext {
  private static instance: TestContext = null;

  static async getInstance() {
    if (TestContext.instance) return TestContext.instance;

    const instance = new TestContext();

    TestContext.instance = await instance.initContext();

    return TestContext.instance;
  }

  request: supertest.SuperTest<supertest.Test> = null;

  private get apiUrl(): string {
    const { API_URL } = process.env;

    if (!API_URL) {
      const errMsg = 'You forgot to provide "API_URL" environment Variable.';

      console.error('', errMsg);
      throw new Error(errMsg);
    }

    return API_URL;
  }

  private async initContext() {
    const { apiUrl } = this;

    this.request = supertest(apiUrl);

    Object.freeze(this);
    Object.seal(this);

    return this;
  }
}
