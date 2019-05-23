const angular = require('angular');
import BoardsComponent from './boards.component';
import BoardsModel from '../../core/models/boards.model';

const boards = angular.module('app.boards', []);

// loading components, services, directives, specific to this module.
boards.service('BoardsModel', BoardsModel)
boards.component('boardsComponent', BoardsComponent);

export default boards;