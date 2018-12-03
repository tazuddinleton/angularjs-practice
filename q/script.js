angular.module('app', [])
.controller('Controller',function($q){
    var vm = this;
    vm.msg = 'A promise to greet';
    

    function Greeting(){
        this.requestStatus = 0;
        this.successMsg = null;
        this.errorMsg = null;
        this.setSuccessMsg = function(msg){
            this.successMsg = msg;
            this.errorMsg = null;
        }
        this.setErrorMsg = function(msg){
            this.errorMsg = msg;
            this.successMsg = null;
        }
        this.setRequestStatus = function(status){
            this.requestStatus = status;
        }
        this.isRequesting = function(){
            return this.requestStatus == 1;
        }
    }

    vm.greeting = new Greeting();

    vm.promiseExample = function(name){    
        vm.greeting.setRequestStatus(1);
        let time = 1000;
        var promiseToGreet = greetEventually(name, time);
        promiseToGreet.then(function(success){            
            vm.greeting.setSuccessMsg(success);            
            vm.greeting.setRequestStatus(0);
        }, 
        function(err){
           vm.greeting.setErrorMsg(err);
           vm.greeting.setRequestStatus(0);
        });
    }

    function greetEventually(name, time){
        return $q(function(resolve, reject){            
            setTimeout(() => {
                if(name){
                    resolve('Arikato, Mr. ' + name + ' !');
                }else{
                    reject('No name found!');
                }
            }, time || 1000);
        });
    }

});