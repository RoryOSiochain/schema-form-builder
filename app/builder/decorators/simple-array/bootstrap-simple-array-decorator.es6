(function () {
  'use strict';

  /* @ngdoc object
   * @name core
   * @description
   *
   */
  angular
    .module('builder').config(bootstrapSimpleArrayDecorator);

  function bootstrapSimpleArrayDecorator(schemaFormProvider, schemaFormDecoratorsProvider, sfPathProvider) {
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'simple-array',
      'builder/decorators/simple-array/bootstrap-simple-array-decorator.tpl.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'simple-array',
      'builder/decorators/simple-array/bootstrap-simple-array-decorator.tpl.html'
    );
  }

}());
