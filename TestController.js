/**
 * Created by User on 3/9/2016.
 */
(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("TestController", ['$scope', TestController]);

    function TestController($scope) {


        $scope.test = 'test';
    }
})();
