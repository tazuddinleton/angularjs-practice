const appModule = angular.module('app', [])
    .controller('Controller', function ($scope) {
        vm = this;
        vm.msg = 'Directive example';

        vm.customers = [
            {
                name: 'Customer 1',
                address: 'Address'
            },
            {
                name: 'Customer 2',
                address: 'Address 2'
            }
        ];

        vm.test = 'test';
        $scope.$watch('vm.test', function (newVal, oldVal) {
            console.log(newVal, oldVal);
        });

        vm.showDialog = function () {
            vm.hideDialogbox = false;
        }
        vm.hideDialog = function () {
            vm.hideDialogbox = true;
        }

        vm.counter = "1";
        vm.showCounter = function(){
            console.log(vm.counter);
        }
        console.log(vm);
        vm.helloWorld = function(){
            console.log($scope.$parent.helloWorld());
        }

        vm.checkDirty = function(){
            console.log('VM NOW : ', vm);
            vm.formDirty();            
        }

        vm.$onChanges = function(obj){
            console.log('changed', obj);
        }
    });


appModule.directive('draggable', function ($document) {
    return function (scope, element, attr) {
        var startX = 0, startY = 0, x = 0, y = 0;
        element.css({
            position: 'relative',
            border: '1px solid red',
            background: 'lightblue',
            cursor: 'pointer',
            display: 'block',
            width: '65px'
        });

        element.on('mousedown', function (event) {
            event.preventDefault();
            startX = event.screenX - x;
            startY = event.screenY - y;
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
        });

        function mousemove(event) {
            y = event.screenY - startY;
            x = event.screenX - startX;

            element.css({
                top: y + 'px',
                left: x + 'px'
            });
        }

        function mouseup(event) {
            $document.off('mousemove', mousemove);
            $document.off('mouseup', mouseup);
        }
    };
});

appModule.directive('myCustomer', function () {
    return {
        restrict: 'E',
        templateUrl: 'customer.tmpl.html',
        scope: {
            customer: '='
        }
    };
});

appModule.directive('timeWatch', function ($interval, dateFilter) {
    return {
        link: link
    }

    function link(scope, element, attrs) {
        var format, timeoutId;

        scope.$watch(attrs.timeFormat, function (value) {
            format = value;
            console.log(value);
            updateTime();

        });

        function updateTime() {
            element.text(dateFilter(new Date(), format));
            element.css({
                background: 'lightgray',
                border: '1px solid #999',
                padding: '3px',
                color: 'teal'
            })
        }

        timeoutId = $interval(function () {
            updateTime();
        }, 1000);

        element.on('$destory', function () {
            $interval.cancel(timeoutId);
        });
    }
});

appModule.directive('myDialogbox', function () {
    return {
        restrict: 'E',
        scope: {
            title: '@',
            closeDialog: '&onClose'
        },
        transclude: true,
        templateUrl: 'dialogbox.tmpl.html',
        link: function (scope) {
            scope.msg = 'Hello from dialog';
            console.log(scope);
        }
    }
});

appModule.directive('dirtyCheck', function(){
    return {
        require: '^form',
        link: function(scope, element, attr, ctrl){
            console.log(ctrl, 'login form ctrl');
        }
    }
});

appModule.directive('counter', function(){
    return {
        require: '^ngModel', 
        restrict: 'A',        
        
        link: function(scope, element, attr, ngModel){
            setInterval(function(){
                var x = parseInt(ngModel.$viewValue);
                x += 1;
                ngModel.$setViewValue(x);
                ngModel.$render();
                console.log('eval: ',scope.$eval(attr.counter));
            }, parseInt(attr.counter)*1000)
        }
    }
});


appModule.directive('myForm', function(){
    return {
        require: '^form',
        restrict: 'A',
        link: function(vm, attr, element, ctrl){
            console.log(vm, attr, element, ctrl);
            vm.formDirty = function(){
                console.log('form dirty checking...');
            }
        }
    }
})

appModule.run(function($rootScope){
    $rootScope.helloWorld = function(){
       console.log('Hello World');
    }
});