/**
 * Created by User on 3/9/2016.
 */
(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("TestController", [TestController]);

    function TestController() {
        var vm = this;
        var obj = {
            'one': 1,
            'two': 2,
            'three': 3
        };

        vm.test = 'test';
        vm.obj = obj;
    }
})();
