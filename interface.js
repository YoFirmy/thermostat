"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector("#temperature").innerText = thermostat.temperature;
  }
  
  const updatePowerSaveModeStatus = () => {
    document.querySelector("#power-saving-mode-status").innerText = thermostat.isPowerSavingModeOn ? "on" : "off"
  }

  const thermostat = new Thermostat();
  updateTemperature();
  updatePowerSaveModeStatus();

  document.querySelector('#temperature-up').addEventListener('click', () => {
    thermostat.up();
    updateTemperature();
  })

  document.querySelector('#temperature-down').addEventListener('click', () => {
    thermostat.down();
    updateTemperature();
  })

  document.querySelector("#temperature-reset").addEventListener('click', () => {
    thermostat.reset();
    updateTemperature();
  })

  document.querySelector("#powersaving-on").addEventListener('click', () => {
    thermostat.turnOnPowerSavingMode();
    updatePowerSaveModeStatus();
    updateTemperature();
  })

  document.querySelector("#powersaving-off").addEventListener('click', () => {
    thermostat.turnOffPowerSavingMode();
    updatePowerSaveModeStatus();
  })
})
