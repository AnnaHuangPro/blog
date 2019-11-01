function newInstanceof (instance, constructor) {
  if (constructor === null || typeof constructor !== 'object') {
    throw TypeError("Right-hand side of 'instanceof' is not an object");
  }
  if (typeof constructor !== 'function') {
    throw TypeError('the right of instanceof is not a function');
  }
  if (typeof instance !== 'object' && typeof instance !== 'function') {
    return false;
  }
  while (instance !== null) {
    if (instance.__proto__ === constructor.prototype) {
      return true;
    }
    instance = instance.__proto__;
  }
  return false;
} 