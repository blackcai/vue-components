/**
 *
 * */
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
}

/**
 * 对象合并
 * 这个功能通常在封装组件合并参数配置的时候用到
 * */
export default function extend(...args) {
  /**
   * 首先获得第一个参数，第一个参数为合并后的对象
   * 通过 Object 保证的到的一定是一个对象
   * */
  const to = Object(args[0])
  /**
   * 循环 args 参数进行处理，
   * 在能够保证传入的参数只有两个的情况下其实可以不用循环，只需要直接获取第二个参数即可
   * */
  for (let i = 1; i < args.length; i++) {
    /**
     * 定义已经需要合并的数据
     * 并且判断是否存在
     * */
    const nextSource = args[i]
    if (nextSource) {
      /**
       * 通过 Object 保证得到一个对象，再通过 Object.keys 获得一个 keys 的数组
       * */
      const keysArray = Object.keys(Object(nextSource))
      for (let nextIndex = 0; nextIndex < keysArray.length; nextIndex++) {
        /**
         * 得到对应的 key 并通过 Object.getOwnPropertyDescriptor 方法获取 nextSource 的私有属性
         * 如果对应的 key 可以被枚举
         * */
        const nextKey = keysArray[nextIndex]
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey)
        /**
         * 验证当前对象指定的值是否可以被枚举出来
         * */
        if (desc && desc.enumerable) {
          /**
           * 如果都是对象，就要重新进入 extend
           * 如果合并的对象不是对象而被合并的是对象，设置 to[nextKey] = {}
           * 否则直接赋值
           * */
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            extend(to[nextKey], nextSource[nextKey])
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {}
            extend(to[nextKey], nextSource[nextKey])
          } else {
            to[nextKey] = nextSource[nextKey]
          }
        }
      }
    }
  }
  return to
}
