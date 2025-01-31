'use strict';

const EX = function convertAllStringTemplateSlots(f) {
  function c(t, ...v) {
    return v.reduce((a, x, i) => a + f(x, i, v, t) + t[i + 1], t[0]);
  }
  c.func = f;
  c.compose = EX.composeMethod;
  return c;
};

Object.assign(EX, {

  composeMethod(g) {
    const f = this.func;
    return EX((x, ...a) => g(f(x, ...a), ...a));
  },


});


module.exports = EX;
