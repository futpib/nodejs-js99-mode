
import test from 'ava';

import {parse} from '../';

test(t => {
	t.snapshot(parse('export default 42'));
});
