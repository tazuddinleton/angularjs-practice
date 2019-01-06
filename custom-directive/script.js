const app = angular.module('app', [])
.controller('Controller',function(){
    var vm = this;
    vm.msg = 'Template app';

    vm.model = {
        itemId: 1,
        typeID: 10,
        customerID: 20,
        customer: {
            id: 20,
            name: 'KYC'
        },
        someTitle: "hello World"
    };

    vm.list = [
        {id: 1, name: 'one'},
        {id: 2, name: 'two'}
    ];

    vm.onItemSelected = function(){
        
        console.log('on change');
    }


});


app.directive('bindItemTo', ['$parse',function($parse){    
    return {
        restrict: 'A',
        require: '^ngModel',
        scope: {
            item: '=bindItemTo',
            test: '&',
            attrValue: '@value',
            oneWay: '<oneWay'
        },
        link: function(scope, element, attr, ctrl){
            
        }
    }

}]);

app.directive('cap', function($parse){
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attr, ngModel){
            

            var model = $parse(attr.ngModel);
            console.log(model(scope));
            
        }
    }
});
