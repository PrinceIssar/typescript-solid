// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"classes/MusicPlayer.ts":[function(require,module,exports) {
"use strict"; //class

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MusicPlayer = void 0;

var MusicPlayer =
/** @class */
function () {
  function MusicPlayer(_musicLevel, _oldMusicLevel) {
    this._musicLevel = _musicLevel;
    this._oldMusicLevel = _oldMusicLevel;
  }

  Object.defineProperty(MusicPlayer.prototype, "musicLevel", {
    //getters
    get: function get() {
      return this._musicLevel;
    },
    set: function set(value) {
      this._musicLevel = value;
      this._oldMusicLevel = value;
    },
    enumerable: false,
    configurable: true
  });

  MusicPlayer.prototype.turnMusicOn = function () {
    this._musicLevel = this._oldMusicLevel;
  };

  MusicPlayer.prototype.turnMusicOff = function () {
    this._musicLevel = 0;
  };

  return MusicPlayer;
}();

exports.MusicPlayer = MusicPlayer;
},{}],"classes/Engine.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Engine = void 0;

var Engine =
/** @class */
function () {
  function Engine(engineStatus) {
    this._engineStatus = false;
    this._engineStatus = engineStatus;
  }

  Object.defineProperty(Engine.prototype, "engineStatus", {
    get: function get() {
      return this._engineStatus;
    },
    enumerable: false,
    configurable: true
  });

  Engine.prototype.turnEngineOn = function () {
    this._engineStatus = true;
  };

  Engine.prototype.turnEngineOff = function () {
    this._engineStatus = false;
  };

  return Engine;
}();

exports.Engine = Engine;
},{}],"classes/FuelTank.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FuelTank = void 0;

var FuelTank =
/** @class */
function () {
  function FuelTank(fuel, FUEL_MILEAGE, MAXIMUM_FUEL_CAPACITY) {
    this._fuel = 0;
    this._fuel = fuel;
    this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    this._FUEL_MILEAGE = FUEL_MILEAGE;
  }

  Object.defineProperty(FuelTank.prototype, "fuel", {
    get: function get() {
      return this._fuel;
    },
    set: function set(value) {
      this._fuel = value;
    },
    enumerable: false,
    configurable: true
  });

  FuelTank.prototype.addFuel = function (fuel) {
    this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
  };

  Object.defineProperty(FuelTank.prototype, "FUEL_MILEAGE", {
    get: function get() {
      return this._FUEL_MILEAGE;
    },
    enumerable: false,
    configurable: true
  });
  return FuelTank;
}();

exports.FuelTank = FuelTank;
},{}],"classes/Car.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Car = void 0;

var Car =
/** @class */
function () {
  function Car(musicPlayer, engine, fuelTank) {
    this._miles = 0;
    this._musicPlayer = musicPlayer;
    this._engine = engine;
    this._fuelTank = fuelTank;
  }

  Object.defineProperty(Car.prototype, "miles", {
    get: function get() {
      return this._miles;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Car.prototype, "musicPlayer", {
    get: function get() {
      return this._musicPlayer;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Car.prototype, "engine", {
    get: function get() {
      return this._engine;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Car.prototype, "fuelTank", {
    get: function get() {
      return this._fuelTank;
    },
    enumerable: false,
    configurable: true
  });

  Car.prototype.drive = function () {
    if (this._engine.engineStatus === false || this.fuelTank.fuel <= 0) {
      //engineStatus no brackets cause Boolean?
      //what I am doing here is a good principle called "failing early"
      // If you have some conditions you need to check, that will exclude most of the code in your function check that first
      // This prevents your "happy path" of code to be deeply indented.
      return;
    }

    this.fuelTank.fuel -= 1;
    this._miles += this.fuelTank.FUEL_MILEAGE;
  };

  return Car;
}();

exports.Car = Car;
},{}],"new.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MusicPlayer_1 = require("./classes/MusicPlayer");

var Engine_1 = require("./classes/Engine");

var FuelTank_1 = require("./classes/FuelTank");

var Car_1 = require("./classes/Car"); // When you see <cast>variable this is a "cast" of a variable, explicitly telling the code what the type of this variable will be.
// This is sometimes needed when a default JS function does not return a precise enough Type.
// I need to cast this to HtmlElement because the default Element return type is not specific to the HTML context (because some versions of JS can also be used in the backend, see node.js)
// This makes it not having some properties like .innerText. Test it out yourself by removing the <HTMLElement>


var musicToggleElement = document.querySelector("#music-toggle");
var musicSliderElement = document.querySelector("#music-slider");
var engineToggleElement = document.querySelector("#engine-toggle");
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
}); //I use input instead of change, because then the value changes when I move the mouse, not only on release

musicSliderElement.addEventListener("input", function (event) {
  var target = event.target;
  car.musicPlayer.musicLevel = target.value;
  audioElement.volume = car.musicPlayer.musicLevel / 100; //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?

  musicToggleElement.innerText = car.musicPlayer.musicLevel ? "Turn music off" : "Turn music on";
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
  car.drive(); //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
  // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number

  milesElement.innerText = car.miles; // This .toString() will actually convert the value in JavaScript from an integer to a string

  fuelLevelElement.innerText = car.fuelTank.fuel.toString();

  if (car.musicPlayer.musicLevel === 0) {
    audioElement.pause();
  } else {
    audioElement.play();
  }
}, 1000);
},{"./classes/MusicPlayer":"classes/MusicPlayer.ts","./classes/Engine":"classes/Engine.ts","./classes/FuelTank":"classes/FuelTank.ts","./classes/Car":"classes/Car.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57695" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","new.ts"], null)
//# sourceMappingURL=/new.905b39e2.js.map