const angular = require('angular');
import components from './components';
import core from './core'

const app = angular.module('app', [core.name, components.name]);

export default app