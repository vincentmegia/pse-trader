/// <reference path="../../libraries/angular.d.ts"/>
/// <reference path="../models/violation.ts"/>
module pseTrader.Controllers {
    "use strict";


    /**
     *
     * @constructor
     */
    export class LoginController {

        constructor() {
        }
    }
};
angular
    .module("pseTrader")
    .controller("loginController", pseTrader.Controllers.LoginController);
