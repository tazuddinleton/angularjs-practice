angular.module('anchorScroll', [])
.controller('ScrollController',function($scope, $location, $anchorScroll){
$scope.gotoBottom = function(){
    

    $location.hash('bottom');
    $anchorScroll();
    console.log('clicked', $location.hash());
}

$scope.gotoTop = function(){
    

    $location.hash('top');
    $anchorScroll();
    console.log('clicked', $location.hash());
}
});