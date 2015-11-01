var App = angular.module('App', [
'ngRoute',
'controllers',
'services'    
]);

App.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/read.html',
        controller: 'ReadCtrl'
    })
    .when('/menu-top', {
        templateUrl: 'views/menu-top.html',
        controller: 'MenuCtrl'
    })
    .when('/message/:id', {
        templateUrl: 'views/messages.html',
        controller: 'MessagesCtrl'
    })
    
    .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl'
    })

    .when('/edit/:id', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
    })
    .when('/viagens', {
        templateUrl: 'views/read-viagem.html',
        controller: 'ReadCtrlTravel'
    })
});

App.value('API', 'http://localhost:3000/');