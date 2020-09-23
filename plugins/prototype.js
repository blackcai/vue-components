// 数组扩展 // 谨慎使用这个直接修改原型的方法
Array.prototype.indexOf = function(val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === val) return i
  }
  return -1
}

Array.prototype.remove = function(val) {
  const index = this.indexOf(val)
  if (index > -1) {
    this.splice(index, 1)
  }
}

Array.prototype.add = function(val) {
  const index = this.indexOf(val)
  if (index === -1) {
    this.push(val)
  }
}

String.prototype.replaceAll  = function(s1,s2){
  return this.replace(new RegExp(s1,"gm"),s2);
}
