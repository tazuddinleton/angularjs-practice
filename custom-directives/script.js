

const app = angular.module('app', [])
    .controller('Controller', function () {
        var vm = this;
        vm.msg = 'Custom directives';
        vm.capital = "Tasdasdf"
        vm.capClick = function () {
            vm.capital += 'd';
            console.log(vm.capital);
        }
    });