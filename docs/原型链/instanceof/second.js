function newInstanceof (instance, constructor) {
  if (constructor === null || typeof constructor !== 'object') {
    // FIXME: 警告没有throw，提示信息以官方为准
    console.warn('the right of instanceof is not a object');
  }
  if (!constructor.prototype) {
    console.warn('the right of instanceof is not a constructor');
  }
  // FIXME: no judgement on whether this left of instanceof is an object
  while (instance !== null) {
    if (instance.__proto__ === constructor.prototype) {
      return true;
    }
    instance = instance.__proto__;
  }
  return false;
} 