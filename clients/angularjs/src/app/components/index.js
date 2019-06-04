const angular = require('angular');
import boards from './boards';
import home from './home';

var components = angular.module('app.components', [boards.name, home.name])


export default components