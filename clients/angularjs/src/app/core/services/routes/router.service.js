import routes from './config';

export default function routerSetup($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';

    $locationProvider.html5Mode(true); // setting html5 mode to remove !# from url
    $urlRouterProvider.otherwise('/'); // setting default route

    routes.forEach((route) => {
        $stateProvider.state(route);
    });
}