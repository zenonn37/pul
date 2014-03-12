'use strict';

angular.module('eventsApp',['ngSanitize','ui.router'])

    .config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){

                  $urlRouterProvider.otherwise('/');



                               $stateProvider

                                   .state('events',{

                                       url:'/',
                                       templateUrl:'views/eventsDetails.html',
                                       controller:'EventController'

                                   })

                                   .state('newevent',{

                                       url:'/newevent',
                                       templateUrl:'views/newEvent.html',
                                       controller:'EditEventController'

                                   })



    }]);
