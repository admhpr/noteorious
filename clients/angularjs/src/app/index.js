const angular = require('angular');

import components from './components';
import core from './core'


export default angular.module('app', [core.name, components.name]);