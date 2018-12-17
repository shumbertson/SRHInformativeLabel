angular.module("umbraco").controller("SRH.informativeLabelController", function ($scope) {
    $scope.title = $scope.model.config.title;
    $scope.body = $scope.model.config.body;
    $scope.styleOptions = $scope.model.config.styleOptions;
    $scope.centerTitle = "";
    $scope.selectedIcon = $scope.model.config.selectedIcon;

    //console.log($scope.model.config.centerTitle);

    if ($scope.model.config.centerTitle) {
        $scope.centerTitle = "center-text";
    }
});