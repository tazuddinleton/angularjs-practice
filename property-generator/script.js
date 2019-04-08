angular.module('app', [])
    .controller('Controller', function () {
        var vm = this;
        vm.msg = 'Template app';
        vm.count = 0;
        vm.output = '';
        vm.generateProperty = function () {


            var arr = vm.raw_data.split(';\n');

            var outPut = [];
            arr.forEach(element => {
                element = element.replace('private', 'public');
                element = element.replace('_', '');
                element = element.replace(';', '');

                outPut.push(element.trim().split(' '));
            });


            outPut.forEach(item => {
                console.log(item[2]);
                if (item[2] === undefined) {
                    return;
                }
                var ch = item[2].charAt(0).toUpperCase();
                var str = ch += item[2].substr(1, item[2].length);
                item[3] = str
                item.prop = item[0] + ' ' + item[1] + ' ' + item[3] +
                    '\n' + '{' + '\n' + 'get => _' + item[2] + ';'
                    + '\n' + 'set => _' + item[2] + ' = value;'
                    + '\n' + '}';
                vm.output += item.prop + '\n';
            });
            console.log(vm.output);
        }
        vm.copyToClipboard = function () {
            var txt = document.getElementById('output');

        }
    });