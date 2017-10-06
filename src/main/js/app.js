
import {TestController} from './TestController.js' 
// document ready event
angular.element(document).ready( function() {

	angular.module('test',['card'])
	.controller('TestController', TestController);
	// bootstrap document with myApp module
	angular.bootstrap(document, ["test"])


})
