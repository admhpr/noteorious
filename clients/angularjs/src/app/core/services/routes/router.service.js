import routes from '../../config/routes';

export default function routerSetup($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';

    $locationProvider.html5Mode(true); // setting html5 mode to remove !# from url
    $urlRouterProvider.otherwise('/'); // setting default route
    $stateProvider.state('app', {
        abstract: true
    })
    routes.forEach((route) => {
        console.log(route)
        $stateProvider.state(route);
    });
}