/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Converter', () => {
  let factory;

  beforeEach(module('builder'));

  beforeEach(inject((Converter) => {
    factory = Converter;
  }));

  it('should have someValue be Converter', () => {
    expect(factory.someValue).to.equal('Converter');
  });

  it('should have someMethod return Converter', () => {
    expect(factory.someMethod()).to.equal('Converter');
  });
});
