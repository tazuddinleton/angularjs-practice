app.directive('gridScreen', function($http){
    return {
        restrict: "E",
        controller: function($scope){            
            this.setColumns = function(cols){
                $scope.columns = cols;
            }
        },
        link: function(scope, element, attrs){            
            $http.get(attrs.resource).then(function(res){
                scope.rows = res.data.data;
                scope.$broadcast('data-loaded', scope.rows, scope.columns);                
            });            
        }
    }
});
app.directive('gridColumns', function(){
    return {
        restrict: "E",
        require: ['^gridScreen', 'gridColumns'],
        controller: function($scope){
            var columns = [];
            this.addColumn = function(col){
                columns.push(col);
            };
            this.getColumns = function(){
                return columns;
            }        
        },
        link: function(scope, element, attrs, controllers){
            var gridScreen = controllers[0];
            var gridColumns = controllers[1];
            gridScreen.setColumns(gridColumns.getColumns());
            
        }

    }
});
app.directive('gridColumn', function(){
    return {
        restrict: "E",
        require: '^gridColumns',
        link: function(scope, element, attrs, gridColumns){
            gridColumns.addColumn({
                title: attrs.title,
                field: attrs.description
            });            
        }
    }
});
app.directive('grid', function(){
    return {
        restrict: "E",
        templateUrl: './templates/as_table.html',
        replace: true,
        link: function(scope, element, attrs){            
            scope.$on('data-loaded', function(event, rows, columns){                
                scope.rows = rows;
                scope.columns = columns;
            });
        }
    }
});
app.directive('withInlineEditor', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            
        }
    }
});