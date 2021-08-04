class Thermostat {
  constructor() {
    this._temperature = 20;
    this._MINIMUM_TEMPERATURE = 10;
    this._powerSavingModeOn = true;
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

  turnOffPowerSavingMode() {
    this._powerSavingModeOn = false
  };

  _isPowerSavingModeOn() {
    return this._powerSavingModeOn
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
