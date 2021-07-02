"use strict";
// multiple implementation possible
var User = /** @class */ (function () {
    function User() {
        this._password = "user";
    }


    User.prototype.checkGoogleLogin = function (token) {
        // return "this will not work";
        return token === this._googleToken;
    };
    User.prototype.setGoogleToken = function (token) {
        this._googleToken = token;
    };
    User.prototype.getFacebookLogin = function (token) {
        return token === this._facebookToken;
    };
    User.prototype.setFacebookToken = function (token) {
        this._facebookToken = token;
    };
    User.prototype.checkPassword = function (password) {
        return password === this._password;
    };
    User.prototype.resetPassword = function () {
        this._password = prompt("What is your new password?");
    };
    return User;
}());
//admin cannot use google or facebook token
var Admin = /** @class */ (function () {
    function Admin() {
        this._password = "admin";
    }
    Admin.prototype.checkPassword = function (password) {
        return password === this._password;
    };
    Admin.prototype.resetPassword = function () {
        this._password = prompt("What is your new password?");
    };
    return Admin;
}());
// class GoogleBot implements Auth {}
var GoogleBot = /** @class */ (function () {
    function GoogleBot() {
    }
    GoogleBot.prototype.checkGoogleLogin = function (token) {
        return token === this._googleToken;
    };
    GoogleBot.prototype.setGoogleToken = function (token) {
        this._googleToken = token;
    };
    return GoogleBot;
}());
var passwordElement = document.querySelector("#password");
var typePasswordElement = (document.querySelector("#typePassword"));
var typeGoogleElement = (document.querySelector("#typeGoogle"));
var typeFacebookElement = (document.querySelector("#typeFacebook"));
var loginAsAdminElement = (document.querySelector("#loginAsAdmin"));
var resetPasswordElement = (document.querySelector("#resetPassword"));
var guest = new User();
var admin = new Admin();
var bot = new GoogleBot();
document.querySelector("#login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var user = loginAsAdminElement.checked ? admin : guest;
    if (!loginAsAdminElement.checked) {
        user.setGoogleToken("secret_token_google");
        user.setFacebookToken("secret_token_fb");
    }
    debugger;
    var auth = false;
    switch (true) {
        case typePasswordElement.checked:
            auth = user.checkPassword(passwordElement.value);
            break;
        case typeGoogleElement.checked:
            auth = user.checkGoogleLogin("secret_token_google");
            break;
        case typeFacebookElement.checked:
            debugger;
            auth = user.getFacebookLogin("secret_token_fb");
            break;
    }
    if (auth) {
        alert("login success");
    }
    else {
        alert("login failed");
    }
});
resetPasswordElement.addEventListener("click", function (event) {
    event.preventDefault();
    var user = loginAsAdminElement.checked ? admin : guest;
    user.resetPassword();
});
