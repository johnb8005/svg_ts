export const toColor = (r, g, b) => {
  const hg = g << 8;
  const hb = b << 16;
  return hg + hb + r;
};
export const toHex = (i) => {
  const a = i % 16;
  const b = (i >> 4) % 16;
  const c = (i >> 8) % 16;
  const d = (i >> 12) % 16;
  const e = (i >> 16) % 16;
  const f = (i >> 20) % 16;
  const toUnitHex = (i2) => {
    if (i2 < 10) {
      return String(i2);
    }
    const arr = ["a", "b", "c", "d", "e", "f"];
    return arr[i2 - 10];
  };
  return toUnitHex(f) + toUnitHex(e) + toUnitHex(d) + toUnitHex(c) + toUnitHex(b) + toUnitHex(a);
};
export const toHexFromNumber = (i) => {
  const a = i % 16;
  const b = (i >> 4) % 16;
  const c = (i >> 8) % 16;
  const toUnitHex = (i2) => {
    if (i2 < 10) {
      return String(i2);
    }
    const arr = ["a", "b", "c", "d", "e", "f"];
    return arr[i2 - 10];
  };
  return toUnitHex(c) + toUnitHex(b) + toUnitHex(a);
};
