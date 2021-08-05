"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector("#temperature").innerText = thermostat.temperature;
  }

  const thermostat = new Thermostat();
  updateTemperature();

  document.querySelector('#temperature-up').addEventListener('click', () => {
    thermostat.up();
    updateTemperature();
  })

  document.querySelector('#temperature-down').addEventListener('click', () => {
    thermostat.down();
    updateTemperature();
  })
})
