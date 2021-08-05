"use strict";

describe("Thermostat", () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("can increase the temperature", () => {
    thermostat.up();
    expect(thermostat.temperature()).toEqual(21)
  });

  it("can decrease the temperature", () => {
    thermostat.down();
    expect(thermostat.temperature()).toEqual(19);
  });

  it("cannot go below 10 degrees", () => {
    for(let i = 0; i < 11; i++) {
      thermostat.down();
    };
    expect(thermostat.temperature()).toEqual(10);
  });

  it("has power saving mode on by default", () => {
    expect(thermostat._isPowerSavingModeOn()).toEqual(true);
  });

  it("can have power saving mode turned off", () => {
    thermostat.turnOffPowerSavingMode();
    expect(thermostat._isPowerSavingModeOn()).toEqual(false);
  });

  it("Can have power saving mode turned on", () => {
    thermostat.turnOffPowerSavingMode();
    thermostat.turnOnPowerSavingMode();
    expect(thermostat._isPowerSavingModeOn()).toEqual(true);
  });

  it("can reduce temperature to 20 with a reset function", () => {
    for(let i = 0; i < 3; i++) thermostat.up();
    thermostat.reset();
    expect(thermostat.temperature()).toEqual(20)
  });

  describe("when at default temperature", () => {
    it("default temperature is 20 degrees", () => {
      expect(thermostat.temperature()).toEqual(20)
    });

    it("reveals energry usage to be medium-usage", () => {
      expect(thermostat.currentEnergyUsage()).toEqual("medium-usage")
    });
  });

  describe("when temperature is below 18", () => {
    beforeEach(() => {
      for(let i = 0; i < 3; i++) thermostat.down();
    });

    it("reveals energy usage to be low-usage", () => {
      expect(thermostat.currentEnergyUsage()).toEqual("low-usage")
    });
  });

  describe("when temperature is above 25", () => {
    beforeEach(() => {
      thermostat.turnOffPowerSavingMode();
      for(let i = 0; i < 6; i++) thermostat.up();
    });

    it("reveals energy usage to be high-usage", () => {
      expect(thermostat.currentEnergyUsage()).toEqual("high-usage");
    });

    it("reduces temperature to maximum limit when power saving mode is turned on", () => {
      thermostat.turnOnPowerSavingMode();
      expect(thermostat.temperature()).toEqual(25);
    });
  });

  describe("when power saving mode is on", () => {
    beforeEach(() => {
      spyOn(thermostat, "_isPowerSavingModeOn").and.returnValue(true);
    });

    it("cannot go above 25 degrees", () => {
      for(let i = 0; i < 6; i++) thermostat.up();
      expect(thermostat.temperature()).toEqual(25);
    });
  });

  describe("when power saving mode is off", () => {
    beforeEach(() => {
      spyOn(thermostat, "_isPowerSavingModeOn").and.returnValue(false);
    });

    it("cannot go above 32 degrees", () => {
      for(let i = 0; i < 13; i++) thermostat.up();
      expect(thermostat.temperature()).toEqual(32);
    });
  });
});
