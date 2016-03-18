describe('Controller: TestController', function () {

    var TestController, vm, scope;

    beforeEach(module('MyApp'));

    beforeEach(inject(function ($controller) {
        //scope = $rootScope.$new();
        TestController = $controller('TestController', {
            //this: scope
        });
    }));

    it('vm should be defined', function () {
        expect(TestController.test).toBeDefined();
    });
    it('vm should have test data', function() {
        expect(TestController.test).toBe('test');
    });

    it('obj should exist', function() {
        expect(TestController.obj).toBeDefined();
    });
    it('obj.one should equal 1', function() {
        expect(TestController.obj.one).toBe(1);
    });
});
