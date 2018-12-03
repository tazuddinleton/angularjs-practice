let myApp = angular.module('app', [])
.controller('Controller',function(clientId, apiToken, unicornLauncher){
    var vm = this;
    vm.msg = 'Provider & the grand design';

    vm.clientId = clientId;
    vm.token = apiToken;



vm.launchUnicorn = function(){
    unicornLauncher.launch();
    vm.numberOfLaunch = unicornLauncher.numberOfLaunch;
}

});


myApp.value('clientId', 'abc123jkl345')
.factory('apiToken', function(clientId){
    let secrete = 'very secrete key';    
    function encrypt(clientId, secrete){
        return (clientId + ' : ' + secrete).toUpperCase();
    }
    return encrypt(clientId, secrete);
})
.service('unicornLauncher', UnicornLauncher);

function UnicornLauncher(apiToken){
    this.numberOfLaunch = 0;
    this.launch = function(){
        // launch
        this.numberOfLaunch+=1;
    }    
}