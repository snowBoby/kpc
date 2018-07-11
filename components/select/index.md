---
title: 选择框
category: 组件
order: 5
sidebar: doc
---

# 属性

## Select

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选择的元素，可用`v-model`双向绑定 | `*` | `""` |
| multiple | 是否支持多选 | `Boolean` | `false` |
| disabled | 是否禁用 | `Boolean` | `false` |
| clearable | 是否可清空 | `Boolean` | `false` |
| filterable | 是否支持筛选 | `Boolean` | `false` |
| filter | 当支持筛选时，可以自定义筛选规则 | `Function` | `(keywords, props) => ...` |
| keywords | 如果支持筛选，当前关键词 | `String` | `undefined` |
| placeholder | 占位文案 | `String` | `"请选择"` |
| size | 尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| fluid | 是否宽度100% | `Boolean` | `false` |
| width | 指定宽度 | `Number` | `undefined` | 
| allowUnmatch | 组件的`value`不在可选项中时，是否强制置空，该值为`true`时，不置空；当与`filterable`一起使用，支持输入不匹配项 | `Boolean` | `false` |

## Option

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选中的值 | `*` | `undefined` |
| label | 该值有两个作用，1. 当`children`不存在时，作为展示文案；2. 作为筛选的内容，不存在时，则使用`children`的文本作为筛选内容 | `String`  | `undefined` |
| disabled | 是否禁用该项选择 | `Boolean` | `false` |

## OptionGroup

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 分组标签名 | `String` &#124; `Number` &#124; `vNode` | `""` |


# 扩展点

## OptionGroup

| 名称 | 说明 |
| --- | --- |
| label | 定义复杂的分组标签名 |

