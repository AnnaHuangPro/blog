// first 
// TODO: 变量命名问题
function newInstanceOf (left, right) {
  // FIXME:对参数的校验
  let leftProto = left.__proto__;
  let rightProto = right.prototype;
  // TODO: 代码的优雅修改
  while (true) {
    if (leftProto === rightProto) {
      return true;
    }
    if (leftProto === null ) {
      return false;
    }
    leftProto = leftProto.__proto__;
  }
}

