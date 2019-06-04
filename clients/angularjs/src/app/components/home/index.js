const angular = require('angular');
import HomeComponent from './home.component';
import core from '../../core'

export default angular.module('app.home', [core.name])
    .component('homeComponent', HomeComponent);