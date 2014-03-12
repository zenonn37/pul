/**
 * Created by pure coder on 3/12/14.
 */
'use strict';


angular.module('eventsApp')
    .filter('durations',[function(){
       return function(duration){

           switch (duration){

               case 1:
                   return "Half Hour";
                   break;
               case 2:
                   return "1 Hour";
                   break;
               case 3:
                   return "Half Day";
                   break;
               case 4:
                   return "Full Day";
                   break;

           }

       }



    }]);

