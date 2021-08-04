class Thermostat {
  constructor() {
    this._temperature = 20;
  }

  temperature() {
    return this._temperature;
  };

  up() {
    this._temperature += 1;
  };

  down() {
    this._temperature -= 1
  };
};
