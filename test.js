'use strict'

var test = require('tape')
var separate = require('./')

test(function (t) {
  t.equal(separate('1234', ',', 1), '1,234')
  t.equal(separate('555001234', ' ', [3, 5]), '555 00 1234')
  t.end()
})
