Object.is = function (x, y) {
  if (x === y) {
    // 利用-Infinity !== +Infinity 排除+0 === -0的情况
    return x !== 0 || 1/x === 1/y;
  } else {
    // 利用 NaN !== NaN 排除 NaN !== NaN的情况
    return x !== x && y !== y;
  }
}