"use strict";

describe("Thermostat", () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("default temperature is 20 degrees", () => {
    expect(thermostat.temperature()).toEqual(20)
  });

  it("can increase the temperature", () => {
    thermostat.up();
    expect(thermostat.temperature()).toEqual(21)
  });

  it("can decrease the temperature", () => {
    thermostat.down();
    expect(thermostat.temperature()).toEqual(19)
  });

  it("cannot go below 10 degrees", () => {
    for(let i = 0; i < 11; i++) {
      thermostat.down();
    };
    expect(thermostat.temperature()).toEqual(10)
  });

  describe("when power saving mode is on", () => {
    beforeEach(() => {
      spyOn(thermostat, "_isPowerSavingModeOn").and.returnValue(true)
    });

    it("cannot go above 25 degrees", () => {
      for(let i = 0; i < 6; i++) thermostat.up();
      expect(thermostat.temperature()).toEqual(25)
    });
  });

  describe("when power saving mode is off", () => {
    beforeEach(() => {
      spyOn(thermostat, "_isPowerSavingModeOn").and.returnValue(false)
    });

    it("cannot go above 32 degrees", () => {
      for(let i = 0; i < 13; i++) thermostat.up();
      expect(thermostat.temperature()).toEqual(32)
    });
  });
});
