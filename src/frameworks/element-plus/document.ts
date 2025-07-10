import { l10n } from "vscode"

import { workspace } from 'vscode'

const docUrl = workspace.getConfiguration().get('vue-helper.elementPlusDocUrl') || 'https://element-plus.org'



export default () => {
return {
"el-button": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/button.html)

#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| size| 尺寸| enum| — |
| type| 类型| enum| — |
| plain| 是否为朴素按钮| boolean| false |
| text 2.2.0| 是否为文字按钮| boolean| false |
| bg 2.2.0| 是否显示文字按钮背景颜色| boolean| false |
| link 2.2.1| 是否为链接按钮| boolean| false |
| round| 是否为圆角按钮| boolean| false |
| circle| 是否为圆形按钮| boolean| false |
| loading| 是否为加载中状态| boolean| false |
| loading-icon| 自定义加载中状态图标组件| string / Component| Loading |
| disabled| 按钮是否为禁用状态| boolean| false |
| icon| 图标组件| string / Component| — |
| autofocus| 原生 autofocus 属性| boolean| false |
| native-type| 原生 type 属性| enum| button |
| auto-insert-space| 自动在两个中文字符之间插入空格| boolean| — |
| color| 自定义按钮颜色, 并自动计算 hover 和 active 触发后的颜色| string| — |
| dark| dark 模式, 意味着自动设置 color 为 dark 模式的颜色| boolean| false |
| tag 2.3.4| 自定义元素标签| string / Component| button |

#### Button 插槽

| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
| loading| 自定义加载中组件 |
| icon| 自定义图标组件 |

| 属性名| 说明| 类型 |
| :--- | :--- | :--- |
| ref| 按钮 html 元素| object |
| size| 按钮尺寸| object |
| type| 按钮类型| object |
| disabled| 按钮已禁用| object |
| shouldAddSpace| 是否在两个字符之间插入空格| object |
`,
  "el-button-group": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/button.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| size| 用于控制该按钮组内按钮的大小| enum| — |
| type| 用于控制该按钮组内按钮的类型| enum| — |

#### ButtonGroup 插槽

| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| default| 自定义按钮组内容| Button |

#### 源代码

#### 贡献者
`,
  "el-container": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/container.html)

#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| direction| 子元素的排列方向| enum| 子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal |

#### Container 插槽

| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| default| 自定义默认内容| Container / Header / Aside / Main / Footer |
`,
  "el-header": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/container.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| height| 顶栏高度| string| 60px |

#### Header Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
`,
  "el-aside": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/container.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| width| 侧边栏宽度| string| 300px |

#### Aside Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
`,
  "el-main": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/container.html)

#### Main Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
`,
  "el-footer": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/container.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| height| 底栏高度| string| 60px |

#### Footer Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |

#### 源代码

#### 贡献者
`,
  "el-icon": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/icon.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| color| svg 的 fill 颜色| string| 继承颜色 |
| size| SVG 图标的大小，size x size| number / string| 继承字体大小 |

#### Slots

| 名称| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |

#### 源代码

#### 贡献者
`,
  "el-layout": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/layout.html)
`,
  "el-row": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/layout.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| gutter| 栅格间隔| number| 0 |
| justify| flex 布局下的水平排列方式| enum| start |
| align| flex 布局下的垂直排列方式| enum| — |
| tag| 自定义元素标签| string| div |

#### Row Slots

| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| default| 自定义默认内容| Col |
`,
  "el-col": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/layout.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| span| 栅格占据的列数| number| 24 |
| offset| 栅格左侧的间隔格数| number| 0 |
| push| 栅格向右移动格数| number| 0 |
| pull| 栅格向左移动格数| number| 0 |
| xs| <768px 响应式栅格数或者栅格属性对象| number / object| — |
| sm| ≥768px 响应式栅格数或者栅格属性对象| number / object| — |
| md| ≥992px 响应式栅格数或者栅格属性对象| number / object| — |
| lg| ≥1200px 响应式栅格数或者栅格属性对象| number / object| — |
| xl| ≥1920px 响应式栅格数或者栅格属性对象| number / object| — |
| tag| 自定义元素标签| string| div |

#### Col Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |

#### 源代码
`,
  "el-link": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/link.html)

#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| type| 类型| enum| default |
| underline| 是否下划线| boolean| true |
| disabled| 是否禁用状态| boolean| false |
| href| 原生 href 属性| string| — |
| target| 同原生 target 属性| enum| _self |
| icon| 图标组件| string / Component| — |

#### Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
| icon| 自定义图标组件 |

#### 源代码

#### 贡献者
`,
  "el-text": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/text.html)
#### 属性

| 属性名| 描述| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| type| 类型| enum| — |
| size| 大小| enum| default |
| truncated| 显示省略号| boolean| false |
| line-clamp 2.4.0| 最大行数| string / number| - |
| tag| 自定义元素标签| string| span |

#### Slots

| 名称| 详情 |
| :--- | :--- |
| default| 默认内容 |

#### 源代码

#### 贡献者
`,
  "el-scrollbar": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/scrollbar.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| height| 滚动条高度| string / number| — |
| max-height| 滚动条最大高度| string / number| — |
| native| 是否使用原生滚动条样式| boolean| false |
| wrap-style| 包裹容器的自定义样式| string / object| — |
| wrap-class| 包裹容器的自定义类名| string| — |
| view-style| 视图的自定义样式| string / object| — |
| view-class| 视图的自定义类名| string| — |
| noresize| 不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能| boolean| false |
| tag| 视图的元素标签| string| div |
| always| 滚动条总是显示| boolean| false |
| min-size| 滚动条最小尺寸| number| 20 |
| id 2.4.0| 视图ID| string| — |
| role 2.4.0 a11y| 视图的角色| string| — |
| aria-label 2.4.0 a11y| 视图的 aria-label| string| — |
| aria-orientation 2.4.0 a11y| 视图的 aria-orientation| enum| — |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| scroll| 当触发滚动事件时，返回滚动的距离| Function |

#### Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |

#### Exposes

| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| handleScroll| 触发滚动事件| Function |
| scrollTo| 滚动到一组特定坐标| Function |
| setScrollTop| 设置滚动条到顶部的距离| Function |
| setScrollLeft| 设置滚动条到左边的距离| Function |
| update| 手动更新滚动条状态| Function |
| wrapRef| 滚动条包裹的 ref 对象| object |

#### 源代码

#### 贡献者
`,
  "el-space": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/space.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| alignment| 对齐的方式| enum align-items| center |
| class| 类名| string / object / array| — |
| direction| 排列的方向| enum| horizontal |
| prefix-cls| 给 space-items 的类名前缀| string| — |
| style| 额外样式| string / object| — |
| spacer| 间隔符| string / number / VNode| — |
| size| 间隔大小| enum / number / array| small |
| wrap| 设置是否自动折行| boolean| false |
| fill| 子元素是否填充父容器| boolean| false |
| fill-ratio| 填充父容器的比例| number| 100 |

#### Slots

| 名称| 说明 |
| :--- | :--- |
| default| 需要添加间隔的元素 |

#### 源代码

#### 贡献者
`,
  "el-config-provider": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/config-provider.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| locale| 翻译文本对象| object languages| en |
| size| 全局组件大小| enum| default |
| zIndex| 全局初始化 zIndex 的值| number| — |
| namespace| 全局组件类名称前缀 (需要配合 namespace 使用)| string| el |
| button| 按钮相关配置，详见下表| object| 详见下表 |
| message| 消息相关配置， 详见下表| object| 详见下表 |
| experimental-features| 将要添加的实验阶段的功能，所有功能都是默认设置为 false| object| — |

#### Button Attribute

| 参数| 描述| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| autoInsertSpace| 自动在两个中文字符之间插入空格| boolean| false |

#### Message Attribute

| 参数| 描述| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| max| 可同时显示的消息最大数量| number| — |

#### Config Provider Slots

| 名称| 描述| Scope |
| :--- | :--- | :--- |
| default| 自定义默认内容| config: 提供全局配置（从顶部继承） |

#### 源代码

#### 贡献者
`,
  "el-autocomplete": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/autocomplete.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| string| — |
| placeholder| 占位文本| string| — |
| clearable| 是否可清空| boolean| false |
| disabled| 自动补全组件是否被禁用| boolean| false |
| value-key| 输入建议对象中用于显示的键名| string| value |
| debounce| 获取输入建议的防抖延时，单位为毫秒| number| 300 |
| placement| 菜单弹出位置| enum| bottom-start |
| fetch-suggestions| 获取输入建议的方法， 仅当你的输入建议数据 resolve 时，通过调用 callback(data:[])  来返回它| Function| — |
| trigger-on-focus| whether show suggestions when input focus| boolean| true |
| select-when-unmatched| 在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件| boolean| false |
| name| 等价于原生 input name 属性| string| — |
| label| 输入框关联的 label 文字| string| — |
| hide-loading| 是否隐藏远程加载时的加载图标| boolean| false |
| popper-class| 下拉列表的类名| string| — |
| popper-append-to-body deprecated| 是否将下拉列表插入至 body 元素。 在下拉列表的定位出现问题时，可将该属性设置为 false| boolean| false |
| teleported| 是否将下拉列表元素插入 append-to 指向的元素下| boolean| true |
| highlight-first-item| 是否默认高亮远程搜索结果的第一项| boolean| false |
| fit-input-width| 下拉框的宽度是否与输入框相同| boolean| false |
#### 事件

| 事件名| 详情| 类型 |
| :--- | :--- | :--- |
| select| 点击选中建议项时触发| Function |
| change| 在 Input 值改变时触发| Function |

#### Slots

| 插槽名| 描述说明| 类型 |
| :--- | :--- | :--- |
| default| 自定义输入建议的内容。| object |
| prefix| 输入框头部内容| - |
| suffix| 输入框尾部内容| - |
| prepend| 输入框前置内容，在 prefix 之前| - |
| append| 输入框后置内容，在 suffix 之后| - |
| loading 2.5.0| 修改加载区域内容| - |

#### Exposes

| 名称| 详情| 类型 |
| :--- | :--- | :--- |
| activated| 自动补全输入框是否被激活| object |
| blur| 使 input 失去焦点| Function |
| close| 折叠建议列表| Function |
| focus| 使 input 获取焦点| Function |
| handleSelect| 手动触发选中建议事件| Function |
| handleKeyEnter| 手动触发键盘回车事件| Function |
| highlightedIndex| 当前高亮显示选项的索引| object |
| highlight| 在建议中高亮显示一个项目| Function |
| inputRef| el-input 组件实例| object |
| loading| 远程获取提示内容的加载状态指示器| object |
| popperRef| el-tooltip 组件实例| object |
| suggestions| 获取自动补全结果| object |

#### 源代码

#### 贡献者
`,
  "el-cascader": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/cascader.html)

#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| string/number/object| — |
| options| 选项的数据源， value 和 label 可以通过 CascaderProps 自定义.| object| — |
| props| 配置选项, 请参阅下面 CascaderProps 表。| object| — |
| size| 尺寸| enum| — |
| placeholder| 输入框占位文本| string| — |
| disabled| 是否禁用| boolean| — |
| clearable| 是否支持清空选项| boolean| — |
| show-all-levels| 输入框中是否显示选中值的完整路径| boolean| true |
| collapse-tags| 多选模式下是否折叠Tag| boolean| — |
| collapse-tags-tooltip| 当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true| boolean| false |
| separator| 用于分隔选项的字符| string| ' / ' |
| filterable| 该选项是否可以被搜索| boolean| — |
| filter-method| 自定义搜索逻辑，第一个参数是node，第二个参数是keyword，返回的布尔值表示是否保留该选项| Function| — |
| debounce| 搜索关键词正在输入时的去抖延迟，单位为毫秒| number| 300 |
| before-filter| 过滤函数调用前，所要调用的钩子函数，该函数接收要过滤的值作为参数。 如果该函数的返回值是 false 或者是一个被拒绝的 Promise，那么接下来的过滤逻辑便不会执行。| Function| — |
| popper-class| 弹出内容的自定义类名| string| '' |
| teleported| 弹层是否使用 teleport| boolean| true |
| popper-append-to-body deprecated| 是否将弹出的内容直接插入到 body 元素。 在弹出内容的边框定位出现问题时，可将该属性设置为 false| boolean| true |
| tag-type| 标签类型| enum| info |
| validate-event| 输入时是否触发表单的校验| boolean| true |
| max-collapse-tags 2.3.10| 需要显示的 Tag 的最大数量 只有当 collapse-tags 设置为 true 时才会生效。| number| 1 |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 当绑定值变化时触发的事件| Function |
| expand-change| 当展开节点发生变化时触发| Function |
| blur| 当失去焦点时触发| Function |
| focus| 当获得焦点时触发| Function |
| visible-change| 下拉框出现/隐藏时触发| Function |
| remove-tag| 在多选模式下，移除Tag时触发| Function |

#### Cascader Slots

| 插槽名| 说明| 作用域 |
| :--- | :--- | :--- |
| default| 自定义备选项的节点内容，分别为当前节点的 Node 对象和数据| object |
| empty| 无匹配选项时的内容| — |

#### Cascader Exposes

| 属性名| 说明| 类型 |
| :--- | :--- | :--- |
| getCheckedNodes| 获取一个当前选中节点的数组。(仅仅是传单) 是否只返回叶选中的节点，默认是 false| Function |
| cascaderPanelRef| cascader 面板的 ref| object |
| togglePopperVisible 2.2.31| 切换 popper 可见状态| Function |
| contentRef| cascader 内容的 ref| object |
`,
  "el-cascader-panel": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/cascader.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| string/number/object| — |
| options| 选项的数据源， value 和 label 可以通过 CascaderProps 自定义.| object| — |
| props| 配置选项, 请参阅下面 CascaderProps 表。| object| — |
#### 事件

| 事件名| 说明| Type |
| :--- | :--- | :--- |
| change| 当选中节点变化时触发| Function |
| expand-change| 当展开节点发生变化时触发| Function |
| close| 面板的关闭事件，提供给 Cascader 以便做更好的判断。| Function |

#### CascaderPanel Slots

| 插槽名| 说明| Scope |
| :--- | :--- | :--- |
| default| 下级节点的自定义内容，它们分别是当前节点对象和节点数据。| object |

#### CascaderPanel Exposes

| 属性名| 说明| Type |
| :--- | :--- | :--- |
| getCheckedNodes| 获取一个当前选中节点的数组。(仅仅是传单) 是否只返回叶选中的节点，默认是 false| Function |
| clearCheckedNodes| 清空选中的节点| Function |

#### CascaderProps

| 属性| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| expandTrigger| 次级菜单的展开方式| enum| click |
| multiple| 是否多选| boolean| false |
| checkStrictly| 是否严格的遵守父子节点不互相关联| boolean| false |
| emitPath| 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值| boolean| true |
| lazy| 是否动态加载子节点，需与 lazyLoad 方法结合使用| boolean| false |
| lazyLoad| 加载动态数据的方法，仅在 lazy 为 true 时有效| Function| — |
| value| 指定选项的值为选项对象的某个属性值| string| value |
| label| 指定选项标签为选项对象的某个属性值| string| label |
| children| 指定选项的子选项为选项对象的某个属性值| string| children |
| disabled| 指定选项的禁用为选项对象的某个属性值| string| disabled |
| leaf| 指定选项的叶子节点的标志位为选项对象的某个属性值| string| leaf |
| hoverThreshold| hover 时展开菜单的灵敏度阈值| number| 500 |

