const calTax = require("./calTax")
//test for see that the main function work
test('should be the Income Tax on salary ', () => {

    const tax = calTax(100000)
  expect(tax).toBe(40156.83)
})
//test for see that the function can get only a positiv number and bigger than zero
test ("should get only a number greater than 0", () =>{
  const bigerThenZero = calTax(5)
  expect(bigerThenZero).toBeGreaterThan(0)
})
//test for see that the function can get only a number and not a string
test ("should get only a number and not a string", () =>{
  const notString = calTax(0)
  expect(notString).not.toBeNaN
})

