#!/usr/bin/env node

var Promise = require('bluebird');
var psi = Promise.promisifyAll(require('psi'));
var reference = require('./reference');

exports.getReference = function() {
  return reference;
};

exports.output = function(url) {
  return new Promise(
    function (resolve, reject) {
      resolve()
    })
    .then(function() {
      return psi(url,
        {
          nokey: 'true',
          strategy: 'mobile'
        })
        .then(function (data) {
          return data.ruleGroups.SPEED;
        }
      );
    });
};
