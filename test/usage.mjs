// -*- coding: utf-8, tab-width: 2 -*-

import eq from 'equal-pmb';

import convertAllStringTemplateSlots from '../index.js';

const hex = convertAllStringTemplateSlots(x => x.toString(16));
eq(hex`foo ${123} bar ${456} qux`, 'foo 7b bar 1c8 qux');

const upperHex = hex.compose(x => x.toUpperCase());
eq(upperHex`foo ${123} bar ${456} qux`, 'foo 7B bar 1C8 qux');







console.info('+OK usage test passed.');
