(function () {
  'use strict';

  /* @ngdoc object
   * @name builder
   * @description
   *
   */
  angular
    .module('builder', [
      'angular-growl',
      'angular-locker',
      'schemaForm',
      'ui.bootstrap',
      'ui.router',
      'ui.sortable'
    ]).config(['lockerProvider', function config(lockerProvider) {
      lockerProvider.defaults({
        driver: 'local',
        namespace: 'ro',
        separator: '.',
        eventsEnabled: true,
        extend: {}
      });
    }])
    .config(['growlProvider', function (growlProvider) {
      growlProvider.globalTimeToLive({success: 1000, error: 2000, warning: 3000, info: 4000});
    }]);
}());
