var pTag = document.getElementById('message')
var app = angular.module('myapp', []);
app.filter('isPrime', function () {
    return function (input) {
        if (input === undefined || input === null) {
            pTag.style.display = "none"
            return '';
        }
        if (input <= 1) {
            pTag.style.display = "unset"
            return "Not a prime number";
        }
        for (var i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                pTag.style.display = "unset"
                return "Not a prime number";
            }
        }
        return "Prime number";
    };
});
