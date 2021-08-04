class Thermostat {
  constructor() {
    this._temperature = 20;
  }

  temperature() {
    return this._temperature;
  };

  up() {
    if(this._temperature < 25) this._temperature += 1;
  };

  down() {
    if(this._temperature > 10) this._temperature -= 1;
  };
};
