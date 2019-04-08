var app =
angular.module('app', [])
.controller('Controller',function(){
    var vm = this;
    vm.msg = 'Template app';

    vm.languages = [
        {
            name: 'Javascript',
            completeness:  8        
        },
        {
            name: 'HTML',
            completeness:  3        
        },
        {
            name: 'CSS',
            completeness:  10        
        },
        {
            name: 'C++',
            completeness:  6        
        },
        
    ]
});

app.factory('skillFilter', function(){
    return function(input){
        var cmp = parseInt(input);
     
        var result = '';
        for(var i = 0; i < cmp; i++){
            result += '*';
        }

        return result;
    }
})