export class Engine {

    private _engineStatus: boolean = false;


    constructor(engineStatus : boolean) {
        this._engineStatus = engineStatus;
    }

    get engineStatus(): boolean {
        return this._engineStatus;
    }

    turnEngineOn() {
        this._engineStatus = true;
    }

    turnEngineOff() {
        this._engineStatus = false;
    }



}