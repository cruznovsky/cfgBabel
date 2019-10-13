'use strict';

// Zadanie 1

var hello = 'Hello';
var world = 'World';

console.log(hello + ' ' + world);

// Zadanie 2

var multiply = function multiply() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return a * b;
};

console.log(multiply(34));

// Zadanie 3

var average = function average() {
    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
    }

    var sum = 0;
    var numLength = numbers.length;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var num = _step.value;

            sum += num;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return sum / numLength;
};

console.log(average(2, 4, 5, 6, 4, 3));

// Zadanie 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

// Zadanie 5

var table = [1, 4, 'Iwona', false, 'Nowak'];

var num1 = table[0],
    num2 = table[1],
    firstName = table[2],
    x = table[3],
    lastName = table[4];


console.log(firstName);
console.log(lastName);
