const generator = require('../src/colors-generator')

test('generate', () => {
  expect(generator.generate("#86bff2", 3).get())
    .toEqual([
      "#86bff2",
      "#f286bf",
      "#bff286"
    ])
})