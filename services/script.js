var app = angular.module('app', [])
    .controller('Controller', function (modalSvc) {
        var vm = this;
        vm.msg = 'Template app';
        var mod = new modalSvc();

        vm.click = function (event) {
            var modal = mod.showModal({
                templateUrl: './template.html'
            });
            console.log(mod);
        }
    });

app.factory('modalSvc', function ($q, $http, $compile, $rootScope) {
    return function () {

        function createModal(option) {
            loadTemplate(option.templateUrl).then(function (tmpl) {
                console.log(tmpl);
                var template = $compile(tmpl.data);
                var scope = $rootScope.$new();
                scope.helloWorld = "HELLO WORLD";
                var el = template(scope);
                var body = document.querySelector('.container-fluid');
                body.appendChild(el[0]);
                console.log(el[0]);
            });

            return {
                show: function () {

                }
            }
        }

        function loadTemplate(templateUrl) {
            var defer = $q.defer();
            var template;
            $http.get(templateUrl).then(function (res) {
                template = res;
                defer.resolve(template);
            });
            return defer.promise;
        }

        function resolveDependencies() {

        }

        return {
            showModal: function (option) {
                var modal = createModal(option);
                modal.show();
            }
        }

    }
});


app.directive('myClass', function () {
    return {
        compile: function (element) {
            element.addClass('colorful');
        }
    }
})