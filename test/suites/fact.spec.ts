import { TestContext } from '../utils';

describe(`e2e: (GET) /facts`, () => {
  const enum should {
    getCatFact = 'Should get Cat Fact.',
  }
  let testCtx: TestContext = null;

  beforeAll(async () => (testCtx = await TestContext.getInstance()));

  it(should.getCatFact, async () => {
    const { status, body } = await testCtx.request.get('/fact');

    expect(status).toBe(200);
    expect(body).toMatchObject({
      fact: expect.any(String),
      length: expect.any(Number),
    });
  });
});