#### 类型声明

#### 源代码

#### 贡献者
`,
  "el-checkbox": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/checkbox.html)

#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| string / number / boolean| — |
| value 2.6.0| 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）| string / number / boolean / object| — |
| label| 选中状态的值，只有在绑定对象类型为 array 时有效。 如果没有 value， label则作为value使用| string / number / boolean / object| — |
| true-value 2.6.0| 选中时的值| string / number| — |
| false-value 2.6.0| 没有选中时的值| string / number| — |
| true-label deprecated| 选中时的值| string / number| — |
| false-label deprecated| 没有选中时的值| string / number| — |
| disabled| 是否禁用| boolean| false |
| border| 是否显示边框| boolean| false |
| size| Checkbox 的尺寸| enum| — |
| name| 原生 name 属性| string| — |
| checked| 当前是否勾选| boolean| false |
| indeterminate| 设置不确定状态，仅负责样式控制| boolean| false |
| validate-event| 输入时是否触发表单的校验| boolean| true |
| tabindex| 输入框的 tabindex| string / number| — |
| id| input id| string| — |
| controls a11y| 与 aria-control一致, 当 indeterminate为 true时生效| boolean| — |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 当绑定值变化时触发的事件| Function |

#### Checkbox Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
`,
  "el-checkbox-group": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/checkbox.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 绑定值| object| [] |
| size| 多选框组尺寸| enum| — |
| disabled| 是否禁用| boolean| false |
| min| 可被勾选的 checkbox 的最小数量| number| — |
| max| 可被勾选的 checkbox 的最大数量| number| — |
| label| 为屏幕阅读器准备的标签| string| — |
| text-color| 当按钮为活跃状态时的字体颜色| string| #ffffff |
| fill| 当按钮为活跃状态时的边框和背景颜色| string| #409EFF |
| tag| 复选框组元素标签| string| div |
| validate-event| 是否触发表单验证| boolean| true |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 当绑定值变化时触发的事件| Function |

#### CheckboxGroup Slots

| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| default| 自定义默认内容| Checkbox / Checkbox-button |
`,
  "el-checkbox-button": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/checkbox.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| value 2.6.0| 选中状态的值，只有在绑定对象类型为 array 时有效。| string / number / boolean / object| — |
| label| 选中状态的值，只有在绑定对象类型为 array 时有效。 如果没有 value， label则作为value使用| string / number / boolean / object| — |
| true-value 2.6.0| 选中时的值| string / number| — |
| false-value 2.6.0| 没有选中时的值| string / number| — |
| true-label deprecated| 选中时的值| string / number| — |
| false-label deprecated| 没有选中时的值| string / number| — |
| disabled| 是否禁用| boolean| false |
| name| 原生 name 属性| string| — |
| checked| 当前是否勾选| boolean| false |

#### CheckboxButton Slots

| 插槽名| 描述 |
| :--- | :--- |
| default| 自定义默认内容 |

#### 源代码

#### 贡献者
`,
  "el-color-picker": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/color-picker.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| string| — |
| disabled| 是否禁用| boolean| false |
| size| 尺寸| enum| — |
| show-alpha| 是否支持透明度选择| boolean| false |
| color-format| 写入 v-model 的颜色的格式| enum| — |
| popper-class| ColorPicker 下拉框的类名| string| — |
| predefine| 预定义颜色| object| — |
| validate-event| 输入时是否触发表单的校验| boolean| true |
| tabindex| ColorPicker 的 tabindex| string / number| 0 |
| label a11y| ColorPicker 的 aria-label| string| — |
| id| ColorPicker 的 id| string| — |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 当绑定值变化时触发| Function |
| active-change| 面板中当前显示的颜色发生改变时触发| Function |
| focus 2.4.0| 当获得焦点时触发| Function |
| blur 2.4.0| 当失去焦点时触发| Function |

#### Exposes

| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| color| 当前色彩对象| object |
| show 2.3.3| 手动显示颜色选择器| Function |
| hide 2.3.3| 手动隐藏颜色选择器| Function |
| focus 2.3.13| 使 picker 获得焦点| Function |
| blur 2.3.13| 使 picker 失去焦点| Function |

#### 源代码

#### 贡献者
`,
  "el-date-picker": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/date-picker.html)
#### 属性

| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 绑定值，如果它是数组，长度应该是 2| number / string / object| '' |
| readonly| 只读| boolean| false |
| disabled| 禁用| boolean| false |
| size| 输入框尺寸| enum| — |
| editable| 文本框可输入| boolean| true |
| clearable| 是否显示清除按钮| boolean| true |
| placeholder| 非范围选择时的占位内容| string| '' |
| start-placeholder| 范围选择时开始日期的占位内容| string| — |
| end-placeholder| 范围选择时结束日期的占位内容| string| — |
| type| 显示类型| enum| date |
| format| 显示在输入框中的格式| 参见 date formats| YYYY-MM-DD |
| popper-class| DatePicker 下拉框的类名| string| — |
| popper-options| 自定义 popper 选项，更多请参考 popper.js| object| {} |
| range-separator| 选择范围时的分隔符| string| '-' |
| default-value| 可选，选择器打开时默认显示的时间| object| — |
| default-time| 范围选择时选中日期所使用的当日内具体时刻| object| — |
| value-format| 可选，绑定值的格式。 不指定则绑定值为 Date 对象| 参见 date formats| — |
| id| 等价于原生 input id 属性| string / object| — |
| name| 等价于原生 input name 属性| string / object| '' |
| unlink-panels| 在范围选择器里取消两个日期面板之间的联动| boolean| false |
| prefix-icon| 自定义前缀图标 如果 type的值是TimeLikeType，那么就是 Clock，不然就是 Calendar| string / object| '' |
| clear-icon| 自定义清除图标| string / object| CircleClose |
| validate-event| 是否触发表单验证| boolean| true |
| disabled-date| 一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。| Function| — |
| shortcuts| 设置快捷选项，需要传入数组对象| object| [] |
| cell-class-name| 设置自定义类名| Function| — |
| teleported| 是否将 date-picker 的下拉列表插入至 body 元素| boolean| true |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 用户确认选定的值时触发| Function |
| blur| 在组件 Input 失去焦点时触发| Function |
| focus| 在组件 Input 获得焦点时触发| Function |
| calendar-change| 在日历所选日期更改时触发| Function |
| panel-change| 当日期面板改变时触发。| Function |
| visible-change| 当 DatePicker 的下拉列表出现/消失时触发| Function |

#### 插槽

| 名称| 说明 |
| :--- | :--- |
| default| 自定义单元格内容 |
| range-separator| 自定义范围分割符内容 |

#### 暴露

| 插槽名| 说明| 类型 |
| :--- | :--- | :--- |
| focus| 使选择器的输入框获取焦点| Function |
| handleOpen 2.2.16| 打开日期选择器弹窗| Function |
| handleClose 2.2.16| 关闭日期选择器弹窗| Function |

#### 类型声明

#### 源代码

#### 贡献者
`,
  "el-datetime-picker": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/datetime-picker.html)
#### 属性

| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| model-value / v-model| 绑定值，如果它是数组，长度应该是 2| Date / number / string / Array| —| — |
| readonly| 只读| boolean| —| false |
| disabled| 禁用| boolean| —| false |
| editable| 文本框可输入| boolean| —| true |
| clearable| 是否显示清除按钮| boolean| —| true |
| size| 输入框尺寸| string| large/default/small| default |
| placeholder| 非范围选择时的占位内容| string| —| — |
| start-placeholder| 范围选择时开始日期的占位内容| string| —| — |
| end-placeholder| 范围选择时结束日期的占位内容| string| —| — |
| arrow-control| 是否使用箭头进行时间选择| boolean| —| false |
| type| 显示类型| string| year/month/date/datetime/ week/datetimerange/daterange| date |
| format| 显示在输入框中的格式| string| 参见 date formats| YYYY-MM-DD HH:mm:ss |
| popper-class| DateTimePicker 下拉框的类名| string| —| — |
| range-separator| 选择范围时的分隔符| string| —| '-' |
| default-value| 可选，选择器打开时默认显示的时间| Date / [Date, Date]| | — |
| default-time| 选择日期后的默认时间值。 如未指定则默认时间值为 00:00:00| Date / [Date, Date]| —| — |
| value-format| 可选，绑定值的格式。 不指定则绑定值为 Date 对象| string| 查看 日期格式| — |
| date-format 2.4.0| 可选，时间选择器下拉列表中显示的日期格式| string| 参见 date formats| — |
| time-format 2.4.0| 可选，时间选择器下拉列表中显示的时间格式| string| 参见 date formats| — |
| id| 等价于原生 input id 属性| string / [string, string]| —| — |
| name| 等价于原生 input name 属性| string| —| — |
| unlink-panels| 在范围选择器里取消两个日期面板之间的联动| boolean| —| false |
| prefix-icon| 自定义前缀图标组件| string | Component| —| Date |
| clear-icon| 自定义清除图标| string | Component| —| CircleClose |
| shortcuts| 设置快捷选项，需要传入数组对象| object[{ text: string, value: date / function }]| —| — |
| disabled-date| 一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。| function(Date)| —| — |
| cell-class-name| 设置自定义类名| Function(Date)| —| — |
| teleported| 是否将 datetime-picker 的下拉列表插入至 body 元素| boolean| true / false| true |
#### 事件

| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 用户确认选定的值时触发| value |
| blur| 在组件 Input 失去焦点时触发| (e: FocusEvent) |
| focus| 在组件 Input 获得焦点时触发| (e: FocusEvent) |
| calendar-change| 如果用户没有选择日期，那默认展示当前日的月份。 选中日历日期后会执行的回调，只有当 datetimerange 才生效| [Date, Date] |
| visible-change| 当 DateTimePicker 的下拉列表出现/消失时触发| 出现时为true，隐藏时为false |

| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| focus| 使 input 获取焦点| — |

#### Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义单元格内容 |
| range-separator| 自定义范围分割符内容 |

#### 源代码
`,
  "el-form": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/form.html)

#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model| 表单数据对象| object| — |
| rules| 表单验证规则| object| — |
| inline| 行内表单模式| boolean| false |
| label-position| 表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性| enum| right |
| label-width| 标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto。| string / number| '' |
| label-suffix| 表单域标签的后缀| string| '' |
| hide-required-asterisk| 是否隐藏必填字段标签旁边的红色星号。| boolean| false |
| require-asterisk-position| 星号的位置。| enum| left |
| show-message| 是否显示校验错误信息| boolean| true |
| inline-message| 是否以行内形式展示校验信息| boolean| false |
| status-icon| 是否在输入框中显示校验结果反馈图标| boolean| false |
| validate-on-rule-change| 是否在 rules 属性改变后立即触发一次验证| boolean| true |
| size| 用于控制该表单内组件的尺寸| enum| — |
| disabled| 是否禁用该表单内的所有组件。 如果设置为 true, 它将覆盖内部组件的 disabled 属性| boolean| false |
| scroll-to-error| 当校验失败时，滚动到第一个错误表单项| boolean| false |
| scroll-into-view-options 2.3.2| 当校验有失败结果时，滚动到第一个失败的表单项目 可通过 scrollIntoView 配置| object / boolean| — |
#### 事件

| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| validate| 任一表单项被校验后触发| Function |

#### Form Slots

| 事件名| 说明| 子标签 |
| :--- | :--- | :--- |
| default| 自定义默认内容| FormItem |

#### Form Exposes

| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| validate| 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。| Function |
| validateField| 验证具体的某个字段。| Function |
| resetFields| 重置该表单项，将其值重置为初始值，并移除校验结果| Function |
| scrollToField| 滚动到指定的字段| Function |
| clearValidate| 清理某个字段的表单验证信息。| Function |
`,
  "el-form-item": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/form.html)
#### 属性

