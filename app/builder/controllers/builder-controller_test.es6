/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('BuilderCtrl', () => {
  let ctrl;

  beforeEach(module('builder'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('BuilderCtrl');
  }));

  it('should have ctrlName as BuilderCtrl', () => {
    expect(ctrl.ctrlName).to.equal('BuilderCtrl');
  });
});
