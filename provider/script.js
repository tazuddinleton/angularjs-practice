let myApp = angular.module('app', [])
.controller('Controller',function(clientId, apiToken, unicornLauncher, $log){
    var vm = this;
    vm.$log = $log;

    vm.msg = 'Provider & the grand design';

    vm.clientId = clientId;
    vm.token = apiToken;




vm.launchUnicorn = function(){    
    unicornLauncher.launch();
    vm.numberOfLaunch = unicornLauncher.numberOfLaunch;
    vm.$log.log('unicorn has been launched.');
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
// .service('unicornLauncher', UnicornLauncher)
;


myApp.provider('unicornLauncher', function(){
    var useTinfoilShielding = false;
    var planetName = 'Earth';

    this.useTinfoilShielding = function(value){
        useTinfoilShielding = !!value;
    }
    this.launchFrom = function(from){        
        planetName = from;
    }

    this.$get = function(apiToken){        
        let obj = new UnicornLauncher(apiToken, useTinfoilShielding, planetName);       
        return obj;
    }
});

function UnicornLauncher(apiToken, useTinfoilShielding, planetName){    
    this.numberOfLaunch = 0;  
    this.launch = function(){
        if(useTinfoilShielding){
            console.log('with tinfoil shielding');
        }        
        console.log('launching from : ', planetName);        
        // launch
        this.numberOfLaunch+=1;
    }    
}

myApp.config(function(unicornLauncherProvider, planetName){    
    unicornLauncherProvider.useTinfoilShielding(true);
    unicornLauncherProvider.launchFrom(planetName);
});

myApp.constant('planetName', 'Cremetoria');

myApp.directive('planet', function(planetName){    
    return {
        restrict: 'E',
        scope: {},
        link: function($scope, $element){
            $element.text('Planet Name : '+ planetName);
        }
    }
});

// using decorator to decorate objects

myApp.config(['$provide', function($provide){
    $provide.decorator('$log', ['$delegate', function $logDecorator($delegate){
        console.log($delegate);
        $delegate.log = function(msg){
            console.log('MY LOGGER: '+msg);
        }
        return $delegate;
    }]);
    
}]);





