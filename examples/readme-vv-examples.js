const vv = require('../vv');

vv(function *() {
	// wait examples
	vv(110, 'wait1-1', (err, val) => console.log(val));
	vv(120, 'wait1-2')((err, val) =>  console.log(val));
	vv(130, 'wait1-3').then((val) =>  console.log(val));
	vv.wait(140, 'wait2-1', (err, val) =>  console.log(val));
	vv.wait(150, 'wait2-2')((err, val) =>  console.log(val));
	vv.wait(160, 'wait2-3').then((val) =>  console.log(val));

	yield vv(1000, 'promise1');
	// vv(generator or generator function)
	// returns Promise
	// use generator * and yield like async await
	vv(function *() {
		yield vv(100, 'promise1-1');
		console.log('promise1-1');
		yield vv(100, 'promise1-2');
		console.log('promise1-2');
		yield [vv(200, 'promise1-x'),
			vv(300, 'promise1-y'),
			vv(100, 'promise1-z')];
		console.log('promise1-3');
		yield {a:vv(200, 'promise1-a'),
			b:vv(300, 'promise1-b'),
			c:vv(100, 'promise1-c')};
		console.log('promise1-4');
	}).then(
		val => console.log('promise1-9', val),
		err => console.error(err));

	yield vv(1000, 'thunk1');
	// vv(generator or generator function)
	// returns Thunk
	// use generator * and yield like async await
	vv(function *() {
		yield vv(100, 'thunk1-1');
		console.log('thunk1-1');
		yield vv(100, 'thunk1-2');
		console.log('thunk1-2');
		yield [vv(200, 'thunk1-x'),
			vv(300, 'thunk1-y'),
			vv(100, 'thunk1-z')];
		console.log('thunk1-3');
		yield {a:vv(200, 'thunk1-a'),
			b:vv(300, 'thunk1-b'),
			c:vv(100, 'thunk1-c')};
		console.log('thunk1-4');
	})((err, val) => err ?
		console.error(err) :
		console.log('thunk1-9', val));

	yield vv(1000, 'array1');
	// vv(Array)
	// like Promise.all
	vv([vv(200, 'array1-1'),
		vv(300, 'array1-2'),
		vv(100, 'array1-3')]).then(
			val => console.log('array1-9', val),
			err => console.error(err));

	yield vv(1000, 'object1');
	// vv(Object)
	// like Promise.all
	vv({a: vv(200, 'object1-1'),
		b: vv(300, 'object1-2'),
		c: vv(100, 'object1-3')}).then(
			val => console.log('object1-9', val),
			err => console.error(err));
})();
