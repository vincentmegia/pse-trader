/// <reference path="../../libraries/angularjs/angular.d.ts"/>
/// <reference path="../models/violation.ts"/>
module pseTrader.controllers {
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
    .controller("mainController", pseTrader.controllers.MainController);