| 属性名| 说明| 类型| Default |
| :--- | :--- | :--- | :--- |
| prop| model 的键名。 它可以是一个属性的值(如 a.b.0 或 [a', 'b', '0'])。 在使用了 validate、resetFields 的方法时，该属性是必填的。| string / string[]| — |
| label| 标签文本| string| — |
| label-width| 标签宽度，例如 '50px'。 可以使用 auto。| string / number| '' |
| required| 是否为必填项，如不设置，则会根据校验规则确认| boolean| — |
| rules| 表单验证规则, 具体配置见下表, 更多内容可以参考async-validator| object| — |
| error| 表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 error，并显示该错误信息。| string| — |
| show-message| 是否显示校验错误信息| boolean| true |
| inline-message| 是否在行内显示校验信息| string / boolean| '' |
| size| 用于控制该表单域下组件的默认尺寸| enum| — |
| for| 和原生标签相同能力| string| — |
| validate-status| formitem 校验的状态| enum| — |

| 名称| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| trigger| 验证逻辑的触发方式| enum| — |

#### FormItem Slots

| 插槽名| 说明| 类型 |
| :--- | :--- | :--- |
| default| 表单的内容。| — |
| label| 标签位置显示的内容| object |
| error| 验证错误信息的显示内容| object |

#### FormItem Exposes

| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| size| 表单项大小| object |
| validateMessage| 校验消息| object |
| validateState| 校验状态| object |
| validate| 验证表单项| Function |
| resetField| 对该表单项进行重置，将其值重置为初始值并移除校验结果| Function |
| clearValidate| 移除该表单项的校验结果| Function |

#### 类型声明

#### 源代码

#### 贡献者
`,
  "el-input": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/input.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| type| 类型| string 等原生 input 类型| text |
| model-value / v-model| 绑定值| string / number| — |
| maxlength| 同原生 maxlength 属性| string / number| — |
| minlength| 原生属性，最小输入长度| string / number| — |
| show-word-limit| 是否显示统计字数, 只在 type 为 'text' 或 'textarea' 的时候生效| boolean| boolean |
| placeholder| 输入框占位文本| string| — |
| clearable| 是否显示清除按钮，只有当 type 不是 textarea时生效| boolean| false |
| formatter| 指定输入值的格式。(只有当 type 是"text"时才能工作)| Function| — |
| parser| 指定从格式化器输入中提取的值。(仅当 type 是"text"时才起作用)| Function| — |
| show-password| 是否显示切换密码图标| boolean| false |
| disabled| 是否禁用| boolean| false |
| size| 输入框尺寸，只在 type 不为 'textarea' 时有效| enum| — |
| prefix-icon| 自定义前缀图标| string / Component| — |
| suffix-icon| 自定义后缀图标| string / Component| — |
| rows| 输入框行数，仅 type 为 'textarea' 时有效| number| number |
| autosize| textarea 高度是否自适应，仅 type 为 'textarea' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }| boolean / object| false |
| autocomplete| 原生 autocomplete 属性| string| off |
| name| 等价于原生 input name 属性| string| — |
| readonly| 原生 readonly 属性，是否只读| boolean| false |
| max| 原生 max 属性，设置最大值| —| — |
| min| 原生属性，设置最小值| —| — |
| step| 原生属性，设置输入字段的合法数字间隔| —| — |
| resize| 控制是否能被用户缩放| enum| — |
| autofocus| 原生属性，自动获取焦点| boolean| false |
| form| 原生属性| string| — |
| label a11y| 等价于原生 input aria-label 属性| string| — |
| tabindex| 输入框的 tabindex| string / number| — |
| validate-event| 输入时是否触发表单的校验| boolean| true |
| input-style| input 元素或 textarea 元素的 style| string / object| {} |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| blur| 当选择器的输入框失去焦点时触发| Function |
| focus| 当选择器的输入框获得焦点时触发| Function |
| change| 仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发| Function |
| input| 在 Input 值改变时触发| Function |
| clear| 在点击由 clearable 属性生成的清空按钮时触发| Function |

#### Slots

| 插槽名| 说明 |
| :--- | :--- |
| prefix| 输入框头部内容，只对非 type="textarea" 有效 |
| suffix| 输入框尾部内容，只对非 type="textarea" 有效 |
| prepend| 输入框前置内容，只对非 type="textarea" 有效 |
| append| 输入框后置内容，只对非 type="textarea" 有效 |

#### Exposes

| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| blur| 使 input 失去焦点| Function |
| clear| 清除 input 值| Function |
| focus| 使 input 获取焦点| Function |
| input| Input HTML 元素| object |
| ref| HTML元素 input 或 textarea| object |
| resizeTextarea| 改变 textarea 大小| Function |
| select| 选中 input 中的文字| Function |
| textarea| HTML textarea 元素| object |
| textareaStyle| textarea 的样式| object |

#### 常见问题

#### 源代码

#### 贡献者
`,
  "el-input-number": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/input-number.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| number| — |
| min| 设置计数器允许的最小值| number| -Infinity |
| max| 设置计数器允许的最大值| number| Infinity |
| step| 计数器步长| number| 1 |
| step-strictly| 是否只能输入 step 的倍数| boolean| false |
| precision| 数值精度| number| — |
| size| 计数器尺寸| enum| default |
| readonly 2.2.16| 原生 readonly 属性，是否只读| boolean| false |
| disabled| 是否禁用状态| boolean| false |
| controls| 是否使用控制按钮| boolean| true |
| controls-position| 控制按钮位置| enum| — |
| name| 等价于原生 input name 属性| string| — |
| label| 等价于原生 input label 属性| string| — |
| placeholder| 等价于原生 input placeholder 属性| string| — |
| id| 等价于原生 input id 属性| string| — |
| value-on-clear 2.2.0| 当输入框被清空时显示的值| number / null / enum| — |
| validate-event| 是否触发表单验证| boolean| true |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 绑定值被改变时触发| Function |
| blur| 在组件 Input 失去焦点时触发| Function |
| focus| 在组件 Input 获得焦点时触发| Function |

#### Exposes

| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| focus| 使 input 组件获得焦点| Function |
| blur| 使 input 组件失去焦点| Function |

#### 源代码

#### 贡献者
`,
  "el-radio": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/radio.html)

#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| string / number / boolean| — |
| value 2.6.0| 单选框的值| string / number / boolean| — |
| label| 单选框的 label 如果没有 value， label则作为value使用| string / number / boolean| — |
| disabled| 是否禁用单选框| boolean| false |
| border| 是否显示边框| boolean| false |
| size| 单选框的尺寸| enum| — |
| name| 原始 name 属性| string| — |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 绑定值变化时触发的事件| Function |

#### Radio Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
`,
  "el-radio-group": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/radio.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 绑定值| string / number / boolean| — |
| size| 单选框按钮或边框按钮的大小| string| default |
| disabled| 是否禁用| boolean| false |
| text-color| 按钮形式的 Radio 激活时的文本颜色| string| #ffffff |
| fill| 按钮形式的 Radio 激活时的填充色和边框色| string| #409EFF |
| validate-event| 输入时是否触发表单的校验| boolean| true |
| label a11y| 与 RadioGroup 中的 aria-label 属性相同| string| — |
| name| 原生 name 属性| string| — |
| id| 原生 id 属性| string| — |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 绑定值变化时触发的事件| Function |

#### RadioGroup Slots

| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| default| 自定义默认内容| Radio / RadioButton |
`,
  "el-radio-button": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/radio.html)
#### 属性

| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| value 2.6.0| 单选框的值| string / number / boolean| — |
| label| 单选框的 label 如果没有 value， label则作为value使用| string / number / boolean| — |
| disabled| 是否禁用单选框| boolean| false |
| name| 原生 name 属性| string| — |

#### RadioButton Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| 默认插槽内容 |

#### 源代码

#### 贡献者
`,
  "el-rate": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/rate.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| number| 0 |
| max| 最大分值| number| 5 |
| size| 尺寸| enum| — |
| disabled| 是否为只读| boolean| false |
| allow-half| 是否允许半选| boolean| false |
| low-threshold| 低分和中等分数的界限值， 值本身被划分在低分中| number| 2 |
| high-threshold| 高分和中等分数的界限值， 值本身被划分在高分中| number| 4 |
| colors| icon 的颜色。 若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色| object| ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color| 未选中 icon 的颜色| string| #C6D1DE |
| disabled-void-color| 只读时未选中 icon 的颜色| string| #EFF2F7 |
| icons| 图标组件 若传入数组，则需要传入 3 个元素，分别为 3 个部分所对应的类名；若传入对象，则可自定义分段，键名为分段的界限值，键值为对应的类名| object| [StarFilled, StarFilled, StarFilled] |
| void-icon| 未被选中的图标组件| string / Component| Star |
| disabled-void-icon| 禁用状态的未选择图标| string / Component| StarFilled |
| show-text| 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容| boolean| false |
| show-score| 是否显示当前分数， show-score 和 show-text 不能同时为真| boolean| false |
| text-color| 辅助文字的颜色| string| '' |
| texts| 辅助文字数组| array| ['Extremely bad', 'Disappointed', 'Fair', 'Satisfied', 'Surprise'] |
| score-template| 分数显示模板| string|  |
| clearable 2.2.18| 是否可以重置值为 0| boolean| false |
| id| 原生 id 属性| string| — |
| label a11y| 和 Rate 的 aria-label 属性保持一致| string| — |
#### 事件

| 事件名| 描述说明| 类型 |
| :--- | :--- | :--- |
| change| 分值改变时触发| Function |

#### Exposes

| 名称| 描述| 类型 |
| :--- | :--- | :--- |
| setCurrentValue| 设置当前值| Function |
| resetCurrentValue| 重置当前值| Function |

#### 源代码

#### 贡献者
`,
  "el-select": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/select.html)

#### 属性

| 属性名| 说明| 类型| Default |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| string / number / boolean / object / array| — |
| multiple| 是否多选| boolean| false |
| disabled| 是否禁用| boolean| false |
| value-key| 作为 value 唯一标识的键名，绑定值为对象类型时必填| string| value |
| size| 输入框尺寸| enum| — |
| clearable| 是否可以清空选项| boolean| false |
| collapse-tags| 多选时是否将选中值按文字的形式展示| boolean| false |
| collapse-tags-tooltip 2.3.0| 当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true| boolean| false |
| multiple-limit| multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数， 为 0 则不限制| number| 0 |
| name| Select 输入框的原生 name 属性| string| — |
| effect| tooltip 主题，内置了 dark / light 两种| enum / string| light |
| autocomplete| Select 输入框的原生 autocomplete 属性| string| off |
| placeholder| 占位符，默认为“Select”| string| — |
| filterable| Select 组件是否可筛选| boolean| false |
| allow-create| 是否允许用户创建新条目， 只有当 filterable 设置为 true 时才会生效。| boolean| false |
| filter-method| 自定义筛选方法| Function| — |
| remote| 其中的选项是否从服务器远程加载| boolean| false |
| remote-method| 自定义远程搜索方法| Function| — |
| remote-show-suffix| 远程搜索方法显示后缀图标| boolean| false |
| loading| 是否正在从远程获取数据| boolean| false |
| loading-text| 从服务器加载数据时显示的文本，默认为“Loading”| string| — |
| no-match-text| 搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置，默认是 “No matching data'”| string| — |
| no-data-text| 无选项时显示的文字，也可以使用 empty 插槽设置自定义内容，默认是 “No data”| string| — |
| popper-class| 选择器下拉菜单的自定义类名| string| '' |
| reserve-keyword| 当 multiple 和 filterable被设置为 true 时，是否在选中一个选项后保留当前的搜索关键词| boolean| true |
| default-first-option| 是否在输入框按下回车时，选择第一个匹配项。 需配合 filterable 或 remote 使用| boolean| false |
| teleported| 是否将下拉列表插入至 body 元素| boolean| true |
| persistent| 当下拉选择器未被激活并且persistent设置为false，选择器会被删除。| boolean| true |
| automatic-dropdown| 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单| boolean| false |
| clear-icon| 自定义清除图标| string / object| CircleClose |
| fit-input-width| 下拉框的宽度是否与输入框相同| boolean| false |
| suffix-icon| 自定义后缀图标组件| string / object| ArrowDown |
| suffix-transition deprecated| 下拉菜单显示/消失时后缀图标的动画| boolean| true |
| tag-type| 标签类型| enum| info |
| validate-event| 是否触发表单验证| boolean| true |
| placement 2.2.17| 下拉框出现的位置| enum| bottom-start |
| fallback-placements 2.5.6| dropdown 可用的 positions 请查看popper.js 文档| arrary| ['bottom-start', 'top-start', 'right', 'left'] |
| max-collapse-tags 2.3.0| 需要显示的 Tag 的最大数量 只有当 collapse-tags 设置为 true 时才会生效。| number| 1 |
| popper-options| popper.js 参数| objectrefer to popper.js doc| {} |
| aria-label a11y| 等价于原生 input aria-label 属性| string| — |
#### 事件

| 事件名| 说明| Type |
| :--- | :--- | :--- |
| change| 选中值发生变化时触发| Function |
| visible-change| 下拉框出现/隐藏时触发| Function |
| remove-tag| 多选模式下移除tag时触发| Function |
| clear| 可清空的单选模式下用户点击清空按钮时触发| Function |
| blur| 当 input 失去焦点时触发| Function |
| focus| 当 input 获得焦点时触发| Function |

#### Select Slots

| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| default| option 组件列表| Option Group / Option |
| header 2.4.3| 下拉列表顶部的内容| — |
| footer 2.4.3| 下拉列表底部的内容| — |
| prefix| Select 组件头部内容| — |
| empty| 无选项时的列表| — |
| tag 2.5.0| select 组件自定义标签内容| — |
| loading 2.5.2| select 组件自定义 loading内容| — |

#### Select Exposes

| Method| 说明| 类型 |
| :--- | :--- | :--- |
| focus| 使选择器的输入框获取焦点| Function |
| blur| 使选择器的输入框失去焦点，并隐藏下拉框| Function |
`,
  "el-option": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/select.html)
#### 属性

| 插槽名| 说明| Type| Default |
| :--- | :--- | :--- | :--- |
| label| 分组的名称| string| — |
| disabled| 是否将该分组下所有选项置为禁用| boolean| false |

#### Option Group Slots

| 属性名| 说明| Subtags |
| :--- | :--- | :--- |
| default| 自定义默认内容| Option |

#### 属性

| 名称| 详情| Type| Default |
| :--- | :--- | :--- | :--- |
| value| 选项的值| string / number / boolean / object| — |
| label| 选项的标签，若不设置则默认与value相同| string / number| — |
| disabled| 是否禁用该选项| boolean| false |

#### Option Slots

| Name| 说明 |
| :--- | :--- |
| default| 默认插槽内容 |

#### 源代码

#### 贡献者
`,
  "el-select-v2": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/select-v2.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| string / number / boolean / object / array| — |
| options| 选项的数据源， value 的 key 和 label 可以通过 props自定义.| array| — |
| props 2.4.2| 配置选项，具体看下表| object| — |
| multiple| 是否多选| boolean| false |
| disabled| 是否禁用| boolean| false |
| value-key| 作为 value 唯一标识的键名，绑定值为对象类型时必填| string| value |
| size| 组件大小| enum| '' |
| clearable| 是否可以清空选项| boolean| false |
| clear-icon| 自定义清除图标| string / object| CircleClose |
| collapse-tags| 多选时是否将选中值按文字的形式展示| boolean| false |
| multiple-limit| 多选时可被选择的最大数目。 当被设置为0时，可被选择的数目不设限。| number| 0 |
| name| 选择器的原生name属性| string| — |
| effect| tooltip 主题，内置了 dark / light 两种| enum / string| light |
| autocomplete| 自动完成选择输入| string| off |
| placeholder| 占位文字| string| Please select |
| filterable| 是否可筛选| boolean| false |
| allow-create| 是否允许创建新条目， 当使用该属性时，filterable必须设置为true| boolean| false |
| filter-method| 自定义筛选方法| Function| — |
| loading| 是否从远程加载数据| boolean| false |
| loading-text| 从服务器加载数据时显示的文本，默认为“Loading”| string| — |
| reserve-keyword| 筛选时，是否在选择选项后保留关键字| boolean| true |
| no-match-text| 搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置，默认是 “No matching data'”| string| — |
| no-data-text| 当在没有数据时显示的文字，你同时可以使用empty插槽进行设置。| string| No Data |
| popper-class| 选择器下拉菜单的自定义类名| string| '' |
| popper-append-to-body deprecated| 是否将弹出框插入至 body 元素 当弹出框的位置出现问题时，你可以尝试将该属性设置为false。| boolean| false |
| teleported| 是否将下拉列表元素插入 append-to 指向的元素下| boolean| true |
| persistent| 当下拉选择器未被激活并且persistent设置为false，选择器会被删除。| boolean| true |
| popper-options| popper.js parameters| objectrefer to popper.js doc| {} |
| automatic-dropdown| 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单| boolean| false |
| height| 下拉菜单的高度，每一个选项为34px| number| 274 |
| item-height| 下拉项的高度| number| 34 |
| scrollbar-always-on| 是否总是展示滚动条| boolean| false |
| remote| 是否从服务器获取数据| boolean| false |
| remote-method| 当输入值发生变化时触发的函数。 它的参数就是当前的输入值。 当filterable设置为 true 时才会生效| Function| — |
| validate-event| 是否触发表单验证| boolean| true |
| placement| 下拉框出现的位置| enum| bottom-start |
| fallback-placements 2.5.6| dropdown 可用的 positions 请查看popper.js 文档| arrary| ['bottom-start', 'top-start', 'right', 'left'] |
| collapse-tags-tooltip 2.3.0| 当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 只有当 collapse-tags 设置为 true 时才会生效。| boolean| false |
| max-collapse-tags 2.3.0| 需要显示的 Tag 的最大数量 只有当 collapse-tags 设置为 true 时才会生效。| number| 1 |
| tag-type 2.5.0| 标签类型| enum| info |
| aria-label a11y 2.5.0| 等价于原生 input aria-label 属性| string| — |

#### props

| Attribute| 说明| Type| Default |
| :--- | :--- | :--- | :--- |
| value| 指定选项的值为选项对象的某个属性值| string| value |
| label| 指定节点标签为节点对象的某个属性值| string| label |
| options| 指定选项的子选项为选项对象的某个属性值| string| options |
| disabled| 指定选项的禁用为选项对象的某个属性值| string| disabled |
#### 事件

| 插槽名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 当所选值更改时触发，参数是当前选中的值| Function |
| visible-change| 当下拉菜单出现/消失时触发器, 当它出现时, 参数将是真的, 否则将是假的| Function |
| remove-tag| 当一个标签在多个模式下被移除时触发，参数将被移除标签值| Function |
| clear| 可清空的单选模式下用户点击清空按钮时触发| Function |
| blur| 当选择器的输入框失去焦点时触发| Function |
| focus| 当选择器的输入框获得焦点时触发| Function |

#### Slots

| 名称| 详情 |
| :--- | :--- |
| default| 自定义 Option 模板 |
| header 2.5.2| 下拉列表顶部的内容 |
| footer 2.5.2| 下拉列表底部的内容 |
| empty| 自定义当选项为空时的内容 |
| prefix| 输入框的前缀 |
| tag 2.5.0| select 组件自定义标签内容 |
| loading 2.5.2| select 组件自定义 loading内容 |

#### Exposes

| 方法| 描述| 类型 |
| :--- | :--- | :--- |
| focus| 使选择器的输入框获取焦点| Function |
| blur| 使选择器的输入框失去焦点，并隐藏下拉框| Function |

#### 源代码

#### 贡献者
`,
  "el-slider": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/slider.html)
