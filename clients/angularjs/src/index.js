import angular from 'angular';
import '../../assets/style.css';
import {
    appDirective
} from './app.directive';
import components from './app/components';
import uiRouter from 'angular-ui-router';
import core from './app/core'


angular.module('app', [uiRouter, core.name, components.name])
    .directive('app', appDirective)