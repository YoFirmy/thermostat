"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector("#temperature").innerText = thermostat.temperature;
    document.querySelector("#temperature").className = thermostat.currentEnergyUsage();
  }
  
  const updatePowerSaveModeStatus = () => {
    if(thermostat.isPowerSavingModeOn) {
      document.querySelector("#power-saving-mode-status").innerText = "on";
    } else {
      document.querySelector("#power-saving-mode-status").innerText = "off";
    }
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

  fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e175f3ed1065a9c33281bc2759e0871a&units=metric')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector("#current-temperature").innerText = data.main.temp;
    });

  const selectElement = document.querySelector("#current-city");
  selectElement.addEventListener('change', (event) => {
    const city = event.target.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e175f3ed1065a9c33281bc2759e0871a&units=metric`

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector("#current-temperature").innerText = data.main.temp
      })
  })
})
