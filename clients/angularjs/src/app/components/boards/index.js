import angular from "angular"
import {
    boardsDirective
} from './boards.directive';
import core from '../../core'

export default angular.module('boards', [core.name])
    .config(function ($stateProvider) {
        $stateProvider.state('blog', {
            url: '/blog',
            template: '<blog></blog>',
        })
    })
    .directive('boards', boardsDirective)