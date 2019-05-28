const angular = require('angular');
import '../../assets/style.css';
import components from './app/components';
import core from './app/core'


export default angular.module('app', [core.name, components.name]);