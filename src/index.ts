const mojigiri = (text: string) => {
  if (!text) {
    return []
  }

  const patterns = [
    "[ ]+",
    "\n",
    "[0-9]+",
    "\b[a-zA-Z]+\b",
    "[　]+",
    "[０-９]+",
    "[Ａ-Ｚ]+",
    "[ぁ-んー〜]+",
    "[ァ-ヴー〜]+",
    "[ｦ-ﾟ]+",
    "[一二三四五六七八九十壱弐参拾百千万萬億兆〇]+",
    "[、。！？〈〉《》「」『』【】〔〕・（）：；［］｛｝]",
  ]
  const reg = new RegExp(`(${patterns.join("|")})`, "ig")
  const words = text.split(reg)
  const filteredWords = words.filter((word) => word.length > 0)
  const result = filteredWords

  return result
}

export default mojigiri
