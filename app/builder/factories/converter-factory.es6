(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name builder.factory:Converter
   *
   * @description
   *
   */
  angular
    .module('builder')
    .factory('Converter', Converter);

  function Converter() {
    let ConverterBase = {};
    ConverterBase.generateStandardAttributes = (field, output) => {

      let form, formProps = [
        'key',
        'condition',
        'onChange',
        'notitle',
        'showAdvanced',
        'validationMessage',
        'onChange',
        'ngModelOptions',
        'condition',
        'fieldAddonLeft',
        'fieldAddonRight',
        'description',
        'showAdvanced',
        'validationMessage',
        'onChange',
        'feedback',
        'disableSuccessState',
        'disableErrorState',
        'placeholder',
        'ngModelOptions',
        'readonly',
        'htmlClass',
        'destroyStrategy',
        'copyValueTo',
        'fieldHtmlClass',
        'labelHtmlClass'
      ];
      output.schema.properties[field.key] = {
        title: field.title,
        description: field.description
      };

      form = _.pick(field, formProps);
      output.form.push(form);
      return output;
    };

    ConverterBase.updateForm = (output, key, attr, value) => {
      let index = _.findKey(output.form, 'key', key);
      output.form[index][attr] = value;
      return output;
    }

    ConverterBase.generateTextField = (field, output) => {
      output.schema.properties[field.key]['type'] = 'string';
      return output;
    };
    ConverterBase.generateTextareaField = (field, output) => {
      output.schema.properties[field.key]['type'] = 'string';
      output = ConverterBase.updateForm(output, field.key, 'type', 'textarea');
      return output;
    };
    ConverterBase.generateEmailField = (field, output) => {
      output.schema.properties[field.key]['type'] = 'string';
      output.schema.properties[field.key]['format'] = 'email';
      return output;
    };
    ConverterBase.generateDropdownField = (field, output) => {
      output.schema.properties[field.key]['type'] = 'string';
      output.schema.properties[field.key]['enum'] = field.options;
      return output;
    };
    ConverterBase.generateDateField = (field, output) => {
      output.schema.properties[field.key]['type'] = 'string';
      output.schema.properties[field.key]['format'] = 'date';
      return output;
    };
    ConverterBase.generateTimeField = (field, output) => {
      output.schema.properties[field.key]['type'] = 'string';
      output.schema.properties[field.key]['format'] = 'time';
      return output;
    };
    ConverterBase.generateDateTimeField = (field, output) => {
      output.schema.properties[field.key]['type'] = 'string';
      output.schema.properties[field.key]['format'] = 'date-time';
      return output;
    };

    let buildSegment = (field, output) => {
      let builder = _.camelCase('generate_' + field.type.replace('-', '_') + '_field');
      output = ConverterBase.generateStandardAttributes(field, output);
      if (typeof ConverterBase[builder] === 'function')
        return ConverterBase[builder](field, output);
      output.schema.properties[field.key] = {
        type: field.type,
        title: field.title
      };
      return output;
    };

    ConverterBase.generateFields = (model) => {
      let output = {schema: {type: 'object', properties: {}}, form: []};
      if (_.isArray(model.fields)) {
        model.fields.forEach((field) => {
            if (!_.isUndefined(field.type) && !_.isUndefined(field.key))
              output = buildSegment(field, output)
          }
        );
      }
      return output;
    };
    return ConverterBase;
  }
}());
