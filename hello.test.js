/** @format */

const hello = require('./hello');
describe('My hello', () => {
	test('works', () => {
		expect(hello.hello()).toEqual('HELLO WORLD');
	});
});
