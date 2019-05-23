import BoardsModel from './models/boards.model';

const core = angular.module('app.core', []);

core.constant('ENDPOINT_URI', 'http://localhost:3000/')
core.service('BoardsModel', BoardsModel)

export default core