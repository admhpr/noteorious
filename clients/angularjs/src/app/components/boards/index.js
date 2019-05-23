const angular = require('angular');
import BoardsComponent from './boards.component';
import core from '../../core'

const boards = angular.module('app.boards', [core.name])
    .component('boardsComponent', BoardsComponent);

export default boards;