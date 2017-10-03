import {BaseController} from '../../main/js/BaseController';

import {TestController} from '../../main/js/TestController';
	

describe('Unit test for TestController.\n', function(){
	let controller = new TestController();

	it('Controller should be defined.', function(){
		expect(controller).toBeDefined();
	});

	it('addName method should increase the names field size by one.\n', function(){
		controller.addName('test');
		expect(controller.names.length).toEqual(1);
	});
});