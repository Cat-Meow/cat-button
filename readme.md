# React Salt - Button

基本组件按钮，基于Bootstrap ``.btn``样式，响应用户点击行为，展现不同状态。

## API

主要通过myStyle来控制按钮的样式，mySize控制按钮的大小。同时提供block、active、disabled、loading等修饰属性，当传入href属性，按钮功能将表现为`a`标签，但是样式仍然可以通过其他属性进行单独控制。

Props属性如下

| props | 说明 | 类型 | 默认值 | 备选 |
|:------------- |:---------------:| -------------:| -------------:| -------------:|
| myStyle | 风格 | string | default| default\primary\danger\warning\link\success\info |
| mySize | 大小 | string | medium | large\meduim\small\xsmall |
| className | 自定义类名 | string | ‘’ |  |
| block | 块级风格 | boolean | false | |
| active | 点击状态 | boolean | false | |
| disabled | 可用 | boolean | false | |
| loading | loading | boolean | false | |
| onClick | 点击事件 | function | null | |
| componentClass | 自定义标签类型 | string | null | null |
