'use strict';

/**
 * @ngdoc function
 * @name mytodoangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoangularApp
 */
angular.module('mytodoangularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index,1);
    };
  });
