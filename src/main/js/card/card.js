import {CardController} from './CardController.js';
import {CardFactory} from './CardFactory.js';

angular.module('card',[])
 .controller('CardController', CardController)
 .factory('cards', CardFactory);
