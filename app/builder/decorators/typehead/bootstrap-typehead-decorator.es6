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

    var typehead = function (name, schema, options) {
      var form;
      if (schema.type === 'typehead' || schema.type['x-schema-form'] === 'typehead' || (!_.isUndefined(form) && form.type === 'typehead')) {
        form = schemaFormProvider.stdFormObj(name, schema, options);
        options.lookup[sfPathProvider.stringify(options.path)] = form;
        return form;
      }
    };

    schemaFormProvider.defaults.string.unshift(typehead);

    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'typehead',
      'builder/decorators/typehead/bootstrap-typehead-decorator.tpl.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'typehead',
      'builder/decorators/typehead/bootstrap-typehead-decorator.tpl.html'
    );
  }

}());
