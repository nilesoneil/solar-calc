export class PersonAge {
  constructor (yourAge) {
    this.age = yourAge;
    this.planet = {
      mercury: 0.24,
      venus: .62,
      mars: 1.88,
      jupiter: 11.86
    };
  }

convertAgeToPlanet(age, planet) {
  return age * this.planet[planet];
}

howLongYouGot(lifeExpectancy, planet) {
  const tempAge = this.convertAgeToPlanet(this.age, planet) - this.convertAgeToPlanet(lifeExpectancy, planet);
  return Math.abs(tempAge);
}
}


