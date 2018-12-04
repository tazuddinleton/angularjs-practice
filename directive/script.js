const appModule = angular.module('app', [])
    .controller('Controller', function () {
        var vm = this;
        vm.msg = 'Directive example';
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