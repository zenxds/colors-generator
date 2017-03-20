import {
  parseHex,
  RGBToHSL,
  HSLToRGB
} from './util'

module.exports = {
  generate(color, num = 20) {
    const hsl = RGBToHSL(color)
    const h = hsl[0] * 360
    const step = 360 / num

    const ret = []

    for (let i = 0; i < num; i++) {
      const newH = ((h + i * step) % 360) / 360
      ret.push(HSLToRGB([newH, hsl[1], hsl[2]]))
    }

    return ret
  }
}
