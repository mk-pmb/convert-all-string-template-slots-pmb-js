
<!--#echo json="package.json" key="name" underline="=" -->
convert-all-string-template-slots-pmb
=====================================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Convert any unary function into a string template tag that converts all its
slot values.
<!--/#echo -->


API
---

This module exports one function:

### convertAllStringTemplateSlots(f)

Given an unary conversion function `f`, return a tag function `c`
(a renderer for a tagged template literal)
that converts all slot values before inserting them.
The conversion function is actually invoked as `f(x, i, v, t)`
where `x` is the slot value, `i` is the slot index (counted starting at 0),
`v` is the list of all slot values, and `t` is the list of texts.
`t[i]` is the text preceeding `x`; `t.length === v.length + 1` because
of the (potentially empty) text after the last slot.

The `c` function holds these properties:

* `func`: A reference to `f`.
* `compose(g)`: Given an unary conversion function `g`, return a tag function
  that converts using the composition of `f` and `g`, i.e. `g(f(x))`.





Usage
-----

see [test/usage.mjs](test/usage.mjs).



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key="license" -->
ISC
<!--/#echo -->
