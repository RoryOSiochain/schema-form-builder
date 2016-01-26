(function () {
  'use strict';

  /* @ngdoc object
   * @name core
   * @description
   *
   */
  angular
    .module('builder').config(bootstrapAccordionArrayDecorator);

  function bootstrapAccordionArrayDecorator(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'accordion-array',
      'builder/decorators/accordion-array/bootstrap-accordion-array-decorator.tpl.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'accordion-array',
      'builder/decorators/accordion-array/bootstrap-accordion-array-decorator.tpl.html'
    );
  }

}());
