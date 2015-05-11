application.controller("checkbox", function($scope) {
    $scope.violations = [
        { id: 1, description: "some data1", checked: false },
        { id: 2, description: "some data2", checked: false },
        { id: 3, description: "some data3", checked: false }
    ];
    $scope.isCheckAll = false;
    console.log($scope.violations);

    /*$scope.$watch("violations", function(newValue){
        var checkCount = 0;
        angular.forEach(newValue, function(violation){
            if (violation.checked)
                checkCount++;
        })
        if (checkCount == newValue.length)
            $scope.isCheckAll = true;
        else
            $scope.isCheckAll = false;
    }, true);*/
    $scope.addCheck = function(violations) {
        var checkCount = 0;
        angular.forEach(violations, function(violation){
            if (violation.checked)
                checkCount++;
        })
        if (checkCount == violations.length)
            $scope.isCheckAll = true;
        else
            $scope.isCheckAll = false;
    }

    $scope.addCollection = function() {
        $scope.violations.push({ id: 4, description: "some data4", checked: false });
    }

    $scope.updateCollection = function() {
        $scope.violations[0].checked = true;
    }

    $scope.checkAll = function(violations) {
        angular.forEach(violations, function(violation){
           violation.checked = $scope.isCheckAll;
        });
    }
});