#### 属性

| 属性名| 描述| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| number / object| 0 |
| min| 最小值| number| 0 |
| max| 最大值| number| 100 |
| disabled| 是否禁用| boolean| false |
| step| 步长| number| 1 |
| show-input| 是否显示输入框，仅在非范围选择时有效| boolean| false |
| show-input-controls| 在显示输入框的情况下，是否显示输入框的控制按钮| boolean| true |
| size| slider 包装器的大小，垂直模式下该属性不可用| enum| default |
| input-size| 输入框的大小，如果设置了 size 属性，默认值自动取 size| enum| default |
| show-stops| 是否显示间断点| boolean| false |
| show-tooltip| 是否显示提示信息| boolean| true |
| format-tooltip| 格式化提示信息| Function| — |
| range| 是否开启选择范围| boolean| false |
| vertical| 垂直模式| boolean| false |
| height| 滑块高度，垂直模式必填| string| — |
| label| 屏幕阅读器标签| string| — |
| range-start-label| 当 range 为true时，屏幕阅读器标签开始的标记| string| — |
| range-end-label| 当 range 为true时，屏幕阅读器标签结尾的标记| string| — |
| format-value-text| 显示屏幕阅读器的 aria-valuenow 属性的格式| Function| — |
| debounce| 输入时的去抖延迟，毫秒，仅在 show-input 等于 true 时有效| number| 300 |
| tooltip-class| tooltip 的自定义类名| string| — |
| placement| Tooltip 出现的位置| enum| top |
| marks| 标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式| object| — |
| validate-event| 输入时是否触发表单的校验| boolean| true |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）| Function |
| input| 数据改变时触发（使用鼠标拖曳时，活动过程实时触发）| Function |

#### 类型声明

#### 源代码

#### 贡献者
`,
  "el-switch": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/switch.html)
#### 属性

| 属性名| 说明| 类型| Default |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 绑定值，必须等于 active-value 或 inactive-value，默认为 Boolean 类型| boolean / string / number| false |
| disabled| 是否禁用| boolean| false |
| loading| 是否显示加载中| boolean| false |
| size| switch 的大小| enum| '' |
| width| switch 的宽度| number / string| '' |
| inline-prompt| 无论图标或文本是否显示在点内，只会呈现文本的第一个字符| boolean| false |
| active-icon| switch 状态为 on 时所显示图标，设置此项会忽略 active-text| string / Component| — |
| inactive-icon| switch 状态为 off 时所显示图标，设置此项会忽略 inactive-text| string / Component| — |
| active-action-icon 2.3.9| on状态下显示的图标组件| string / Component| — |
| inactive-action-icon 2.3.9| off状态下显示的图标组件| string / Component| — |
| active-text| switch 打开时的文字描述| string| '' |
| inactive-text| switch 的状态为 off 时的文字描述| string| '' |
| active-value| switch 状态为 on 时的值| boolean / string / number| true |
| inactive-value| switch的状态为 off 时的值| boolean / string / number| false |
| active-color deprecated| 当在 on 状态时的背景颜色(已废弃，请使用 CSS var --el-switch-on-color )| string| '' |
| inactive-color deprecated| off 状态时的背景颜色(已废弃，使用 CSS var --el-switch-off-color )| string| '' |
| border-color deprecated| 开关的边框颜色 ( 已废弃，使用 CSS var --el-switch-border-color )| string| '' |
| name| switch 对应的 name 属性| string| '' |
| validate-event| 是否触发表单验证| boolean| true |
| before-change| switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换| boolean / Function| — |
| id| input 的 id| string| — |
| tabindex| input 的 tabindex| string / number| — |
| label 2.4.1 a11y| 等价于原生 input aria-label 属性| string| — |
#### 事件

| 事件名| 说明| Type |
| :--- | :--- | :--- |
| change| switch 状态发生变化时的回调函数| Function |

#### Switch Slots

| 名称| 说明 |
| :--- | :--- |
| active-action 2.4.4| 自定义 active 行为 |
| inactive-action 2.4.4| 自定义 inactive 行为 |

#### Exposes

| 方法| 详情| Type |
| :--- | :--- | :--- |
| focus| 手动 focus 到 switch 组件| Function |

#### 源代码

#### 贡献者
`,
  "el-time-picker": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/time-picker.html)
#### 属性

| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 绑定值，如果它是数组，长度应该是 2| number / string / object| '' |
| readonly| 完全只读| boolean| false |
| disabled| 禁用| boolean| false |
| editable| 文本框可输入| boolean| true |
| clearable| 是否显示清除按钮| boolean| true |
| size| 输入框尺寸| enum| — |
| placeholder| 非范围选择时的占位内容| string| '' |
| start-placeholder| 范围选择时开始日期的占位内容| string| — |
| end-placeholder| 范围选择时结束日期的占位内容| string| — |
| is-range| 是否为时间范围选择| boolean| false |
| arrow-control| 是否使用箭头进行时间选择| boolean| false |
| popper-class| TimePicker 下拉框的类名| string| '' |
| range-separator| 选择范围时的分隔符| string| '-' |
| format| 显示在输入框中的格式| string see date formats| — |
| default-value| 可选，选择器打开时默认显示的时间| Date / object| — |
| value-format| 可选，绑定值的格式。 不指定则绑定值为 Date 对象| string 参考 日期格式| — |
| id| 等价于原生 input id 属性| string / object| — |
| name| 等价于原生 input name 属性| string| '' |
| label a11y| 等价于原生 input aria-label 属性| string| — |
| prefix-icon| 自定义前缀图标| string / Component| Clock |
| clear-icon| 自定义清除图标| string / Component| CircleClose |
| disabled-hours| 禁止选择部分小时选项| Function| — |
| disabled-minutes| 禁止选择部分分钟选项| Function| — |
| disabled-seconds| 禁止选择部分秒选项| Function| — |
| teleported| 是否将 popover 的下拉列表镜像至 body 元素| boolean| true |
| tabindex| 输入框的 tabindex| string / number| 0 |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 用户确认选定的值时触发| Function |
| blur| 在组件 Input 失去焦点时触发| Function |
| focus| 在组件 Input 获得焦点时触发| Function |
| visible-change| 当 TimePicker 的下拉列表出现/消失时触发| Function |

#### 暴露

| 名称| 说明| Type |
| :--- | :--- | :--- |
| focus| 使 input 获取焦点| Function |
| blur| 使 input 失去焦点| Function |
| handleOpen 2.2.16| 打开时间选择器弹窗| Function |
| handleClose 2.2.16| 关闭时间选择器弹窗| Function |

#### 源代码

#### 贡献者
`,
  "el-time-select": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/time-select.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| string| — |
| disabled| 禁用状态| boolean| false |
| editable| 文本框可输入| boolean| true |
| clearable| 是否显示清除按钮| boolean| true |
| size| 输入框尺寸| enum| default |
| placeholder| 非范围选择时的占位内容| string| — |
| name| 原生属性| string| — |
| effect| Tooltip 主题，内置了 dark / light 两种主题| string / enum| light |
| prefix-icon| 自定义前缀图标| string / Component| Clock |
| clear-icon| 自定义清除图标| string / Component| CircleClose |
| start| 开始时间| string| 09:00 |
| end| 结束时间| string| 18:00 |
| step| 间隔时间| string| 00:30 |
| min-time| 最早时间点，早于该时间的时间段将被禁用| string| — |
| max-time| 最晚时间点，晚于该时间的时间段将被禁用| string| — |
| format| 设置时间格式| string see formats| HH:mm |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 用户确认选定的值时触发| Function |
| blur| 在组件 Input 失去焦点时触发| Function |
| focus| 在组件 Input 获得焦点时触发| Function |

#### Exposes

| 方法名| 说明| 类型 |
| :--- | :--- | :--- |
| focus| 使 input 获取焦点| Function |
| blur| 使 input 失去焦点| Function |

#### 源代码

#### 贡献者
`,
  "el-transfer": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/transfer.html)
#### 属性

| 属性名| 说明| 类型| Default |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| object| [] |
| data| Transfer 的数据源| object| [] |
| filterable| 是否可搜索| boolean| false |
| filter-placeholder| 搜索框占位符| string| — |
| filter-method| 自定义搜索方法| Function| — |
| target-order| 右侧列表元素的排序策略： 若为 original，则保持与数据源相同的顺序； 若为 push，则新加入的元素排在最后； 若为 unshift，则新加入的元素排在最前| enum| original |
| titles| 自定义列表标题| object| [] |
| button-texts| 自定义按钮文案| object| [] |
| render-content| 自定义数据项渲染函数| object| — |
| format| 列表顶部勾选状态文案| object| {} |
| props| 数据源的字段别名| object| — |
| left-default-checked| 初始状态下左侧列表的已勾选项的 key 数组| object| [] |
| right-default-checked| 初始状态下右侧列表的已勾选项的 key 数组| object| [] |
| validate-event| 是否触发表单验证| boolean| true |
#### 事件

| 插槽名| 说明| Type |
| :--- | :--- | :--- |
| change| 右侧列表元素变化时触发| Function |
| left-check-change| 左侧列表元素被用户选中 / 取消选中时触发| Function |
| right-check-change| 右侧列表元素被用户选中 / 取消选中时触发| Function |

#### Slots

| Name| 说明 |
| :--- | :--- |
| default| 自定义数据项的内容， The scope parameter is |
| left-footer| 左侧列表底部的内容 |
| right-footer| 右侧列表底部的内容 |

#### Exposes

| Method| 说明| Type |
| :--- | :--- | :--- |
| clearQuery| 清空某个面板的搜索关键词| Function |

#### Type Declarations

#### 源代码

#### 贡献者
`,
  "el-upload": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/upload.html)
#### 属性

| 名称| 描述| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| action required| 请求 URL| string| # |
| headers| 设置上传的请求头部| object| — |
| method| 设置上传请求方法| string| post |
| multiple| 是否支持多选文件| boolean| false |
| data| 上传时附带的额外参数 从 v2.3.13 支持 Awaitable 数据，和 Function| object / Function| {} |
| name| 上传的文件字段名| string| file |
| with-credentials| 支持发送 cookie 凭证信息| boolean| false |
| show-file-list| 是否显示已上传文件列表| boolean| true |
| drag| 是否启用拖拽上传| boolean| false |
| accept| 接受上传的文件类型（thumbnail-mode 模式下此参数无效）| string| '' |
| crossorigin| 原生属性 crossorigin| enum| — |
| on-preview| 点击文件列表中已上传的文件时的钩子| Function| — |
| on-remove| 文件列表移除文件时的钩子| Function| — |
| on-success| 文件上传成功时的钩子| Function| — |
| on-error| 文件上传失败时的钩子| Function| — |
| on-progress| 文件上传时的钩子| Function| — |
| on-change| 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用| Function| — |
| on-exceed| 当超出限制时，执行的钩子函数| Function| — |
| before-upload| 上传文件之前的钩子，参数为上传的文件， 若返回false或者返回 Promise 且被 reject，则停止上传。| Function| — |
| before-remove| 删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。| Function| — |
| file-list / v-model:file-list| 默认上传文件| object| [] |
| list-type| 文件列表的类型| enum| text |
| auto-upload| 是否自动上传文件| boolean| true |
| http-request| 覆盖默认的 Xhr 行为，允许自行实现上传文件的请求| Function| 请参考ajaxUpload |
| disabled| 是否禁用上传| boolean| false |
| limit| 允许上传文件的最大数量| number| — |

#### 插槽

| 名称| 描述| 类型 |
| :--- | :--- | :--- |
| default| 自定义默认内容| - |
| trigger| 触发文件选择框的内容| - |
| tip| 提示说明文字| - |
| file| 缩略图模板的内容| object |

| 名称| 描述| 类型 |
| :--- | :--- | :--- |
| abort| 取消上传请求| Function |
| submit| 手动上传文件列表| Function |
| clearFiles| 清空已上传的文件列表（该方法不支持在 before-upload 中调用）| Function |
| handleStart| 手动选择文件| Function |
| handleRemove| 手动移除文件。 file 和rawFile 已被合并。 rawFile 将在 v2.2.0 中移除| Function |

#### 类型声明

#### 源代码

#### 贡献者
`,
  "el-avatar": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/avatar.html)
#### 属性

| 名称| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| icon| 设置 Avatar 的图标类型，具体参考 Icon 组件| string / Component| — |
| size| Avatar 大小| number / enum| default |
| shape| Avatar 形状| enum| circle |
| src| Avatar 图片的源地址| string| — |
| src-set| 图片 Avatar 的原生 srcset 属性| string| — |
| alt| 图片 Avatar 的原生 alt 属性| string| — |
| fit| 当展示类型为图片的时候，设置图片如何适应容器| enum| cover |
#### 事件

| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| error| 图片加载失败时触发| Function |

#### Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义头像展示内容 |

#### 源代码

#### 贡献者
`,
  "el-badge": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/badge.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| value| 显示值| string / number| '' |
| max| 最大值，超过最大值会显示 {max}+。 只有当 value 是数字类型时起作用。| number| 99 |
| is-dot| 是否显示小圆点。| boolean| false |
| hidden| 是否隐藏 Badge。| boolean| false |
| type| badge type.| enum| danger |
| show-zero 2.6.0| 值为零时是否显示 Badge| boolean| true |

#### Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |

#### 源代码

#### 贡献者
`,
  "el-calendar": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/calendar.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 选中项绑定值| Date| — |
| range| 时间范围，包括开始时间与结束时间。 开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。| array| — |

#### Slots

| 插槽名| 说明| 类型 |
| :--- | :--- | :--- |
| date-cell| type 表示该日期的所属月份，可选值有 prev-month、current-month 和 next-month；isSelected 标明该日期是否被选中；day 是格式化的日期，格式为 yyyy-MM-dd；date 是单元格的日期| object |
| header| 卡片标题内容| object |

