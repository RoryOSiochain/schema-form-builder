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

    //var accordion = function (name, schema, options) {
    //    var f = schemaFormProvider.stdFormObj(name, schema, options);
    //
    //    f.openLast = function(){
    //      alert('open');
    //    };
    //    options.lookup[sfPathProvider.stringify(options.path)] = f;
    //    return f;
    //};
    //
    //schemaFormProvider.defaults.array.unshift(accordion);

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
