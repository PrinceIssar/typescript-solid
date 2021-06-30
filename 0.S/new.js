"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MusicPlayer_1 = require("./classes/MusicPlayer");
var Engine_1 = require("./classes/Engine");
var FuelTank_1 = require("./classes/FuelTank");
var Car_1 = require("./classes/Car");
// When you see <cast>variable this is a "cast" of a variable, explicitly telling the code what the type of this variable will be.
// This is sometimes needed when a default JS function does not return a precise enough Type.
// I need to cast this to HtmlElement because the default Element return type is not specific to the HTML context (because some versions of JS can also be used in the backend, see node.js)
// This makes it not having some properties like .innerText. Test it out yourself by removing the <HTMLElement>
var musicToggleElement = document.querySelector("#music-toggle");
var musicSliderElement = (document.querySelector("#music-slider"));
var engineToggleElement = (document.querySelector("#engine-toggle"));
var addFuelForm = document.querySelector("#add-fuel-form");
var addFuelInput = document.querySelector("#add-fuel-input");
var fuelLevelElement = document.querySelector("#fuel-level");
var milesElement = document.querySelector("#miles-value");
var audioElement = document.querySelector("#car-music");
var defaultFuel = 0;
var defaultFuelMileage = 10;
var defaultFuelMaxCapacity = 100;
var musicPlayer = new MusicPlayer_1.MusicPlayer(0, 50);
var engine = new Engine_1.Engine(false);
var fuelTank = new FuelTank_1.FuelTank(defaultFuel, defaultFuelMileage, defaultFuelMaxCapacity);
var car = new Car_1.Car(musicPlayer, engine, fuelTank);
musicToggleElement.addEventListener("click", function () {
    if (car.musicPlayer.musicLevel === 0) {
        car.musicPlayer.turnMusicOn();
        musicSliderElement.value = car.musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = "Turn music off";
        return;
    }
    musicToggleElement.innerText = "Turn music on";
    car.musicPlayer.turnMusicOff();
});
//I use input instead of change, because then the value changes when I move the mouse, not only on release
musicSliderElement.addEventListener("input", function (event) {
    var target = event.target;
    car.musicPlayer.musicLevel = target.value;
    audioElement.volume = car.musicPlayer.musicLevel / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = car.musicPlayer.musicLevel
        ? "Turn music off"
        : "Turn music on";
});
engineToggleElement.addEventListener("click", function () {
    if (car.engine.engineStatus) {
        car.engine.turnEngineOff();
        engineToggleElement.innerText = "Turn engine on";
        return;
    }
    engineToggleElement.innerText = "Turn engine off";
    car.engine.turnEngineOn();
});
addFuelForm.addEventListener("submit", function (event) {
    event.preventDefault();
    car.fuelTank.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.fuelTank.toString();
});
setInterval(function () {
    car.drive();
    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = car.miles;
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = car.fuelTank.fuel.toString();
    if (car.musicPlayer.musicLevel === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);
