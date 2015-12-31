import test from 'ava';
import numberIsNan from 'number-is-nan';
import positiveZero from 'positive-zero';
import floatEqual from 'float-equal';

Math.fn = undefined;
const fn = require('./');

test(t => {
	t.true(numberIsNan(fn(NaN)));
	t.true(numberIsNan(fn(-1e-50)));
	t.true(positiveZero(fn(1)));
	t.is(fn(Infinity), Infinity);
	t.is(fn(0), -Infinity);
	t.is(fn(-0), -Infinity);
	t.is(fn(0.5), -1);
	t.is(fn(32), 5);
	t.true(floatEqual(fn(5), 2.321928094887362));
});