#### 源代码

#### 贡献者
`,
  "el-card": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/card.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| header| 卡片的标题 你既可以通过设置 header 来修改标题，也可以通过 slot#header 传入 DOM 节点| string| — |
| footer 2.4.3| 卡片页脚。 你既可以通过设置 header 来修改标题，也可以通过 slot#footer 传入 DOM 节点| string| — |
| body-style| body 的 CSS 样式| object| — |
| body-class 2.3.10| body 的自定义类名| string| — |
| shadow| 卡片阴影显示时机| enum| always |

#### Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
| header| 卡片标题内容 |
| footer| 卡片页脚内容 |

#### 源代码

#### 贡献者
`,
  "el-carousel": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/carousel.html)
#### 属性

| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| height| carousel 的高度| string| —| — |
| initial-index| 初始状态激活的幻灯片的索引，从 0 开始| number| —| 0 |
| trigger| 指示器的触发方式| string| hover/click| hover |
| autoplay| 是否自动切换| boolean| —| true |
| interval| 自动切换的时间间隔，单位为毫秒| number| —| 3000 |
| indicator-position| 指示器的位置| string| outside/none| — |
| arrow| 切换箭头的显示时机| string| always/hover/never| hover |
| type| carousel 的类型| string| card| — |
| loop| 是否循环显示| boolean| -| true |
| direction| 展示的方向| string| horizontal/vertical| horizontal |
| pause-on-hover| 鼠标悬浮时暂停自动切换| boolean| -| true |
| motion-blur 2.6.0| 添加动态模糊以给走马灯注入活力和流畅性。| boolean| -| false |
#### 事件

| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| change| 幻灯片切换时触发| 目前激活的幻灯片的索引，原幻灯片的索引 |

| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| setActiveItem| 手动切换幻灯片| 需要切换的幻灯片的索引，从 0 开始；或相应 el-carousel-item 的 name 属性值 |
| prev| 切换至上一张幻灯片| — |
| next| 切换至下一张幻灯片| — |

#### Carousel Slots

| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| -| 自定义默认内容| Carousel-Item |
#### 属性

| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| name| 幻灯片的名字，可用作 setActiveItem 的参数| string| —| — |
| label| 该幻灯片所对应指示器的文本| string| —| — |

#### Carousel-Item Slots

| 插槽名| 说明 |
| :--- | :--- |
| —| 自定义默认内容 |

#### 源代码

#### 贡献者
`,
  "el-collapse": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/collapse.html)

#### 属性

| 属性名| 详情| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 当前活动面板，在手风琴模式下其类型是string，在其他模式下是array| string / array| [] |
| accordion| 是否手风琴模式| boolean| boolean |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 切换当前活动面板，在手风琴模式下其类型是string，在其他模式下是array| Function |

#### Collapse Slots

| 插槽名| Description| 子标签 |
| :--- | :--- | :--- |
| default| 自定义默认内容| Collapse Item |

#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| name| 唯一标志符| string / number| — |
| title| 面板标题| string| '' |
| disabled| 是否禁用| boolean| false |

#### Collapse Item Slot

| 插槽名| 说明 |
| :--- | :--- |
| default| Collapse Item 的内容 |
| title| Collapse Item 的标题 |

#### 源代码

#### 贡献者
`,
  "el-descriptions": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/descriptions.html)

#### 属性

| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| border| 是否带有边框| boolean| false |
| column| 一行 Descriptions Item 的数量| number| 3 |
| direction| 排列的方向| enum| horizontal |
| size| 列表的尺寸| enum| — |
| title| 标题文本，显示在左上方| string| '' |
| extra| 操作区文本，显示在右上方| string| '' |

#### Descriptions Slots

| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| default| 自定义默认内容| Descriptions Item |
| title| 自定义标题，显示在左上方| — |
| extra| 自定义操作区，显示在右上方| — |
`,
  "el-descriptions-item": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/descriptions.html)
#### 属性

| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| label| 标签文本| string| '' |
| span| 列的数量| number| 1 |
| width| 列的宽度，不同行相同列的宽度按最大值设定（如无 border ，宽度包含标签与内容）| string / number| '' |
| min-width| 列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列（如无 border，宽度包含标签与内容）| string / number| '' |
| align| 列的内容对齐方式（如无 border，对标签和内容均生效）| enum| left |
| label-align| 列的标签对齐方式，若不设置该项，则使用内容的对齐方式（如无 border，请使用 align 参数）| enum| '' |
| class-name| 列的内容自定义类名| string| '' |
| label-class-name| column label custom class name| string| '' |

#### DescriptionsItem Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
| label| 自定义标签 |

#### 源代码

#### 贡献者
`,
  "el-empty": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/empty.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| image| empty 组件的图像地址| string| '' |
| image-size| empty 组件的图像尺寸（宽度）| number| — |
| description| empty 组件的描述信息| string| '' |

#### 插槽

| 插槽名| 描述说明 |
| :--- | :--- |
| default| 作为底部内容的内容 |
| image| 作为图像的内容 |
| description| 作为描述的内容 |

#### 源代码

#### 贡献者
`,
  "el-image": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/image.html)

#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| src| 图片源地址，同原生属性一致| string| '' |
| fit| 确定图片如何适应容器框，同原生 object-fit| enum| '' |
| hide-on-click-modal| 当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview| boolean| false |
| loading 2.2.3| 浏览器加载图像的策略，和 浏览器原生能力一致| enum| — |
| lazy| 是否使用懒加载| boolean| false |
| scroll-container| 开启懒加载功能后，监听 scroll 事件的容器 默认情况下，开启懒加载功能后，监听 scroll 事件的容器| string / object| — |
| alt| 原生属性 alt| string| — |
| referrerpolicy| 原生属性 referrerPolicy。| string| — |
| crossorigin| 原生属性 crossorigin| enum| — |
| preview-src-list| 开启图片预览功能| object| [] |
| z-index| 设置图片预览的 z-index| number| — |
| initial-index| 初始预览图像索引，小于 url-list 的长度| number| 0 |
| close-on-press-escape| 是否可以通过按下 ESC 关闭 Image Viewer| boolean| true |
| preview-teleported| image-viewer 是否插入至 body 元素上。 嵌套的父元素属性会发生修改时应该将此属性设置为 true| boolean| false |
| infinite| 是否可以无限循环预览| boolean| true |
| zoom-rate| 图像查看器缩放事件的缩放速率。| number| 1.2 |
| min-scale 2.4.0| 图像查看器缩放事件的最小缩放比例| number| 0.2 |
| max-scale 2.4.0| 图像查看器缩放事件的最大缩放比例| number| 7 |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| load| 图片加载成功触发| Function |
| error| 图片加载失败触发| Function |
| switch| 切换图像时触发。| Function |
| close| 当点击 X 按钮或者在hide-on-click-modal为 true 时点击遮罩层时触发| Function |
| show| 当 Viewer 显示时触发| Function |

#### Image Slots

| 插槽名| 说明 |
| :--- | :--- |
| placeholder| 当图像尚未加载时，自定义的占位符内容 |
| error| 自定义图像加载失败的内容 |
| viewer| 当图像预览时自定义内容 |

#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| url-list| 用于预览的图片链接列表| object| [] |
| z-index| 预览时遮罩层的 z-index| number / string| — |
| initial-index| 初始预览图像索引，小于 url-list 的长度| number| 0 |
| infinite| 是否可以无限循环预览| boolean| true |
| hide-on-click-modal| 是否可以通过点击遮罩层关闭预览| boolean| false |
| teleported| image 自身是否插入至 body 元素上。 嵌套的父元素属性会发生修改时应该将此属性设置为 true| boolean| false |
| zoom-rate 2.2.27| 图像查看器缩放事件的缩放速率。| number| 1.2 |
| min-scale 2.4.0| 图像查看器缩放事件的最小缩放比例| number| 0.2 |
| max-scale 2.4.0| 图像查看器缩放事件的最大缩放比例| number| 7 |
| close-on-press-escape| 是否可以通过按下 ESC 关闭 Image Viewer| boolean| true |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| close| 当点击 X 按钮或者在hide-on-click-modal为 true 时点击遮罩层时触发| Function |
| switch| 切换图像时触发。| Function |
| rotate 2.3.13| 旋转图像时触发。| Function |

#### Image Viewer Exposes

| Name| 说明| Type |
| :--- | :--- | :--- |
| setActiveItem| 手动切换图片| Function |

#### 源代码

#### 贡献者
`,
  "el-pagination": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/pagination.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| small| 是否使用小型分页样式| boolean| false |
| background| 是否为分页按钮添加背景色| boolean| false |
| page-size / v-model:page-size| 每页显示条目个数| number| — |
| default-page-size| 每页默认的条目个数，不设置时默认为10| number| — |
| total| 总条目数| number| — |
| page-count| 总页数， total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性| number| — |
| pager-count| 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠| number| 7 |
| current-page / v-model:current-page| 当前页数| number| — |
| default-current-page| 当前页数的默认初始值，不设置时默认为 1| number| — |
| layout| 组件布局，子组件名用逗号分隔| string| prev, pager, next, jumper, ->, total |
| page-sizes| 每页显示个数选择器的选项设置| object| [10, 20, 30, 40, 50, 100] |
| popper-class| 每页显示个数选择器的下拉框类名| string| '' |
| prev-text| 替代图标显示的上一页文字| string| '' |
| prev-icon| 上一页的图标， 比 prev-text 优先级更高| string / Component| ArrowLeft |
| next-text| 替代图标显示的下一页文字| string| '' |
| next-icon| 下一页的图标， 比 next-text 优先级更低| string / Component| ArrowRight |
| disabled| 是否禁用分页| boolean| false |
| teleported 2.3.13| 是否将下拉菜单teleport至 body| boolean| true |
| hide-on-single-page| 只有一页时是否隐藏| boolean| false |
#### 事件

| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| size-change| page-size 改变时触发| Function |
| current-change| current-page 改变时触发| Function |
| change 2.4.4| current-page 或 page-size 更改时触发| Function |
| prev-click| 用户点击上一页按钮改变当前页时触发| Function |
| next-click| 用户点击下一页按钮改变当前页时触发| Function |

#### 插槽

| 名称| 说明 |
| :--- | :--- |
| default| 自定义内容 设置文案，需要在 layout 中列出 slot |

#### 源代码

#### 贡献者
`,
  "el-progress": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/progress.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| percentage required| percentage| number| 0 |
| type| 进度条类型| enum| line |
| stroke-width| 进度条的宽度| number| 6 |
| text-inside| 进度条显示文字内置在进度条内（仅 type 为 'line' 时可用）| boolean| false |
| status| 进度条当前状态| enum| — |
| indeterminate| 是否为动画进度条| boolean| false |
| duration| 控制动画进度条速度和条纹进度条流动速度| number| 3 |
| color| 进度条背景色 进度条背景色 （会覆盖 status 状态颜色）| string / function / Array| '' |
| width| 环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）| number| 126 |
| show-text| 是否显示进度条文字内容| boolean| true |
| stroke-linecap| circle/dashboard 类型路径两端的形状| enum| round |
| format| 指定进度条文字内容| Function| — |
| striped 2.3.4| 在进度条上增加条纹| boolean| false |
| striped-flow 2.3.4| 让进度条上的条纹流动起来| boolean| false |

#### Slots

| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| default| 自定义内容| object |

#### 源代码

#### 贡献者
`,
  "el-result": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/result.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| title| result 组件的标题| string| '' |
| sub-title| result 组件的副标题| string| '' |
| icon| result 组件的图标类型| enum| info |

#### 插槽

| 名称| 说明 |
| :--- | :--- |
| icon| icon 内容 |
| title| result title 的内容 |
| sub-title| sub title 的内容 |
| extra| 内容额外区域的内容 |

#### 源代码

#### 贡献者
`,
  "el-skeleton": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/skeleton.html)

#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| animated| 是否使用动画| boolean| false |
| count| 渲染多少个 template, 建议使用尽可能小的数字| number| 1 |
| loading| 是否显示加载结束后的 DOM 结构| boolean| false |
| rows| 骨架屏段落数量| number| 3 |
| throttle| 渲染延迟（以毫秒为单位）| number| 0 |

#### Skeleton 插槽

| 插槽名| 说明| 作用域 |
| :--- | :--- | :--- |
| default| 真正渲染的DOM| object |
| template| 渲染 skeleton 模板的内容| object |
`,
  "el-skeleton-item": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/skeleton.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| variant| 当前渲染 skeleton 类型| enum| text |

#### 源代码

