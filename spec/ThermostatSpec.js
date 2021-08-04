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
});
