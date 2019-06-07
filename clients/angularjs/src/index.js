import angular from 'angular';
import '../../assets/style.css';
import {
    appDirective
} from './app.directive';
import boards from "./app/components/boards"
import uiRouter from 'angular-ui-router';
import core from './app/core'

console.log(boards)

angular.module('app', [uiRouter, core.name, boards.name])
    .config(function ($stateProvider) {
        $stateProvider.state('boards', {
            url: '/boards',
            template: '<boards></boards>',
        })
    })
    .directive('app', appDirective)