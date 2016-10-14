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
    'ng-uploadcare',
    'ngMessages',
    'file-model',
    'ngMaterial',
    'ngSimpleUpload',
    'md.data.table',
    'ngCookies',
    'ngFileUpload',
    'LocalStorageModule',
    'mdDataTable'

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
          controller: 'LoginCtrl',

        })
        .state('payment', {
          url: '/payment',
          parent: 'dashboard',
          templateUrl: 'views/dashboard/payment.html',
          controller: 'payment'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl'
          // resolve: { authenticate: authenticate }

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
            controller: 'orderSummary'
            // resolve: { authenticate: authenticate }

          })
          .state('price_list', {
            url: '/price_list',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/Price_List.html',
            controller: 'price_list'

          })
          .state('orderSuccess', {
            url: '/orderSuccess',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/orderSuccess.html',
            controller: 'orderSuccess'

          })

          .state('showQuotes', {
            url: '/showQuotes',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/showQuotes.html',
            controller: 'showQuotes'

          })

          .state('thankYou', {
            url: '/thankYou',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/thankYou.html'


          })

          .state('order_list', {
            url: '/order_list',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/order_list.html',
            controller: 'order_list'

          })

          .state('request_qoute', {
            url: '/request_qoute',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/request_qoute.html',
            controller: 'requestQoute'

          })
          .state('requestSummary', {
            url: '/requestSummary',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/requestSummary.html',
            controller: 'requestSummary'

          })

          .state('file_vault', {
            url: '/file_vault',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/file_vault.html',
            controller: 'fileVault'

          })

          .state('accounts_setting', {
            url: '/accounts_setting',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/accounts_setting.html',
            controller: 'account_settings'

          })
          .state('shipping', {
            url: '/shipping',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/shipping.html',
            controller: 'shippingCtrl'


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

$rootScope.isUser=true;
  angular.module('yapp')
      .run(['$rootScope', '$state',
      function ($rootScope, $state) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
          if (toState.name !== 'login' && !$rootScope.isUser) {
            event.preventDefault();
            $state.go('login');
          }
        });
      }]
    );

    // dbpassword
      //  printfront
    // ZzU=O7a+*f7o
