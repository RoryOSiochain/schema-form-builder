(function () {
  'use strict';

  angular
    .module('schemaFormBuilder')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
