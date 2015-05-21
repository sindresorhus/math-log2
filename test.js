'use strict';
var test = require('ava');
var numberIsNan = require('number-is-nan');
var positiveZero = require('positive-zero');
Math.mathLog2 = undefined;
var mathLog2 = require('./');

function epsilon(a, b, E) {
	return Math.abs(a - b) <= (E ? E : 1e-11);
};

test(function (t) {
	t.assert(numberIsNan(mathLog2(NaN)));
	t.assert(numberIsNan(mathLog2(-1e-50)));
	t.assert(positiveZero(mathLog2(1)));
	t.assert(mathLog2(Infinity) === Infinity);
	t.assert(mathLog2(0) === -Infinity);
	t.assert(mathLog2(-0) === -Infinity);
	t.assert(mathLog2(0.5) === -1);
	t.assert(mathLog2(32) === 5);
	t.assert(epsilon(mathLog2(5), 2.321928094887362));
	t.end();
});