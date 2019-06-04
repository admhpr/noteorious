const angular = require('angular');
import '../../assets/style.css';
import components from './app/components';
import uiRouter from 'angular-ui-router';
import core from './app/core'


export default angular.module('app', [uiRouter, core.name, components.name]);