'use strict'
const URL = require('url')
const Path = require('path')

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
      return process.mainModule && filename === process.mainModule.filename
    },
  }
}
