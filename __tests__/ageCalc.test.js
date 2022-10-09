import {PersonAge} from "../src/agecalculator";

describe('calcAge', () => {
  test("It should take a user's age", () => {
    //code
    const personAge = new PersonAge(10);
    //expect statements
    expect(personAge.age).toEqual(10);
  });
  test("It should take an age and convert to mercury age", () => {
    const mercuryAge = new PersonAge(10);
    expect(mercuryAge.convertAgeToPlanet(10, "mercury")).toEqual(2.4)
  });
  test("It should take an age and convert to venus age", () => {
    const venusAge = new PersonAge(10);
    expect(venusAge.convertAgeToPlanet(10, "venus")).toEqual(6.2)
  });
  test("It should take an age and convert to mars age", () => {
    const marsAge = new PersonAge(10);
    expect(marsAge.convertAgeToPlanet(10, "mars")).toBeCloseTo(18.8)
  });
  test("It should take an age and convert to jupiter age", () => {
    const jupiterAge = new PersonAge(10);
    expect(jupiterAge.convertAgeToPlanet(10, "jupiter")).toBeCloseTo(118.6)
  });
  test("It should take an age return life expectancy", () => {
    const age = 10;
    const lifeExpectancy = 8;
    const planet = "jupiter";
    const calc = new PersonAge(age);
    expect(calc.howLongYouGot(lifeExpectancy, planet)).toBeCloseTo(23.72);
  });
});