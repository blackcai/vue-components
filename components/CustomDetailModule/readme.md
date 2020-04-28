### 商品详情模块的说明
数据结构
    查看方法 handleAddModule 内部函数 generator 内部的各个函数的 config
外部方法

```
getContent 获得数据
参数
    status 默认返回转换之后的字符串，设置 true 则返回原始数组

setContent 设置内容
参数
    content 传入的内容
    status 默认传入字符串，设置 ture 表示传入的是数组
```

调用

```
<custom-detail-component ref="customDetail"></custom-detail-component>
<script>
……
this.$refs.customDetail.getContent()
……
</script>
```

