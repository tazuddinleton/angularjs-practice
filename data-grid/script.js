var appModule = angular.module('app', [])
    .controller('Controller', function () {
        var vm = this;

        vm.msg = 'Template app';
        vm.report = {
            cols: [
                { sl: 1, name: 'col 1' },
                { sl: 2, name: 'col 2' },
                { sl: 3, name: 'col 3' },
                { sl: 4, name: 'col 4' },
            ]
        }
    });


appModule.directive('gridScreen', function () {
    return {
        restrict: 'E',
        link: function (scope, elem, attr) {
            console.log('linked gridScreen');
        }
    }
});
appModule.directive('gridColumns', function () {
    return {
        restrict: 'E',
        link: function (scope, elem, attr) {
            console.log('linked gridColumns');
        }
    }
});
appModule.directive('gridColumn', function () {
    return {
        restrict: 'E',
        link: function (scope, elem, attr) {
            console.log('linked gridColumns');
        }
    }
});
appModule.directive('grid', function () {
    return {
        restrict: 'E'
    }
});
appModule.directive('withInlineEditor', function () { });