const { composeFn } = require('../dist/index');
test('Compose Functions', () => {
  const fn1 = (a) => a + 100;
  const fn2 = (a) => a + 200;
  const fn3 = (a) => a + 300;
  const fn4 = (a) => a + 400;
  composeFn(fn1, fn2, fn3, fn4)(0).then(function (finalResults) {
    expect(finalResults).toBe(1000);
  });
});