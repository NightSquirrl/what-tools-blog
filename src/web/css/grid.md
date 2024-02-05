---
title: 🥴 Grid 布局 
tag:
  - CSS
---


## 父级
```css
.wrapper {
    display: flex;
    /*grid-template-columns: 1fr 1fr 1fr;*/  /*设置列 4 列,每一列的宽度等均分配*/
    grid-template-columns: repeat(auto-fill,minmax(260px,1fr)); /*设置列 自动计算个数,每一列的宽度最小值和最大值*/
    gap: 10px; /*设置四周的间隙 */
}
```

## 子元素
```css
.box1 {
    grid-row: 1/3;
    grid-column: 1/3;
}
```
