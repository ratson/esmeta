# esmeta

Handy function to handle import.meta

## Installation

```
npm install esmeta --save
```

## Usage

<!-- eslint-disable strict,no-unused-vars -->

```js
import esmeta from 'esmeta'

const importMeta = esmeta(import.meta)
/*
{
  url: "file:///a/b/c.mjs"  // same as import.meta.url
  dirname: "/a/b"
  filename: "/a/b/c.mjs"
  dirnameJoin(...paths)  // helper function to join path
  isMain()  // return true if match to `process.mainModule`
}
*/
```
