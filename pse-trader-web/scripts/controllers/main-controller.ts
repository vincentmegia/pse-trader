/// <reference path="../../libraries/angular.d.ts"/>
/// <reference path="../models/violation.ts"/>
module pseTrader.Controllers {
    "use strict";


    /**
     *
     * @constructor
     */
    export class MainController {

        constructor() {
        }
    }
};
angular
    .module("pseTrader")
    .controller("mainController", pseTrader.Controllers.MainController);
