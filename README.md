# mlz-stylelint-config
stylelint 统一规范配置

# mlz-stylelint-config

stylelint 统一规范配置，集成了 [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss)、[stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order)、[stylelint-scss](https://github.com/stylelint-scss/stylelint-scss)

> **Note**
> Stylelint v15 已经去掉了所有格式化相关的规则，所以无需安装 stylelint-config-prettier 插件

## Installation

`npm i -D @mlz/stylelint-config`

## Usage

#### 在项目根目录新建 `.stylelintrc.json` 文件，并写入下面👇代码

```json
{
  "extends": ["@mlz/stylelint-config"]
}
```

#### 不生效可能原因及解决方法

vscode 扩展 vscode-stylelint >= 14 版本，需要在 首选项->设置->扩展->Stylelint 找到 Validate 选项，添加 scss

## Options

详情请见 `index.js` 文件
