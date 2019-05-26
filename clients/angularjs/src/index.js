const angular = require('angular');

import components from './app/components';
import core from './app/core'


export default angular.module('app', [core.name, components.name]);