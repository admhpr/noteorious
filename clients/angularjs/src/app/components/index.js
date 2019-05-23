const angular = require('angular');
import boards from './boards';

var components = angular.module('app.components', [boards.name])


export default components