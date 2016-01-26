(function () {
  'use strict';

  angular
    .module('builder')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('builder', {
        url: '/builder',
        templateUrl: 'builder/views/builder.tpl.html',
        controller: 'BuilderCtrl',
        controllerAs: 'builder'
      });
  }
}());
