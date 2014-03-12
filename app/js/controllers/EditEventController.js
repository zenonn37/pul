/**
 * Created by pure coder on 3/12/14.
 */

angular.module('eventsApp')
    .controller('EditEventController',['$scope','$location',function($scope,$location){

        $scope.saveEvent = function(event,newEventForm){
               console.log(newEventForm);
              if(newEventForm.$valid){
                  window.alert('event ' + event.name + ' saved');
              }


        };

        $scope.cancelEdit = function(){

            $location.path('/');


        };




    }]);
