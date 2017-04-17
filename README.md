# 颜色生成

在基础色的基础上，，通过H值多层均分，生成同一亮度和纯度的多个颜色，应用场景如图表的图例展示

## api

```
// 根据基础色生成色系
generate(color, num).get()

// 提高亮度
generate(color, num).lighter(0.2).get()

// 减少亮度
generate(color, num).darker(0.2).get()

// 提高纯度
generate(color, num).purer(0.2).get()

// 减少纯度
generate(color, num).impurer(0.2).get()
```
