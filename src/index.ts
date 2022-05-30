const mojigiri = (text: string) => {
  if (!text) {
    return []
  }

  const patterns = [
    "[ ]+",
    "\n",
    "[0-9]+",
    "[a-zA-Z]+",
    "[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u00BF]", // Unicode !-/ :-@ [-` {-¿
    "[　]+",
    "[０-９]+",
    "[Ａ-Ｚ]+",
    "[ぁ-んー〜]+",
    "[ァ-ヴー〜]+",
    "[ｦ-ﾟ]+",
    "[一二三四五六七八九十壱弐参拾百千万萬億兆〇]+",
    "[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FC3\uF900-\uFA2D\uFA30-\uFA6A\uFA70-\uFAD9]+", // Kanji
    "[！-／：-＠［-｀｛-～、-〜”’・※]",
  ]
  const reg = new RegExp(`(${patterns.join("|")})`, "ig")
  const words = text.split(reg)
  const filteredWords = words.filter((word) => word.length > 0)
  const result = filteredWords

  return result
}

export default mojigiri
