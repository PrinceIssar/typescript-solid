//class

export class MusicPlayer {

    _musicLevel : number ;
    _oldMusicLevel : number;

    constructor(_musicLevel : number, _oldMusicLevel : number) {
        this._musicLevel = _musicLevel;
        this._oldMusicLevel = _oldMusicLevel;
    }
//getters

    get musicLevel(): number {
        return this._musicLevel;
    }

    set musicLevel(value: number) {
        this._musicLevel = value;
        this._oldMusicLevel = value;
    }

    turnMusicOn() {
        this._musicLevel = this._oldMusicLevel;
    }

    turnMusicOff() {
        this._musicLevel = 0;
    }
}
