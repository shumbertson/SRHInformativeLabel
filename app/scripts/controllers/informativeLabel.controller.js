angular.module("umbraco").controller("SRH.informativeLabelController", ["$scope", "$sce", function ($scope, $sce) {
    $scope.title = $scope.model.config.title;
    $scope.body = $sce.trustAsHtml($scope.model.config.body);
    $scope.styleOptions = $scope.model.config.styleOptions;
    $scope.centerTitle = "";
    $scope.selectedIcon = $scope.model.config.selectedIcon;

    if ($scope.model.config.centerTitle == true) {
        $scope.centerTitle = "center-text";
    }
}]);
