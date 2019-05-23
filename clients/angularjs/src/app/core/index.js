import BoardsModel from './models/boards.model';

const core = angular.module('app.core', [])
    .service('BoardsModel', BoardsModel)

export default core