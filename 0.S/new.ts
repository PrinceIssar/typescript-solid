import { MusicPlayer } from "./classes/MusicPlayer";
import { Engine } from "./classes/Engine";
import { FuelTank } from "./classes/FuelTank";
import { Car } from "./classes/Car";

// When you see <cast>variable this is a "cast" of a variable, explicitly telling the code what the type of this variable will be.
// This is sometimes needed when a default JS function does not return a precise enough Type.
// I need to cast this to HtmlElement because the default Element return type is not specific to the HTML context (because some versions of JS can also be used in the backend, see node.js)
// This makes it not having some properties like .innerText. Test it out yourself by removing the <HTMLElement>
const musicToggleElement = <HTMLElement>document.querySelector("#music-toggle");
const musicSliderElement = <HTMLInputElement>(
    document.querySelector("#music-slider")
);
const engineToggleElement = <HTMLInputElement>(
    document.querySelector("#engine-toggle")
);
const addFuelForm = document.querySelector("#add-fuel-form");
const addFuelInput = <HTMLFormElement>document.querySelector("#add-fuel-input");
const fuelLevelElement = <HTMLElement>document.querySelector("#fuel-level");
const milesElement = <HTMLElement>document.querySelector("#miles-value");
const audioElement = <HTMLAudioElement>document.querySelector("#car-music");

const defaultFuel = 0;
const defaultFuelMileage = 10;
const defaultFuelMaxCapacity = 100;

let musicPlayer = new MusicPlayer(0, 50);
let engine = new Engine(false);
let fuelTank = new FuelTank(
    defaultFuel,
    defaultFuelMileage,
    defaultFuelMaxCapacity
);
let car = new Car(musicPlayer, engine, fuelTank);

musicToggleElement.addEventListener("click", () => {
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
musicSliderElement.addEventListener("input", (event) => {
    let target = <HTMLFormElement>event.target;

    car.musicPlayer.musicLevel = target.value;
    audioElement.volume = car.musicPlayer.musicLevel / 100;

    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = car.musicPlayer.musicLevel
        ? "Turn music off"
        : "Turn music on";
});

engineToggleElement.addEventListener("click", () => {
    if (car.engine.engineStatus) {
        car.engine.turnEngineOff();
        engineToggleElement.innerText = "Turn engine on";
        return;
    }
    engineToggleElement.innerText = "Turn engine off";
    car.engine.turnEngineOn();
});

addFuelForm.addEventListener("submit", (event) => {
    event.preventDefault();

    car.fuelTank.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.fuelTank.toString();
});

setInterval(() => {
    car.drive();

    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = <string>(<unknown>car.miles);
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = car.fuelTank.fuel.toString();

    if (car.musicPlayer.musicLevel === 0) {
        audioElement.pause();
    } else {
        audioElement.play();
    }
}, 1000);