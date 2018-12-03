angular.module('animationExample', [])
.controller('AnimeCtrl',function($scope, $location, $anchorScroll){
    $scope.msg = 'Template App';
    
    $scope.itemList = [
        'Porsche',
        'BMW',
        'Gallardo',
        'Lamborghini'
    ];

    $scope.add = function(name){
        $scope.itemList.push(name);
        $scope.name = "";
    }

    $scope.remove = function(name){
        with($scope){
            itemList.splice(itemList.indexOf(name), 1);
        }
    }
});