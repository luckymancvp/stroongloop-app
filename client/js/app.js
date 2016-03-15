/**
 * Created by luckymancvp on 3/12/16.
 */
angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,
                                                             $urlRouterProvider) {
    $stateProvider
      .state('todo', {
        url: '',
        templateUrl: 'views/todo.html',
        controller: 'TodoController'
      });

    $urlRouterProvider.otherwise('todo');
  }]);