#### 贡献者
`,
  "el-table": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/table.html)

#### 属性

| 属性名| 说明| 类型| Default |
| :--- | :--- | :--- | :--- |
| data| 表数据| object| [] |
| height| table 的高度。 默认为自动高度。 如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。| string / number| — |
| max-height| table 的最大高度。 合法的值为数字或者单位为 px 的高度。| string / number| — |
| stripe| 是否为斑马纹 table| boolean| false |
| border| 是否带有纵向边框| boolean| false |
| size| Table 的尺寸| enum| — |
| fit| 列的宽度是否自撑开| boolean| true |
| show-header| 是否显示表头| boolean| true |
| highlight-current-row| 是否要高亮当前行| boolean| false |
| current-row-key| 当前行的 key，只写属性| string / number| — |
| row-class-name| 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。| Function / string| — |
| row-style| 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。| Function / object| — |
| cell-class-name| 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。| Function / string| — |
| cell-style| 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。| Function / object| — |
| header-row-class-name| 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。| Function / string| — |
| header-row-style| 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。| Function / object| — |
| header-cell-class-name| 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。| Function / string| — |
| header-cell-style| 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。| Function / object| — |
| row-key| 行数据的 Key，用来优化 Table 的渲染； 在使用reserve-selection功能与显示树形数据时，该属性是必填的。 类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。| function / string| — |
| empty-text| 空数据时显示的文本内容， 也可以通过 #empty 设置 也可以通过 #empty 设置| string| No Data |
| default-expand-all| 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效| boolean| false |
| expand-row-keys| 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。| object| — |
| default-sort| 默认的排序列的 prop 和顺序。 它的 prop 属性指定默认的排序的列，order 指定默认排序的顺序| object| if prop is set, and order is not set, then order is default to ascending |
| tooltip-effect| 溢出的 tooltip 的 effect| enum| dark |
| tooltip-options 2.2.28| 溢出 tooltip 的选项，参见下述 tooltip 组件| object| object |
| show-summary| 是否在表尾显示合计行| boolean| false |
| sum-text| 显示摘要行第一列的文本| string| Sum |
| summary-method| 自定义的合计计算方法| Function| — |
| span-method| 合并行或列的计算方法| Function| — |
| select-on-indeterminate| 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。 若为 true，则选中所有行；若为 false，则取消选择所有行| boolean| true |
| indent| 展示树形数据时，树节点的缩进| number| 16 |
| lazy| 是否懒加载子节点数据| boolean| false |
| load| 加载子节点数据的函数，lazy 为 true 时生效| Function| — |
| tree-props| 渲染嵌套数据的配置选项| object| object |
| table-layout| 设置表格单元、行和列的布局方式| enum| fixed |
| scrollbar-always-on| 总是显示滚动条| boolean| false |
| show-overflow-tooltip| 是否隐藏额外内容并在单元格悬停时使用 Tooltip 显示它们。这将影响全部列的展示。, 详请参考tooltip-options| boolean / object 2.3.7| — |
| flexible 2.2.1| 确保主轴的最小尺寸，以便不超过内容| boolean| false |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| select| 当用户手动勾选数据行的 Checkbox 时触发的事件| Function |
| select-all| 当用户手动勾选全选 Checkbox 时触发的事件| Function |
| selection-change| 当选择项发生变化时会触发该事件| Function |
| cell-mouse-enter| 当单元格 hover 进入时会触发该事件| Function |
| cell-mouse-leave| 当单元格 hover 退出时会触发该事件| Function |
| cell-click| 当某个单元格被点击时会触发该事件| Function |
| cell-dblclick| 当某个单元格被双击击时会触发该事件| Function |
| cell-contextmenu| 当某个单元格被鼠标右键点击时会触发该事件| Function |
| row-click| 当某一行被点击时会触发该事件| Function |
| row-contextmenu| 当某一行被鼠标右键点击时会触发该事件| Function |
| row-dblclick| 当某一行被双击时会触发该事件| Function |
| header-click| 当某一列的表头被点击时会触发该事件| Function |
| header-contextmenu| 当某一列的表头被鼠标右键点击时触发该事件| Function |
| sort-change| 当表格的排序条件发生变化的时候会触发该事件| Function |
| filter-change| column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件| Function |
| current-change| 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性| Function |
| header-dragend| 当拖动表头改变了列的宽度的时候会触发该事件| Function |
| expand-change| 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）| Function |

#### Table 插槽

| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| default| 自定义默认内容| Table-column |
| append| 插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。| — |
| empty| 当数据为空时自定义的内容| — |

#### Table Exposes

| 方法名| 说明| Type |
| :--- | :--- | :--- |
| clearSelection| 用于多选表格，清空用户的选择| Function |
| getSelectionRows| 返回当前选中的行| Function |
| toggleRowSelection| 用于多选表格，切换某一行的选中状态， 如果使用了第二个参数，则可直接设置这一行选中与否| Function |
| toggleAllSelection| 用于多选表格，切换全选和全不选| Function |
| toggleRowExpansion| 用于可扩展的表格或树表格，如果某行被扩展，则切换。 使用第二个参数，您可以直接设置该行应该被扩展或折叠。| Function |
| setCurrentRow| 用于单选表格，设定某一行为选中行， 如果调用时不加参数，则会取消目前高亮行的选中状态。| Function |
| clearSort| 用于清空排序条件，数据会恢复成未排序的状态| Function |
| clearFilter| 传入由columnKey 组成的数组以清除指定列的过滤条件。 如果没有参数，清除所有过滤器| Function |
| doLayout| 对 Table 进行重新布局。 当表格可见性变化时，您可能需要调用此方法以获得正确的布局| Function |
| sort| 手动排序表格。 参数 prop 属性指定排序列，order 指定排序顺序。| Function |
| scrollTo| 滚动到一组特定坐标| Function |
| setScrollTop| 设置垂直滚动位置| Function |
| setScrollLeft| 设置水平滚动位置| Function |
`,
  "el-table-column": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/table.html)
#### 属性

| 属性名| 说明| Type| 默认值 |
| :--- | :--- | :--- | :--- |
| type| 对应列的类型。 如果设置了selection则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； 如果设置了 expand 则显示为一个可展开的按钮| enum| default |
| index| 如果设置了 type=index，可以通过传递 index 属性来自定义索引| number / Function| — |
| label| 显示的标题| string| — |
| column-key| column 的 key， column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件| string| — |
| prop| 字段名称 对应列内容的字段名， 也可以使用 property属性| string| — |
| width| 对应列的宽度| string / number| '' |
| min-width| 对应列的最小宽度， 对应列的最小宽度， 与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列| string / number| '' |
| fixed| 列是否固定在左侧或者右侧。 true 表示固定在左侧| enum / boolean| false |
| render-header| 列标题 Label 区域渲染使用的 Function| Function| — |
| sortable| 对应列是否可以排序， 如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件| boolean / string| false |
| sort-method| 指定数据按照哪个属性进行排序，仅当sortable设置为true的时候有效。 应该如同 Array.sort 那样返回一个 Number| Function| — |
| sort-by| 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。 如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推| Function / string / object| — |
| sort-orders| 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。 需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序| object| ['ascending', 'descending', null] |
| resizable| 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）| boolean| true |
| formatter| 用来格式化内容| function| — |
| show-overflow-tooltip| 当内容过长被隐藏时显示 tooltip| boolean / object 2.2.28| undefined |
| align| 对齐方式| enum| left |
| header-align| 表头对齐方式， 若不设置该项，则使用表格的对齐方式| enum| left |
| class-name| 列的 className| string| — |
| label-class-name| 当前列标题的自定义类名| string| — |
| selectable| 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选| Function| — |
| reserve-selection| 数据刷新后是否保留选项，仅对  type=selection 的列有效， 请注意， 需指定 row-key 来让这个功能生效。| boolean| false |
| filters| 数据过滤的选项， 数组格式，数组中的元素需要有 text 和 value 属性。 数组中的每个元素都需要有 text 和 value 属性。| object| — |
| filter-placement| 过滤弹出框的定位| enum| — |
| filter-class-name 2.5.0| 过滤弹出框的 className| string| — |
| filter-multiple| 数据过滤的选项是否多选| boolean| true |
| filter-method| 数据过滤使用的方法， 如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。| function| — |
| filtered-value| 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。| object| — |

#### Table-column 插槽

| 插槽名| 说明| 类型 |
| :--- | :--- | :--- |
| default| 自定义列的内容| object |
| header| 自定义表头的内容，| object |

#### Type Declarations

#### 常见问题解答（FAQ）

#### 源代码

#### 贡献者
`,
  "el-tag": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/tag.html)

#### 属性

| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| type| Tag 的类型| enum| primary |
| closable| 是否可关闭| boolean| false |
| disable-transitions| 是否禁用渐变动画| boolean| false |
| hit| 是否有边框描边| boolean| false |
| color| 背景色| string| — |
| size| Tag 的尺寸| enum| — |
| effect| Tag 的主题| enum| light |
| round| Tag 是否为圆形| boolean| false |
#### 事件

| 事件名| 说明| Type |
| :--- | :--- | :--- |
| click| 点击 Tag 时触发的事件| Function |
| close| 关闭 Tag 时触发的事件| Function |

#### Tag Slots

| 名称| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |
`,
  "el-check-tag": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/tag.html)
#### 属性

| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| checked / v-model:checked| 是否选中| boolean| false |
| type 2.5.4| CheckTag 类型| enum| primary |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| 点击 Check Tag 时触发的事件| Function |

#### CheckTag Slots

| 名称| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |

#### 源代码

#### 贡献者
`,
  "el-timeline": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/timeline.html)


#### Timeline Slots

| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| default| timeline 组件的自定义默认内容| Timeline-Item |
`,
  "el-timeline--item": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/timeline.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| timestamp| 时间戳| string| '' |
| hide-timestamp| 是否隐藏时间戳| boolean| false |
| center| 是否垂直居中| boolean| false |
| placement| 时间戳位置| enum| bottom |
| type| 节点类型| enum| '' |
| color| 节点颜色| enum| '' |
| size| 节点尺寸| enum| normal |
| icon| 自定义图标| string / Component| — |
| hollow| 是否空心点| boolean| false |

#### Timeline-Item Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| customize default content for timeline item |
| dot| customize defined node for timeline item |

#### 源代码

#### 贡献者
`,
  "el-tour": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/tour.html)

#### 属性

| 属性| 描述| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| show-arrow| 是否显示箭头| boolean| true |
| placement| 引导卡片相对于目标元素的位置| enum| bottom |
| content-style| 为content自定义样式| CSSProperties| - |
| mask| 是否启用遮罩，通过自定义属性改变遮罩样式以及填充的颜色| boolean | Object| true |
| type| 类型，影响底色与文字颜色| default | primary| default |
| model-value / v-model| 打开引导| boolean| * |
| current / v-model:current| 当前值| number| - |
| scroll-into-view-options| 是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数| boolean | ScrollIntoViewOptions| Object |
| z-index| Tour 的层级| number| 2001 |
| show-close| 是否显示关闭按钮| boolean| true |
| close-icon| 自定义关闭图标，默认Close| string | Component| * |
| close-on-press-escape| 是否可以通过按下 ESC 关闭引导| boolean| true |
| target-area-clickable| 启用蒙层时，target 元素区域是否可以点击。| boolean| true |

#### Tour 插槽

| 插槽名| 说明 |
| :--- | :--- |
| default| tourStep 组件列表 |
| indicators| 自定义指示器, scope 参数是 { current, total } |
#### 事件

| 事件名| 描述| 类型 |
| :--- | :--- | :--- |
| close| 关闭引导时的回调函数| Function |
| finish| 引导完成时的回调| Function |
| change| 步骤改变时的回调| Function |
#### 属性

| 属性| 描述| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| target| 获取引导卡片指向的元素， 为空时居中于屏幕。 自2.5.2以来支持字符串和函数类型。 字符串类型是文档.querySelector的选择器。| HTMLElement | string | Function| - |
| show-arrow| 是否显示箭头| boolean| true |
| title| 标题| string| * |
| description| 主要描述部分| string| - |
| placement| 引导卡片相对于目标元素的位置| enum| bottom |
| content-style| 为content自定义样式| CSSProperties| * |
| mask| 是否启用蒙层，也可传入配置改变蒙层样式和填充色| boolean | Object| true |
| type| 类型，影响底色与文字颜色| default | primary| default |
| next-button-props| “下一步”按钮的属性| Object| - |
| prev-button-props| “上一步”按钮的属性| Object| * |
| scroll-into-view-options| 是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数，默认跟随 Tour 的 scrollIntoViewOptions 属性| boolean | ScrollIntoViewOptions| - |
| show-close| 是否显示关闭按钮| boolean| true |
| close-icon| 自定义关闭图标，默认Close| string | Component| * |

#### TourStep 插槽

| 插槽名| 描述 |
| :--- | :--- |
| default| 主要描述部分 |
| header| 头部 |
#### 事件

| 事件名| 描述| 参数 |
| :--- | :--- | :--- |
| close| 关闭引导时的回调函数| Function |

#### 源代码

#### 贡献者
`,
  "el-tree-select": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/tree-select.html)
#### 属性

| 属性| 方法| 事件| 插槽 |
| :--- | :--- | :--- | :--- |
| tree| tree| tree| tree |
| select| select| select| select |
#### 属性

| 属性名| 详情| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| cacheData 2.2.26| 懒加载节点的缓存数据，结构与数据相同，用于获取未加载数据的标签| object| [] |

#### 类型声明

#### 源代码

#### 贡献者
`,
  "el-statistic": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/statistic.html)

#### 属性

| Attribute| 描述| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| value| 数字内容| number| 0 |
| decimal-separator| 设置小数点符号| string| . |
| formatter| 自定义数字格式化| Function| — |
| group-separator| 设置千分位标识符| string| , |
| precision| 数字精度| number| 0 |
| prefix| 设置数字的前缀| string| — |
| suffix| 设置数字的后缀| string| — |
| title| 数字标题| string| — |
| value-style| 数字样式| string / object| — |

#### Statistic 插槽

| 插槽名| 详情 |
| :--- | :--- |
| prefix| 数字区之前 |
| suffix| 数字区之后 |
| title| 数字标题 |

#### Statistic Exposes

| 名称| 描述| 类型 |
| :--- | :--- | :--- |
| displayValue| 当前显示值| object |
`,
  "el-countdown": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/statistic.html)
#### 属性

| 属性| 详情| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| value| 目标时间| number / Dayjs| — |
| format| 格式化倒计时| string| HH:mm:ss |
| prefix| 设置倒计时前缀| string| — |
| suffix| 设置倒计时的后缀| string| — |
| title| 倒计时标题| string| — |
| value-style| 倒计时值的样式| string / object| — |
#### 事件

| 方法| 描述| 类型 |
| :--- | :--- | :--- |
| change| 时间差改变事件| Function |
| finish| 倒计时结束事件| Function |

#### Countdown 插槽

| 事件名| 描述 |
| :--- | :--- |
| prefix| 倒计时值前缀 |
| suffix| 倒计时后缀 |
| title| 倒计时标题 |

#### Countdown Exposes

| 名称| 详情| 类型 |
| :--- | :--- | :--- |
| displayValue| 当前显示值| object |

#### 源代码

#### 贡献者
`,
  "el-affix": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/affix.html)
#### 属性

| 名称| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| offset| 偏移距离| number| 0 |
| position| 固钉位置| enum| top |
| target| 指定容器（CSS 选择器）| string| — |
| z-index| z-index| number| 100 |
#### 事件

| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| change| 固钉状态改变时触发的事件| Function |
| scroll| 滚动时触发的事件| Function |

#### 插槽

| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |

#### 暴露

| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| update| 手动更新固钉状态| Function |
| updateRoot| 手动更新根元素的盒模型信息| Function |

#### 源代码

#### 贡献者
`,
  "el-anchor": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/anchor.html)

#### 属性

| 属性| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| container| 滚动的容器| string | HTMLElement | Window | — |
| offset| 设置锚点滚动的偏移量| number| 0 |
| bound| 触发锚点的元素的位置偏移量| number| 15 |
| duration| 设置容器滚动持续时间，单位为毫秒。| number| 300 |
| marker| 是否显示标记| boolean| true |
| type| 设置锚点类型| enum| default |
| direction| 设置锚点方向| enum| vertical |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| change| step 改变时的回调| Function |
| click| 当用户点击链接时触发| Function |

| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| scrollTo| 手动滚动到特定位置。| Function |

#### Anchor Slots

| 名称| 说明 |
| :--- | :--- |
| default| AnchorLink 组件列表 |
#### 属性

| 属性| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| title| 链接的文本内容。| string| — |
| href| 链接的地址。| string| - |

#### AnchorLink Slots

| 名称| 说明 |
| :--- | :--- |
| default| 链接的内容 |
| sub-link| 子链接的槽位。 |

#### 源代码

#### 贡献者
`,
  "el-backtop": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/backtop.html)
#### 属性

| 名称| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| target| 触发滚动的对象| string| — |
| visibility-height| 滚动高度达到此参数值才出现| number| 200 |
| right| 控制其显示位置，距离页面右边距| number| 40 |
| bottom| 控制其显示位置，距离页面底部距离| number| 40 |
#### 事件

| 名称| 说明| 回调参数 |
| :--- | :--- | :--- |
| click| 点击按钮触发的事件| Function |

#### Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |

#### 源代码

#### 贡献者
`,
  "el-breadcrumb": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/breadcrumb.html)

#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| separator| 分隔符| string| / |
| separator-icon| 图标分隔符的组件或组件名| string / Component| — |

#### Breadcrumb Slots

| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| default| 自定义默认内容| Breadcrumb Item |
`,
  "el-breadcrumb-item": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/breadcrumb.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| to| 路由跳转目标，同 vue-router 的 to 属性| string / object| '' |
| replace| 如果设置该属性为 true, 导航将不会留下历史记录| boolean| false |

#### BreadcrumbItem Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| 自定义默认内容 |

#### 源代码

#### 贡献者
`,
  "el-dropdown": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/dropdown.html)
#### 属性

| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type| 菜单按钮类型，同 Button 组件一样，仅在 split-button 为 true 的情况下有效。| string| —| — |
| size| 菜单尺寸，在 split-button 为 true 的情况下也对触发按钮生效。| string| large / default / small| default |
| max-height| 菜单最大高度| string / number| —| — |
| split-button| 下拉触发元素呈现为按钮组| boolean| —| false |
| disabled| 是否禁用| boolean| —| false |
| placement| 菜单弹出位置| string| top/top-start/top-end/bottom/bottom-start/bottom-end| bottom |
| trigger| 触发下拉的行为| string| hover/click/contextmenu| hover |
| hide-on-click| 是否在点击菜单项后隐藏菜单| boolean| —| true |
| show-timeout| 展开下拉菜单的延时，仅在 trigger 为 hover 时有效| number| —| 250 |
| hide-timeout| 收起下拉菜单的延时（仅在 trigger 为 hover 时有效）| number| —| 150 |
| role| 下拉菜单的 ARIA 属性。 根据具体场景，您可能想要将此更改为“navigation”| string| —| 'menu' |
| tabindex| Dropdown 组件的 tabindex| number| —| 0 |
| popper-class| 自定义浮层类名| string| —| — |
| popper-options| popper.js 参数| Object| 请参考 popper.js 文档| {modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]} |
| teleported 2.2.20| 是否将下拉列表插入至 body 元素| boolean| —| true |

#### Dropdown 插槽

| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| —| 下拉菜单的内容。 注意：必须是有效的 html DOM 元素（例如 <span>、<button> 等）或 el-component，以附加监听触发器| — |
| dropdown| 下拉列表，通常是 <el-dropdown-menu> 组件| Dropdown-Menu |
#### 事件

| 事件名| 说明| 参数 |
| :--- | :--- | :--- |
| click| split-button 为 true 时，点击左侧按钮的回调| — |
| command| 点击菜单项触发的事件回调| dropdown-item 的指令 |
| visible-change| 下拉框出现/隐藏时触发| 出现则为 true，隐藏则为 false |

| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| handleOpen| 打开下拉菜单| — |
| handleClose| 关闭下拉菜单| — |

#### Dropdown-Menu Slots

| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| —| 下拉菜单的内容| Dropdown-Item |
#### 属性

| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| command| 派发到command回调函数的指令参数| string/number/object| —| — |
| disabled| 是否禁用| boolean| —| false |
| divided| 是否显示分隔符| boolean| —| false |
| icon| 自定义图标| string | Component| —| — |

#### Dropdown-Item Slots

| 插槽名| 说明 |
| :--- | :--- |
| —| 自定义Dropdown-Item内容 |

#### 源代码

#### 贡献者
`,
  "el-menu": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/menu.html)
#### 属性

| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| mode| 菜单展示模式| string| horizontal / vertical| vertical |
| collapse| 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）| boolean| —| false |
| ellipsis| 是否省略多余的子项（仅在横向模式生效）| boolean| —| true |
| ellipsis-icon 2.4.4| 自定义省略图标 (仅在水平模式下可用)| string | Component| —| — |
| popper-offset 2.4.4| 弹出层的偏移量(对所有子菜单有效)| number| —| 6 |
| background-color| 菜单的背景颜色（十六进制格式）（已被废弃，使用--bg-color）| string| —| #ffffff |
| text-color| 文字颜色（十六进制格式）（已被废弃，使用--text-color）| string| —| #303133 |
| active-text-color| 活动菜单项的文本颜色（十六进制格式）（已被废弃，使用--active-color）| string| —| #409EFF |
| default-active| 页面加载时默认激活菜单的 index| string| —| — |
| default-openeds| 默认打开的 sub-menu 的 index 的数组| Array| —| — |
| unique-opened| 是否只保持一个子菜单的展开| boolean| —| false |
| menu-trigger| 子菜单打开的触发方式，只在 mode 为 horizontal 时有效。| string| hover / click| hover |
| router| 是否启用 vue-router 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转 使用 default-active 来设置加载时的激活项。| boolean| —| false |
| collapse-transition| 是否开启折叠动画| boolean| —| true |
| popper-effect 2.2.26| Tooltip 主题，内置了 dark / light 两种主题| string| dark / light| dark |
| close-on-click-outside 2.4.4| 可选，单击外部时是否折叠菜单| boolean| —| false |
| popper-class 2.5.0| 为 popper 添加类名| string| —| — |
| show-timeout 2.5.0| 菜单出现前的延迟| number| —| 300 |
| hide-timeout 2.5.0| 菜单消失前的延迟| number| —| 300 |

| 方法名| 说明| 参数 |
| :--- | :--- | :--- |
| open| 展开指定的 sub-menu| index: 需要打开的 sub-menu 的 index |
| close| 收起指定的 sub-menu| index: 需要收起的 sub-menu 的 index |
#### 事件

| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| select| 菜单激活回调| index: 选中菜单项的 index, indexPath: 选中菜单项的 index path, item: 选中菜单项, routeResult: vue-router 的返回值（如果 router 为 true） |
| open| sub-menu 展开的回调| index: 打开的 sub-menu 的 index, indexPath: 打开的 sub-menu 的 index path |
| close| sub-menu 收起的回调| index: 收起的 sub-menu 的 index, indexPath: 收起的 sub-menu 的 index path |

#### Menu Slots

| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| —| 自定义默认内容| SubMenu / Menu-Item / Menu-Item-Group |
#### 属性

| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| index| 唯一标志| string| —| — |
| popper-class| 为 popper 添加类名| string| —| — |
| show-timeout| 子菜单出现之前的延迟，(继承 menu 的 show-timeout 配置)| number| —| — |
| hide-timeout| 子菜单消失之前的延迟，(继承 menu 的 hide-timeout 配置)| number| —| — |
| disabled| 是否禁用| boolean| —| false |
| popper-append-to-body deprecated| 是否将弹出菜单插入至 body 元素。 在菜单的定位出现问题时，可尝试修改该属性| boolean| —| 一级子菜单：true / 非一级子菜单：false |
| teleported| 是否将 popup 的下拉列表插入至 body 元素| boolean| —| 一级子菜单：true / 非一级子菜单：false |
| popper-offset| 弹出窗口的偏移量 (覆盖 popper的菜单)| number| —| — |
| expand-close-icon| 父菜单展开且子菜单关闭时的图标， expand-close-icon 和 expand-open-icon 需要一起配置才能生效| string | Component| —| — |
| expand-open-icon| 父菜单展开且子菜单打开时的图标， expand-open-icon 和 expand-close-icon 需要一起配置才能生效| string | Component| —| — |
| collapse-close-icon| 父菜单收起且子菜单关闭时的图标， expand-close-icon 和 expand-open-icon 需要一起配置才能生效| string | Component| —| — |
| collapse-open-icon| 父菜单收起且子菜单打开时的图标， expand-open-icon 和 expand-close-icon 需要一起配置才能生效| string | Component| —| — |

#### SubMenu Slots

| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| —| 自定义默认内容| SubMenu / Menu-Item / Menu-Item-Group |
| title| 自定义标题内容| — |
#### 属性

| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| index| 唯一标志| string/null| —| null |
| route| Vue Router 路径对象| object| —| — |
| disabled| 是否禁用| boolean| —| false |
#### 事件

| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| click| 菜单点击时的回调函数| el-menu-item 实例 |

#### Menu-Item Slots

| 插槽名| 说明 |
| :--- | :--- |
| —| 自定义默认内容 |
| title| 自定义标题内容 |
#### 属性

| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| title| 组标题| string| —| — |

#### Menu-Item-Group Slots

| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| —| 默认插槽内容| Menu-Item |
| title| 自定义组标题内容| — |

#### 源代码

#### 贡献者
`,
  "el-page-header": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/page-header.html)
#### 属性

| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| icon| Page Header 的图标 Icon 组件| string / Component| Back |
| title| Page Header 的主标题，默认是 Back (内置 a11y)| string| '' |
| content| Page Header 的内容| string| '' |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| back| 点击左侧区域触发| Function |

#### 插槽

| 名称| 说明 |
| :--- | :--- |
| icon| 图标内容 |
| title| 标题内容 |
| content| 内容 |
| extra| 扩展设置 |
| breadcrumb| 面包屑导航内容 |
| default| 默认内容 |

#### 源代码

#### 贡献者
`,
  "el-steps": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/steps.html)

#### 属性

| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| space| 每个 step 的间距，不填写将自适应间距。 支持百分比。| number / string| '' |
| direction| 显示方向| enum| horizontal |
| active| 设置当前激活步骤| number| 0 |
| process-status| 设置当前步骤的状态| enum| process |
| finish-status| 设置结束步骤的状态| enum| finish |
| align-center| 进行居中对齐| boolean| — |
| simple| 是否应用简洁风格| boolean| — |

#### Steps 插槽

| 插槽名| 说明| 子标签 |
| :--- | :--- | :--- |
| default| 默认插槽| Step |
`,
  "el-step": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/steps.html)
#### 属性

| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| title| 标题| string| '' |
| description| 描述文案| string| '' |
| icon| Step 组件的自定义图标。 也支持 slot 方式写入| string / Component| — |
| status| 设置当前步骤的状态， 不设置则根据 steps 确定状态| enum| '' |

#### Step 插槽

| 插槽名| 说明 |
| :--- | :--- |
| icon| 自定义图标 |
| title| 自定义标题 |
| description| 自定义描述文案 |

#### 源代码

#### 贡献者
`,
  "el-alert": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/alert.html)

#### 属性

| 名称| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| title| Alert 标题。| string| — |
| type| Alert 类型。| enum| info |
| description| 描述性文本| string| — |
| closable| 是否可以关闭| boolean| true |
| center| 文字是否居中| boolean| false |
| close-text| 自定义关闭按钮文本| string| — |
| show-icon| 是否显示类型图标| boolean| false |
| effect| 主题样式| enum| light |
#### 事件

| 名称| 描述| 类型 |
| :--- | :--- | :--- |
| close| 关闭 Alert 时触发的事件| Function |

#### Slots

| 名称| 描述 |
| :--- | :--- |
| default| Alert 内容描述 |
| title| 标题的内容 |

#### 源代码

#### 贡献者
`,
  "el-dialog": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/dialog.html)
#### 属性

| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 是否显示 Dialog| boolean| — |
| title| Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入| string| '' |
| width| 对话框的宽度，默认值为 50%| string / number| '' |
| fullscreen| 是否为全屏 Dialog| boolean| false |
| top| dialog CSS 中的 margin-top 值，默认为 15vh| string| '' |
| modal| 是否需要遮罩层| boolean| true |
| modal-class| 遮罩的自定义类名| string| — |
| append-to-body| Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true| boolean| false |
| append-to 2.4.3| Dialog 挂载到哪个 DOM 元素 将覆盖 append-to-body| string| body |
| lock-scroll| 是否在 Dialog 出现时将 body 滚动锁定| boolean| true |
| custom-class deprecated| Dialog 的自定义类名| string| '' |
| open-delay| dialog 打开的延时时间，单位毫秒| number| 0 |
| close-delay| drawer 关闭的延时时间，单位毫秒| number| 0 |
| close-on-click-modal| 是否可以通过点击 modal 关闭 Dialog| boolean| true |
| close-on-press-escape| 是否可以通过按下 ESC 关闭 Dialog| boolean| true |
| show-close| 是否显示关闭按钮| boolean| true |
| before-close| 关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候.| Function| — |
| draggable| 为 Dialog 启用可拖拽功能| boolean| false |
| overflow 2.5.4| 拖动范围可以超出可视区| boolean| false |
| center| 是否让 Dialog 的 header 和 footer 部分居中排列| boolean| false |
| align-center 2.2.16| 是否水平垂直对齐对话框| boolean| false |
| destroy-on-close| 当关闭 Dialog 时，销毁其中的元素| boolean| false |
| close-icon| 自定义关闭图标，默认 Close| string / Component| — |
| z-index| 和原生的 CSS 的 z-index 相同，改变 z 轴的顺序| number| — |
| header-aria-level a11y| header 的 aria-level 属性| string| 2 |

#### Slots

| 插槽名| 说明 |
| :--- | :--- |
| —| Dialog 的内容 |
| header| 对话框标题的内容；会替换标题部分，但不会移除关闭按钮。 |
| title deprecated| 与 header 作用相同 请使用 header |
| footer| Dialog 按钮操作区的内容 |
#### 事件

| 事件名| 说明| Type |
| :--- | :--- | :--- |
| open| Dialog 打开的回调| Function |
| opened| Dialog 打开动画结束时的回调| Function |
| close| Dialog 关闭的回调| Function |
| closed| Dialog 关闭动画结束时的回调| Function |
| open-auto-focus| 输入焦点聚焦在 Dialog 内容时的回调| Function |
| close-auto-focus| 输入焦点从 Dialog 内容失焦时的回调| Function |

#### FAQ

#### 源代码

#### 贡献者
`,
  "el-drawer": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/drawer.html)
#### 属性

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model| 是否显示 Drawer| boolean| false |
| append-to-body| Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true| boolean| false |
| lock-scroll| 是否在 Drawer 出现时将 body 滚动锁定| boolean| true |
| before-close| 关闭前的回调，会暂停 Drawer 的关闭| Function| — |
| close-on-click-modal| 是否可以通过点击 modal 关闭 Drawer| boolean| true |
| close-on-press-escape| 是否可以通过按下 ESC 关闭 Drawer| boolean| true |
| open-delay| Drawer 打开的延时时间，单位毫秒| number| 0 |
| close-delay| Drawer 关闭的延时时间，单位毫秒| number| 0 |
| custom-class deprecated| Drawer 的自定义类名| string| — |
| destroy-on-close| 控制是否在关闭 Drawer 之后将子元素全部销毁| boolean| false |
| modal| 是否需要遮罩层| boolean| true |
| direction| Drawer 打开的方向| enum| rtl |
| show-close| 是否显示关闭按钮| boolean| true |
| size| Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释| number / string| 30% |
| title| Drawer 的标题，也可通过具名 slot （见下表）传入| string| — |
| with-header| 控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效| boolean| true |
| modal-class| 遮罩层的自定义类名| string| — |
| z-index| 设置 z-index| number| — |
| header-aria-level a11y| header 的 aria-level 属性| string| 2 |
#### 事件

| 插槽名| 说明| 类型 |
| :--- | :--- | :--- |
| open| Drawer 打开的回调| Function |
| opened| Drawer 打开动画结束时的回调| Function |
| close| Drawer 关闭的回调| Function |
| closed| Drawer 关闭动画结束时的回调| Function |
| open-auto-focus| 输入焦点聚焦在 Drawer 内容时的回调| Function |
| close-auto-focus| 输入焦点从 Drawer 内容失焦时的回调| Function |

#### 插槽

| 名称| 说明 |
| :--- | :--- |
| default| Drawer 的内容 |
| header| Drawer 标题的内容；会替换标题部分，但不会移除关闭按钮。 |
| title deprecated| 与 header 作用相同 请使用 header |
| footer| Drawer 页脚部分 |

#### 暴露

| 事件名| 说明 |
| :--- | :--- |
| handleClose| 用于关闭 Drawer, 该方法会调用传入的 before-close 方法 |

#### 源代码

#### 贡献者
`,
  "el-loading": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/loading.html)
