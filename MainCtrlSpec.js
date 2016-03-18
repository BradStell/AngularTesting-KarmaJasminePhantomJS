describe('Controller: TestController', function () {

    var TestController, vm, scope;

    beforeEach(module('MyApp'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        TestController = $controller('TestController', {
            $scope: scope
        });
    }));

    it('vm should be defined', function () {
        expect(scope.test).toBeDefined();
    });
    it('vm should have test data', function() {
        expect(scope.test).toBe('test');
    });
});
