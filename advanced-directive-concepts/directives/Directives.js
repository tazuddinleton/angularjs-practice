
function createDirectives(name){    
    return function(){        
        return {            
            restrict: 'E',
            controller: function(){console.log(name + ' controller')},
            compile: function(tElement, tAttrs, transcludeFn){
                console.log(name + ' compile', tElement.html());
                return {
                    pre: function(scope, iElement, iAttrs){
                        console.log(name + ' pre link', iElement.html());
                    },
                    post: function(scope, iElement, iAttrs){
                        console.log(name + ' post link', iElement.html());
                    }
                }
            }
        }
    }
}


app.directive('levelOne', createDirectives('levelOne'));
app.directive('levelTwo', createDirectives('levelTwo'));
app.directive('levelThree', createDirectives('levelThree'));

app.directive('eventHandler', function(){
    return {
        restrict: 'A',
        compile: function(tElem, tAttrs){
            return function eventHandler(scope, iElem, iAttrs){
                
            }
        }
    }
})