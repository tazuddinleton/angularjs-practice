app.directive('capitalize', function ($parse) {
    var ddo = {
        restrict: 'A',
        require: '^ngModel',
        link: linkFn
    };

    function linkFn(scope, element, attrs, ctrl, transcludeFn) {
        var viewValue = $parse(attrs.ngModel)(scope);
        setUpperCase(viewValue);
        ctrl.$parsers.push(setUpperCase);
        ctrl.$formatters.push(setUpperCase);

        function setUpperCase(value) {
            value = value.toUpperCase();
            ctrl.$setViewValue(value);
            ctrl.$render();
            return value;
        }
    }

    return ddo;

});

app.directive('code', function () {
    return {
        link: function (scope, element, attrs) {
            addPre(element[0].children);
        }
    }
    function addPre(nodes) {
        if (typeof nodes === 'undefined' || nodes.length == 0) {
            return nodes;
        }
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            var html = node.outerHTML;
            html = html.replace(new RegExp('<', 'g'), '&lt;');
            html = html.replace(new RegExp('>', 'g'), '&gt;');
            html = "<pre>" + html + "</pre>";
            node.outerHTML = html;
            console.log(node);
        }
        return addPre(nodes.children);
    }
})