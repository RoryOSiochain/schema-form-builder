(function () {
  'use strict';

  /* @ngdoc object
   * @name core
   * @description
   *
   */
  angular
    .module('builder').config(bootstrapTypeHeadDecorator);

  function bootstrapTypeHeadDecorator(schemaFormProvider, schemaFormDecoratorsProvider, sfPathProvider) {


    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'select-box',
      'builder/decorators/select-box/bootstrap-select-box-decorator.tpl.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'select-box',
      'builder/decorators/select-box/bootstrap-select-box-decorator.tpl.html'
    );
  }

}());
