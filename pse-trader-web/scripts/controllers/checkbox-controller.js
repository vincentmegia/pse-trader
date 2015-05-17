(function() {
    'use strict';

    angular
        .module("pseTrader")
        .controller("CheckboxController", CheckboxController);

    /**
     *
     * @constructor
     */
    function CheckboxController() {
        var instance = this;
        instance.addCheck = addCheck;
        instance.addCollection = addCollection;
        instance.updateCollection = updateCollection;
        instance.checkAll = checkAll;
        instance.violations = [
            {id: 1, description: "some data1", checked: false},
            {id: 2, description: "some data2", checked: false},
            {id: 3, description: "some data3", checked: false}
        ];
        instance.isCheckAll = false;

        console.log(instance.violations);

        /**
         *
         * @param violations
         */
        function addCheck(violations) {
            var checkCount = 0;
            angular.forEach(violations, function (violation) {
                if (violation.checked)
                    checkCount++;
            });
            if (checkCount == violations.length)
                instance.isCheckAll = true;
            else
                instance.isCheckAll = false;
        }

        /**
         *
         */
        function addCollection() {
            instance.violations.push({id: 4, description: "some data4", checked: false});
        }

        /**
         *
         */
        function updateCollection () {
            this.violations[0].checked = true;
        }

        /**
         * 
         * @param violations
         */
        function checkAll(violations) {
            angular.forEach(violations, function (violation) {
                violation.checked = instance.isCheckAll;
            });
        }
    }
})();