'use strict';

/**
 * @ngdoc overview
 * @name summerApp
 * @description Summer 2.0
 * @created By Atento Innovation
 * # summerApp
 *
 * Main module of the application.
 */

var summerApp = angular.module('summerApp', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'snap']);

  summerApp.config(function($stateProvider, $urlRouterProvider, snapRemoteProvider){

      $stateProvider

      .state('/', {
          url: '/',
          templateUrl: 'views/main.html',
      })
      .state('login', {
          url: '/login',
          templateUrl: 'views/login.html',
      })
      //Route Default
      $urlRouterProvider.otherwise('/');
  });
