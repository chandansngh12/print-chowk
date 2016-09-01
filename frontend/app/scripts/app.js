'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
angular
  .module('yapp', [
    'ui.router',
    'ngAnimate',
    'ng-uploadcare'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl'
        })
          .state('overview', {
            url: '/overview',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/overview.html'
          })
          .state('orderSummary', {
            url: '/orderSummary',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/orderSummary.html',
            controller: 'reportsCtrl'
          })
          .state('price_list', {
            url: '/price_list',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/Price_List.html'
          })

          .state('order_list', {
            url: '/order_list',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/order_list.html'
          })

          .state('request_qoute', {
            url: '/request_qoute',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/request_qoute.html'
          })

          .state('file_vault', {
            url: '/file_vault',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/file_vault.html'
          })

          .state('accounts_setting', {
            url: '/accounts_setting',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/accounts_setting.html'
          })

          .state('printopedia', {
            url: '/printopedia',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/printopedia.html'
          })

          .state('reports', {
            url: '/reports',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/reports.html',
            controller: 'reportsCtrl'
          });

  });
