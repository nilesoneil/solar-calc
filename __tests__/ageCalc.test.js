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
  test("To Jupiter and Back Age", () => {
    calc.toJupiterAge()
    expect(calc.age).toBeCloseTo(118.6);
    calc.toEarthAge();
    expect(calc.age).toBeCloseTo(10);
  });
  test("Throws error if age is negative", () => {
    try {
      new PersonAge(-1);
    } catch (e) {
      expect(e.message).toBe("age must be a positive number");
    }
  });
  test("Throws error if no age set", () => {
    try {
      new PersonAge();
    } catch (e) {
      expect(e.message).toBe("age must be a positive number");
    }
  });
  test("Throws error if non parseable int", () => {
    try {
      new PersonAge("F01qques");
    } catch (e) {
      expect(e.message).toBe("age must be a positive number");
    }
  });
  test("It should take an age return life expectancy", () => {
    const lifeExpectancy = 8;
    const planet = "jupiter";
    expect(calc.howLongYouGot(lifeExpectancy, planet)).toBeCloseTo(23.72);
  });
});