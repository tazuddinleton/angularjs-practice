const myModule = angular.module('app', [])
    //[dependency annothation]
    // 1. Inline Array Annotation
    .controller('Controller', ['$rootScope', 'myService', 'serviceId',
        function ($rootScope, myService, serviceId) {
            var vm = this;
            vm.msg = 'Dependency Injection Example'

            $rootScope.sayHello = 'Hello';
            console.log('myService', myService);
            console.log('serviceId', serviceId);
        }]);

//[dependency annothation]
// 2. $inject Property Annotation
var MyController = function ($scope, $rootScope) {

}
MyController.$inject = ['$scope', '$rootScope'];
myModule.controller(MyController);

myModule.controller('NotSoStrictController', function ($rootScope) {

});

myModule.factory('serviceId', function () {
    var service = {};
    service.action = 'sercie action';
    return service;
});

myModule.service('myService', function () {
    return new MyService();
});

var MyService = function () {
    this.action = 'hello ';
}

// window.name = 'NG_DEFER_BOOTSTRAP!';
angular.element(function () {
    angular.bootstrap(document, ['app'], {
        strictDi: true
    });
});


