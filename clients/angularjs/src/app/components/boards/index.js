import BoardsComponent from './boards.component';

const BoardsModule = angular.module('app.boards', []);

// loading components, services, directives, specific to this module.
BoardsModule.component('boards', BoardsComponent);

export default BoardsModule;