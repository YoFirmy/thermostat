"use strict";

describe("Thermostat", () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("default temperature is 20 degrees", () => {
    expect(thermostat.temperature()).toEqual(20)
  });
});
