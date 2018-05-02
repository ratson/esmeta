import Path from 'path'
import test from 'ava'

import esmeta from '.'

test('return value', t => {
  const url = 'file:///file/path'
  const importMeta = esmeta({ url })
  t.is(importMeta.url, url)
  t.is(importMeta.dirname, '/file')
  t.is(importMeta.filename, '/file/path')
  t.is(importMeta.dirnameJoin('some-path'), '/file/some-path')
  t.false(importMeta.isMain())
})

test('resolve', t => {
  const rootDir = process.cwd()
  const url = `file:///${rootDir}/index.js`
  const importMeta = esmeta({ url })

  t.is(
    importMeta.resolve('ava'),
    Path.join(rootDir, 'node_modules/ava/index.js'),
  )

  t.is(
    importMeta.resolve('./test/fixtures/dummy'),
    Path.join(rootDir, 'test/fixtures/dummy.mjs'),
  )
})
