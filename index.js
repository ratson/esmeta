'use strict'
const URL = require('url')
const Path = require('path')

const isMain = require('is-main')
const resolveFrom = require('resolve-from')

module.exports = importMeta => {
  const filename = URL.parse(importMeta.url).pathname
  const dirname = Path.dirname(filename)

  return {
    ...importMeta,
    dirname,
    filename,
    dirnameJoin(...args) {
      return Path.join(dirname, ...args)
    },
    isMain() {
      return isMain(importMeta)
    },
    resolve(request) {
      return resolveFrom(dirname, request)
    },
  }
}
