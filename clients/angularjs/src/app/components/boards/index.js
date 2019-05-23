const angular = require('angular');
import BoardsComponent from './boards.component';
import core from '../../core'

export default angular.module('app.boards', [core.name])
    .component('boardsComponent', BoardsComponent);