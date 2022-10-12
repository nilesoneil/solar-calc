export class PersonAge {
  constructor (yourAge) {
    const tempAge = parseInt(yourAge, 10);
    if(isNaN(tempAge) || tempAge <0) {
      throw new Error("age must be a positive number");
    }
    
    this.age = yourAge;
    this.currentPlanet = "earth";
    this.planets = {
      mercury: 0.24,
      venus: .62,
      earth: 1,
      mars: 1.88,
      jupiter: 11.86
    };
  }

  toMercuryAge() {
    this.convertToPlanetAge("mercury");
  }
  toVenusAge() {
    this.convertToPlanetAge("venus");
  }
  toEarthAge() {
    this.convertToPlanetAge("earth");
  }
  toMarsAge() {
    this.convertToPlanetAge("mars");
  }
  toJupiterAge() {
    this.convertToPlanetAge("jupiter");
  }

  convertToPlanetAge(planet) {
    this.age = (this.age/this.planets[this.currentPlanet]) * this.planets[planet];
    this.currentPlanet = planet;
  }

  convertAgeToPlanet(age, planet) {
    return age * this.planets[planet];
  }

  howLongYouGot(lifeExpectancy, planet) {
    const tempAge = this.convertAgeToPlanet(this.age, planet) - this.convertAgeToPlanet(lifeExpectancy, planet);
    return Math.abs(tempAge);
  }
}