#### 属性

#### 配置项

| 名称| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| target| Loading 需要覆盖的 DOM 节点。 可传入一个 DOM 对象或字符串； 若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点| string / HTMLElement| document.body |
| body| 同 v-loading 指令中的 body 修饰符| boolean| false |
| fullscreen| 同 v-loading 指令中的 fullscreen 修饰符| boolean| true |
| lock| 同 v-loading 指令中的 lock 修饰符| boolean| false |
| text| 显示在加载图标下方的加载文案| string| — |
| spinner| 自定义加载图标类名| string| — |
| background| 遮罩背景色| string| — |
| customClass| Loading 的自定义类名| string| — |

#### 指令

| 名称| 说明| 类型 |
| :--- | :--- | :--- |
| v-loading| 是否显示动画| boolean / Options |
| element-loading-text| 显示在加载图标下方的加载文案| string |
| element-loading-spinner| 自定义加载图标| string |
| element-loading-svg| 自定义加载图标 (与 element-loading-spinner 相同)| string |
| element-loading-background| 背景遮罩的颜色| string |

#### 源代码

#### 贡献者
`,
  "el-message": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/message.html)
#### 属性

#### Message 配置项

| 名称| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| message| 消息文字| string / VNode / Function| '' |
| type| 消息类型| enum| info |
| icon| 自定义图标，该属性会覆盖 type 的图标。| string / Component| — |
| dangerouslyUseHTMLString| 是否将 message 属性作为 HTML 片段处理| boolean| false |
| customClass| 自定义类名| string| '' |
| duration| 显示时间，单位为毫秒。 设为 0 则不会自动关闭| number| 3000 |
| showClose| 是否显示关闭按钮| boolean| false |
| center| 文字是否居中| boolean| false |
| onClose| 关闭时的回调函数, 参数为被关闭的 message 实例| Function| — |
| offset| Message 距离窗口顶部的偏移量| number| 16 |
| appendTo| 设置 message 的根元素，默认为 document.body| string / HTMLElement| — |
| grouping| 合并内容相同的消息，不支持 VNode 类型的消息| boolean| false |
| repeatNum| 重复次数，类似于 Badge 。当和 grouping 属性一起使用时作为初始数量使用| number| 1 |

| 名称| 描述| 类型 |
| :--- | :--- | :--- |
| close| 关闭当前的 Message| Function |

#### 源代码

#### 贡献者
`,
  "el-message-box": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/message-box.html)
#### 属性

#### 配置项

| 属性名| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| autofocus| 打开 MessageBox 时是否自动获得焦点| boolean| true |
| title| MessageBox 的标题| string| '' |
| message| MessageBox 的正文内容| string / VNode / Function 2.2.17| — |
| dangerouslyUseHTMLString| 是否将 message 作为 HTML 片段处理| boolean| false |
| type| 消息类型，用于图标显示| enum| '' |
| icon| 自定义图标组件，会覆盖 type 的类型| string / Component| '' |
| custom-class| MessageBox 的自定义类名| string| '' |
| custom-style| MessageBox 的自定义内联样式| CSSProperties| {} |
| callback| 若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调| Function| null |
| show-close| MessageBox 是否显示右上角关闭按钮| boolean| true |
| before-close| messageBox 关闭前的回调，会暂停消息弹出框的关闭过程。| Function| null |
| distinguish-cancel-and-close| 是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 Esc 键）进行区分| boolean| false |
| lock-scroll| 是否在 MessageBox 出现时将 body 滚动锁定| boolean| true |
| show-cancel-button| 是否显示取消按钮| boolean| false（以 confirm 和 prompt 方式调用时为 true） |
| show-confirm-button| 是否显示确定按钮| boolean| true |
| cancel-button-text| 取消按钮的文本内容| string| 取消 |
| confirm-button-text| 确定按钮的文本内容| string| 确定 |
| cancel-button-class| 取消按钮的自定义类名| string| '' |
| confirm-button-class| 确定按钮的自定义类名| string| '' |
| close-on-click-modal| 是否可通过点击遮罩层关闭 MessageBox| boolean| true（以 alert 方式调用时为 false） |
| close-on-press-escape| 是否可通过按下 ESC 键关闭 MessageBox| boolean| true（以 alert 方式调用时为 false） |
| close-on-hash-change| 是否在 hash 改变时关闭 MessageBox| boolean| true |
| show-input| 是否显示输入框| boolean| false（以 prompt 方式调用时为 true） |
| input-placeholder| 输入框占位文本| string| '' |
| input-type| 输入框的类型| string| text |
| input-value| 输入框的初始文本| string| null |
| input-pattern| 输入框的校验表达式| regexp| null |
| input-validator| 输入框的校验函数。 应该返回一个 boolean 或者 string， 如果返回的是一个 string 类型，那么该返回值会被赋值给 inputErrorMessage 用于向用户展示错误消息。| Function| null |
| input-error-message| 校验未通过时的提示文本| string| 输入的数据不合法! |
| center| 是否居中布局| boolean| false |
| draggable| MessageBox 是否可拖放| boolean| false |
| overflow 2.5.4| MessageBox 拖动范围可以超出可视区| boolean| false |
| round-button| 是否使用圆角按钮| boolean| false |
| button-size| 自定义确认按钮及取消按钮的大小| string| default |
| append-to 2.2.19| 设置组件的根元素| string / HTMLElement| — |

#### 源代码

#### 贡献者
`,
  "el-notification": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/notification.html)
#### 属性

#### 配置项

| 名称| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| title| 标题| string| '' |
| message| 通知栏正文内容| string / VNode| '' |
| dangerouslyUseHTMLString| 是否将 message 属性作为 HTML 片段处理| boolean| false |
| type| 通知的类型| enum| '' |
| icon| 自定义图标。 若设置了 type，则 icon 会被覆盖| string / Component| — |
| customClass| 自定义类名| string| '' |
| duration| 显示时间, 单位为毫秒。 值为 0 则不会自动关闭| number| 4500 |
| position| 自定义弹出位置| enum| top-right |
| showClose| 是否显示关闭按钮| boolean| true |
| onClose| 关闭时的回调函数| Function| — |
| onClick| 点击 Notification 时的回调函数| Function| — |
| offset| 相对屏幕顶部的偏移量 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量| number| 0 |
| appendTo| 设置 notification 的根元素，默认为 document.body| string / HTMLElement| — |
| zIndex| 初始 zIndex| number| 0 |

| 名称| 详情| 类型 |
| :--- | :--- | :--- |
| close| 关闭当前的 Notification| Function |

#### 源代码

#### 贡献者
`,
  "el-popconfirm": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/popconfirm.html)
#### 属性

| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| title| 标题| string| — |
| confirm-button-text| 确认按钮文字| string| — |
| cancel-button-text| 取消按钮文字| string| — |
| confirm-button-type| 确认按钮类型| enum| primary |
| cancel-button-type| 取消按钮类型| enum| text |
| icon| 自定义图标| string / Component| QuestionFilled |
| icon-color| Icon 颜色| string| #f90 |
| hide-icon| 是否隐藏 Icon| boolean| false |
| hide-after| 关闭时的延迟| number| 200 |
| teleported| 是否将 popover 的下拉列表插入至 body 元素| boolean| true |
| persistent| 当 popover 组件长时间不触发且 persistent 属性设置为 false 时, popover 将会被删除| boolean| false |
| width| 弹层宽度，最小宽度 150px| string / number| 150 |
#### 事件

| 事件名| 说明| 类型 |
| :--- | :--- | :--- |
| confirm| 点击确认按钮时触发| Function |
| cancel| 点击取消按钮时触发| Function |

#### Slots

| 插槽名| 说明 |
| :--- | :--- |
| reference| 触发 Popconfirm 显示的 HTML 元素 |

#### 源代码

#### 贡献者
`,
  "el-popover": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/popover.html)
#### 属性

| 属性名| 说明| 类型| 可选值| 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| trigger| 触发方式| string| click/focus/hover/contextmenu| hover |
| title| 标题| string| —| — |
| effect| Tooltip 主题，Element Plus 内置了 dark / light 两种主题| string| string| light |
| content| 显示的内容，也可以通过写入默认 slot 修改显示内容| string| —| — |
| width| 宽度| string / number| —| 最小宽度 150px |
| placement| 出现位置| string| top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end| bottom |
| disabled| Popover 是否可用| boolean| —| false |
| visible / v-model:visible| Popover 是否显示| Boolean| —| false |
| offset| 浮层偏移量, Popover 是在 Tooltip,基础上开发的， Popover的 offset 是 undefined, 但Tooltip 的 offset 是12| number| —| 12 |
| transition| 定义渐变动画| string| —| el-fade-in-linear |
| show-arrow| 是否显示 Tooltip 箭头， 欲了解更多信息，请参考 ElPopper| boolean| —| true |
| popper-options| popper.js 的参数| object| 详情参考 popper.js| {modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]} |
| popper-class| 为 popper 添加类名| string| —| — |
| popper-style| 为 popper 自定义样式| string / object| —| — |
| show-after| 在触发后多久显示内容，单位毫秒| number| —| 0 |
| hide-after| 延迟关闭，单位毫秒| number| —| 200 |
| auto-close| tooltip 出现后自动隐藏延时，单位毫秒| number| —| 0 |
| tabindex| Popover 组件的 tabindex| number| —| — |
| teleported| 是否将 popover 的下拉列表插入至 body 元素| boolean| true / false| true |
| persistent| 当 popover 组件长时间不触发且 persistent 属性设置为 false 时, popover 将会被删除| boolean| —| true |

#### Slots

| 插槽名| 说明 |
| :--- | :--- |
| —| Popover 内嵌 HTML 文本 |
| reference| 触发 Popover 显示的 HTML 元素 |
#### 事件

| 事件名| 说明| 回调参数 |
| :--- | :--- | :--- |
| show| 显示时触发| — |
| before-enter| 显示动画播放前触发| — |
| after-enter| 显示动画播放完毕后触发| — |
| hide| 隐藏时触发| — |
| before-leave| 隐藏动画播放前触发| — |
| after-leave| 隐藏动画播放完毕后触发| — |

#### 源代码

#### 贡献者
`,
  "el-tooltip": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/tooltip.html)
#### 属性

| 名称| 说明| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| append-to| 指示 Tooltip 的内容将附加在哪一个网页元素上| CSSSelector / HTMLElement| — |
| effect| Tooltip 主题，内置了 dark / light 两种| enum| dark |
| content| 显示的内容，也可被 slot#content 覆盖| string| '' |
| raw-content| content 中的内容是否作为 HTML 字符串处理| boolean| false |
| placement| Tooltip 组件出现的位置| enum| bottom |
| fallback-placements| Tooltip 可用的 positions 请查看popper.js 文档| arrary| — |
| visible / v-model:visible| Tooltip 组件可见性| boolean| — |
| disabled| Tooltip 组件是否禁用| boolean| — |
| offset| 出现位置的偏移量| number| 12 |
| transition| 动画名称| string| — |
| popper-options| popper.js 参数| object 请参考 popper.js 文档| {} |
| show-after| 在触发后多久显示内容，单位毫秒| number| 0 |
| show-arrow| tooltip 的内容是否有箭头| boolean| true |
| hide-after| 延迟关闭，单位毫秒| number| 200 |
| auto-close| tooltip 出现后自动隐藏延时，单位毫秒| number| 0 |
| popper-class| 为 Tooltip 的 popper 添加类名| string| — |
| enterable| 鼠标是否可进入到 tooltip 中| boolean| true |
| teleported| 是否使用 teleport。设置成 true则会被追加到 append-to 的位置| boolean| true |
| trigger| 如何触发 Tooltip| enum| hover |
| virtual-triggering| 用来标识虚拟触发是否被启用| boolean| — |
| virtual-ref| 标识虚拟触发时的触发元素| HTMLElement| — |
| trigger-keys| 当鼠标点击或者聚焦在触发元素上时， 可以定义一组键盘按键并且通过它们来控制 Tooltip 的显示| Array| ['Enter','Space'] |
| persistent| 当 tooltip 组件长时间不触发且 persistent 属性设置为 false 时, popconfirm 将会被删除| boolean| — |
| aria-label a11y| 和 aria-label 属性保持一致| string| — |

#### Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| Tooltip 触发 & 引用的元素 |
| content| 自定义内容 |

#### Exposes

| 名称| 详情| 类型 |
| :--- | :--- | :--- |
| popperRef| el-popper 组件实例| object |
| contentRef| el-tooltip0-content 组件实例| object |
| isFocusInsideContent| 验证当前焦点事件是否在 el-tooltip-content 中触发| Function |
| updatePopper| 更新 el-popper组件实例| Function |
| onOpen| onOpen 方法控制 el-tooltip 显示状态| Function |
| onClose| onClose 方法控制 el-tooltip 显示状态| Function |
| hide| 提供 hide 方法| Function |

#### 源代码

#### 贡献者
`,
  "el-divider": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/divider.html)
#### 属性

| 属性名| 说明| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| direction| 设置分割线方向| enum| horizontal |
| border-style| 设置分隔符样式| enum css/border-style| solid |
| content-position| 自定义分隔线内容的位置| enum| center |

#### Slots

| 插槽名| 说明 |
| :--- | :--- |
| default| 设置分割线文案的位置 |

#### 源代码

#### 贡献者
`,
  "el-watermark": `#### [访问](${docUrl}/${l10n.t('el-locale')}/component/watermark.html)
#### 属性

| 属性名| 描述| 类型| 默认值 |
| :--- | :--- | :--- | :--- |
| width| 水印的宽度， content 的默认值是它自己的宽度| number| 120 |
| height| 水印的高度， content 的默认值是它自己的高度| number| 64 |
| rotate| 水印的旋转角度, 单位 °| number| -22 |
| zIndex| 水印元素的z-index值| number| 9 |
| image| 水印图片，建议使用 2x 或 3x 图像| string| - |
| content| 水印文本内容| string/object| - |
| font| 文字样式| Font| Font |
| gap| 水印之间的间距| object| [100, 100] |
| offset| 水印从容器左上角的偏移 默认值为 gap/2| object| [gap[0]/2, gap[1]/2] |

#### Font

| 名称| 详情| 类型| 默认 |
| :--- | :--- | :--- | :--- |
| color| 字体颜色| string| rgba(0,0,0,.15) |
| fontSize| 字体大小| number| 16 |
| fontWeight| 字重| enum| normal |
| fontFamily| 字体| string| sans-serif |
| fontStyle| 字体样式| enum| normal |
| textAlign| 文本对齐| enum| center |
| textBaseline| 文本基线| enum| top |

#### Slots

| 名称| 详情 |
| :--- | :--- |
| 默认| 添加水印的容器 |

#### 源代码

#### 贡献者
`,
}
}