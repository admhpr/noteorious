import angular from "angular"
import {
    boardsComponent
} from './boards.component';
import core from '../../core'

export default angular.module('boards', [core.name])
    .component('boards', boardsComponent)