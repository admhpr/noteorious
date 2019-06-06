import template from './boards.tmpl.html';
import {
    BoardsController as controller
} from './boards.controller';

export const boardsDirective = () => {
    return {
        template,
        controller,
        controllerAs: 'vm',
        scope: {},
        restrict: 'E',
        replace: true
    };
};