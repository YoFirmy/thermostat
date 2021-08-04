class Thermostat {
  constructor() {
    this._temperature = 20;
    this._MINIMUM_TEMPERATURE = 10;
  }

  temperature() {
    return this._temperature;
  };

  up() {
    if(this._isBelowMaximum()) this._temperature += 1;
  };

  down() {
    if(this._isBelowMinimum()) this._temperature -= 1;
  };

  _isPowerSavingModeOn() {
    return true;
  };

  _isBelowMinimum() {
    return this._temperature > this._MINIMUM_TEMPERATURE
  };

  _isBelowMaximum() {
    if(this._isPowerSavingModeOn()) {
      return this._temperature < 25
    } else {
      return this._temperature < 32
    };
  };
};
