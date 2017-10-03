import {BaseController} from './BaseController.js';

/**
 * 
 */
export class TestController extends BaseController{
	
	constructor(){
		super();

		this.title = "Test Controller";
		this.names = new Array();
	}

	addName(){
		console.log(this.title);
		this.names.push(this.title);
	}
	
}