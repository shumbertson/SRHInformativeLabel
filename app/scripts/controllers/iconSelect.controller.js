angular.module("umbraco").controller("SRH.iconSelector", function ($scope) {
    $scope.model.prevalues = [
        { name: "None (Default)", value: ""},
        { name: "Info", value: "icon-info" },
        { name: "Stop", value: "icon-stop-alt" },
        { name: "Caution", value: "icon-alert" },
        { name: "Check", value: "icon-check" },
        { name: "Help", value: "icon-help" },
        { name: "Blueprint", value: "icon-blueprint"}
    ];
});