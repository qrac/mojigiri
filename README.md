# mojigiri

<p>
  <a aria-label="Made by QRANOKO" href="https://qranoko.jp">
    <img src="https://img.shields.io/badge/MADE%20BY%20QRANOKO-212121.svg?style=for-the-badge&labelColor=212121">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/mojigiri">
    <img alt="" src="https://img.shields.io/npm/v/mojigiri.svg?style=for-the-badge&labelColor=212121">
  </a>
  <a aria-label="License" href="https://github.com/qrac/mojigiri/blob/master/LICENSE">
    <img alt="" src="https://img.shields.io/npm/l/mojigiri.svg?style=for-the-badge&labelColor=212121">
  </a>
</p>

## About

日本語テキストを文字の種類別に分割し、配列を返します。

## How To Use

```bash
$ npm install mojigiri
```

```js
import mojigiri from "mojigiri"

const example = "日本語テキスト100を「文字の種類」でsplitする。"
const result = mojigiri(example)

console.log(result)
// => ["日本語", "テキスト", "100", "を", "「", "文字", "の", "種類", "」", "で", "split", "する", "。"]
```

## License

- MIT

## Credit

- Author: [Qrac](https://qrac.jp)
- Organization: [QRANOKO](https://qranoko.jp)
