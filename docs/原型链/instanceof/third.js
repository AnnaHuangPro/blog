function newInstanceof (instance, constructor) {
  if (constructor === null || typeof constructor !== 'object') {
    // FIXME:错误抛出
    console.error("Uncaught TypeError: Right-hand side of 'instanceof' is not an object");
    return;
  }
  if (typeof constructor !== 'function') {
    console.error('the right of instanceof is not a function');
    return;
  }
  while (instance !== null && (typeof instance === 'object'|| typeof instance === 'function')) {
  // while (instance.__proto__) {
    if (instance.__proto__ === constructor.prototype) {
      return true;
    }
    instance = instance.__proto__;
  }
  return false;
} 