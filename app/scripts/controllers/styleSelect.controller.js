angular.module("umbraco").controller("SRH.styleSelect", function ($scope) {
    $scope.model.prevalues = [
        { name: "Plain", value: "" },
        { name: "Plain with Gray Background", value: "plain-grey-bg"},
        { name: "Umbraco Purple", value:"panel-umbraco-purple" },
        { name: "Success (Green)", value: "panel-success" },
        { name: "Warning (Yellow)", value: "panel-warning" },
        { name: "Danger (Red)", value: "panel-danger" },
        { name: "Umbraco Purple Gradient", value: "panel-default-gradient" },
        { name: "Success Gradient (Green gradient)", value: "panel-success-gradient" },
        { name: "Warning Gradient (Yellow gradient)", value: "panel-warning-gradient" },
        { name: "Danger Gradient (Red gradient)", value: "panel-danger-gradient" }
    ];
});