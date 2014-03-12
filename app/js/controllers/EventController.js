/**
 * Created by pure coder on 3/11/14.
 */
'use strict';



angular.module('eventsApp')

    .controller('EventController',['$scope',
                 function($scope){

                     $scope.snippet ='<span style="color:red">html binding</span>'
                     $scope.myStyle={color:'red'}
                     $scope.sortorder =   'name';


               $scope.event = {

                   name:"Angular Boot Camp",
                   date:"3/1/2013",
                   time:"5pm",
                   imageUrl:'images/yeoman.png',
                   location: {

                       address: 'Google Headquarters',
                       city: 'Mountain View',
                       province: 'CA'
                   },

                   sessions:[

                       {

                           name:'Directives Masterclass',
                           creatorName:'Bob Smith',
                           duration: 1,
                           level:'Advanced',
                           abstract:'In this session you will learn directives',
                           upVoteCount:0
                       },

                       {

                           name:'Scopes for fun and profit',
                           creatorName:'Bob Smith',
                           duration:2,
                           level:'Intro',
                           abstract:'In this session you will learn scopes',
                           upVoteCount:0
                       },

                       {
                           name:'Well Behaved Controllers',
                           creatorName:'Bob Smith',
                           duration:4,
                           level:'Intermediate',
                           abstract:'In this session you will learn Controllers',
                           upVoteCount:0

                       }

                   ]



               };

                     $scope.upVoteSession = function(session){

                         session.upVoteCount++;

                     };

                     $scope.downVoteSession = function(session){

                         session.upVoteCount--;

                     };


    }]);