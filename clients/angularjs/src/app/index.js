import components from './components';
import core from './core'

console.log(core);
console.log(components);
const app = angular.module('app', ['app.core', 'app.components']);

export default app