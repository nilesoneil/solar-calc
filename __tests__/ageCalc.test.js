import { PersonAge } from "../src/agecalculator";

describe('calcAge', () => {
  let calc;
  beforeEach(() => {
    calc = new PersonAge(10);
  });
  test("To Mercury Age", () => {
    calc.toMercuryAge()
    expect(calc.age).toEqual(2.4);
  });
  test("To Venus Age", () => {
    calc.toVenusAge()
    expect(calc.age).toEqual(6.2)
  });
  test("To Mars Age", () => {
    calc.toMarsAge()
    expect(calc.age).toBeCloseTo(18.8);
  });
  test("To Jupiter Age", () => {
    calc.toJupiterAge()
    expect(calc.age).toBeCloseTo(118.6);
  });
  test("It should take an age return life expectancy", () => {
    const age = 10;
    const lifeExpectancy = 8;
    const planet = "jupiter";
    const calc = new PersonAge(age);
    expect(calc.howLongYouGot(lifeExpectancy, planet)).toBeCloseTo(23.72);
  });
});