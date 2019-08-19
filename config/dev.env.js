'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

const result = Object.assign({
  NODE_ENV: '"development"'
}, require('./.env.dev.json'));

module.exports = merge(prodEnv, result)
