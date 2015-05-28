/// <reference path="../libraries/angularjs/angular.d.ts"/>
/// <reference path="../libraries/angularjs/angular-route.d.ts"/>
module pseTrader {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home", {
                controller: "angularWithTS.controllers.tsDemoController",
                templateUrl: "/app/views/playlist.html",
                controllerAs: "playList" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        }
    }
}