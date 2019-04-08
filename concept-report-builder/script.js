var appModule = angular.module('app', [])
    .controller('Controller', function () {
        var vm = this;

        vm.msg = 'Template app';
        vm.addTile = function () {
            vm.report.cols.push({
                sl: 0
            })
        }
        vm.report = {
            cols: [
                { sl: 5, name: 'col 1' },
                { sl: 3, name: 'col 2' },
                { sl: 2, name: 'col 3' },
                { sl: 1, name: 'col 4' },
            ]
        }
    });


appModule.directive('reportEditor', function () {

    return {
        restrict: 'E',
        controller: function ($scope) {
            console.log($scope);
        },
        link: function (scope, elem, attr) {
            console.log('reportEditor', scope);

        },
        templateUrl: '/templates/editor.html',
        scope: {
            report: '=reportData'
        }
    }
});
