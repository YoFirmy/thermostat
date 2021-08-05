class Thermostat {
  constructor() {
    this.temperature = 20;
    this._MINIMUM_TEMPERATURE = 10;
    this._MAXIMUM_TEMP_PSM_ON = 25;
    this._MAXIMUM_TEMP_PSM_OFF = 32;
    this.isPowerSavingModeOn = true;
  }

  up() {
    if(this._isBelowMaximum()) this.temperature += 1;
  };

  down() {
    if(this._isAboveMinimum()) this.temperature -= 1;
  };

  turnOffPowerSavingMode() {
    this.isPowerSavingModeOn = false
  };

  turnOnPowerSavingMode() {
    this.isPowerSavingModeOn = true
    if(this._isAbovePowerSaveMaximum) {
      this.temperature = this._MAXIMUM_TEMP_PSM_ON
    };
  };

  reset() {
    this.temperature = 20;
  };

  currentEnergyUsage() {
    if(this.temperature < 18) {
      return "low-usage";
    } else if(this._isBelowPowerSaveMaximum()) {
      return "medium-usage";
    } else {
      return "high-usage";
    };
  };

  _isAboveMinimum() {
    return this.temperature > this._MINIMUM_TEMPERATURE;
  };

  _isBelowMaximum() {
    if(this.isPowerSavingModeOn) {
      return this._isBelowPowerSaveMaximum();
    } else {
      return this.temperature < this._MAXIMUM_TEMP_PSM_OFF;
    };
  };

  _isAbovePowerSaveMaximum() {
    return this.temperature > this._MAXIMUM_TEMP_PSM_ON;
  };

  _isBelowPowerSaveMaximum() {
    return this.temperature < this._MAXIMUM_TEMP_PSM_ON;
  };
};
