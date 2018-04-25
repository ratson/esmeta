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
