/// <reference path="../../libraries/angularjs/angular.d.ts"/>
/// <reference path="../models/violation.ts"/>
module pseTrader.controllers {
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
    .controller("loginController", pseTrader.controllers.LoginController);
