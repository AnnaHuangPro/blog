Number.isNaN = Number.isNaN || function (x) {
  return typeof x === 'number' && isNaN(x);
}