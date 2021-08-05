class Thermostat {
  constructor() {
    this._temperature = 20;
    this._MINIMUM_TEMPERATURE = 10;
    this._MAXIMUM_TEMP_PSM_ON = 25;
    this._MAXIMUM_TEMP_PSM_OFF = 32;
    this._powerSavingModeOn = true;
  }

  temperature() {
    return this._temperature;
  };

  up() {
    if(this._isBelowMaximum()) this._temperature += 1;
  };

  down() {
    if(this._isAboveMinimum()) this._temperature -= 1;
  };

  turnOffPowerSavingMode() {
    this._powerSavingModeOn = false
  };

  turnOnPowerSavingMode() {
    this._powerSavingModeOn = true
    if(this._isAbovePowerSaveMaximum) {
      this._temperature = this._MAXIMUM_TEMP_PSM_ON
    };
  };

  reset() {
    this._temperature = 20;
  };

  currentEnergyUsage() {
    if(this._temperature < 18) {
      return "low-usage";
    } else if(this._isBelowPowerSaveMaximum()) {
      return "medium-usage";
    } else {
      return "high-usage";
    };
  };

  _isPowerSavingModeOn() {
    return this._powerSavingModeOn;
  };

  _isAboveMinimum() {
    return this._temperature > this._MINIMUM_TEMPERATURE;
  };

  _isBelowMaximum() {
    if(this._isPowerSavingModeOn()) {
      return this._isBelowPowerSaveMaximum();
    } else {
      return this._temperature < this._MAXIMUM_TEMP_PSM_OFF;
    };
  };

  _isAbovePowerSaveMaximum() {
    return this._temperature > this._MAXIMUM_TEMP_PSM_ON;
  };

  _isBelowPowerSaveMaximum() {
    return this._temperature < this._MAXIMUM_TEMP_PSM_ON;
  };
};
