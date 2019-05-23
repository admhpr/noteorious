const angular = require('angular');
import BoardsModel from './models/boards.model';
import {
    ENDPOINT_URI
} from './const';

const core = angular.module('app.core', [])
    .constant('ENDPOINT_URI', ENDPOINT_URI)
    .service('BoardsModel', BoardsModel)

export default core