/// <reference path="../../libraries/angularjs/angular.d.ts"/>
/// <reference path="../models/violation.ts"/>
module pseTrader.controllers {
    "use strict";


    import Violation = pseTrader.models.Violation;

    /**
     *
     * @constructor
     */
    export class CheckboxController {
        private _violations: Array<Violation> = new Array<Violation>();
        private _isCheckAll: boolean = false;

        constructor() {
            this._violations.push(new Violation(1, "some data1", false));
            this._violations.push(new Violation(2, "some data2", false));
            this._violations.push(new Violation(3, "some data3", false));
        }


        get violations(): Array<Violation>{
            return this._violations;
        }
        get isCheckAll(): boolean {
            return this._isCheckAll;
        }
        set isCheckAll(isCheckAll: boolean) {
            this._isCheckAll = isCheckAll;
        }

        /**
         *
         * @param violations
         */
        addCheck(violations) {
            var checkCount = 0;
            angular.forEach(violations, function (violation) {
                if (violation.checked)
                    checkCount++;
            });
            this._isCheckAll = (checkCount == violations.length);
        }

        /**
         *
         */
        addCollection() {
            this._violations.push(new Violation(4, "some data4", false));
        }

        /**
         *
         */
        updateCollection() {
            this._violations[0].checked = true;
        }

        /**
         *
         * @param violations
         */
        checkAll(violations: Array<Violation>) {
            var isCheckAll = this._isCheckAll;
            angular.forEach(violations, function (violation) {
                violation.checked = isCheckAll;
            });
        }
    }
};
angular
    .module("pseTrader")
    .controller("checkboxController", pseTrader.controllers.CheckboxController);
