# Core Concept
  - Entry
  - Output
  - Loaders
  - Plugins
  - Mode

## Entry Points
  webpack 打包的起始檔案，可以設定多個起始檔案，預設的Entry point是`./src/index.js`

## Output
  webpack 打包輸出的target file，可以產生多個，預設的Output是`./dist/main.js`

## Loaders

  用於檔案處理，

## Plugins



## Mode
  每個環境相對應的webpack優化，webpack對應的環境有
  + development
  + **production**
  + none

  >production為webpack預先設定環境
# 實際演練

  ## Installation

  新建webpack專案

  ```sh
  mkdir webpack-demo
  cd webpack-demo
  npm init -y
  npm i -D webpack-cli webpack
  ```

  >webpack 4+ 需要再安裝 webpack-cli

也可以選擇安装 beta 版本
```sh
npm install --save-dev webpack@next
# 或特定的 tag/分支
npm install --save-dev webpack/webpack#<tagname/branchname>
```


## Bundle

```sh
mkdir src
touch index.js
npx webpack
```

## Configuration file
### *webpack.config.js*
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

## **Loaders**
loader CSS
會用到的loader
+ style-loader
+ css-loader
+ sass-loader
+ node-sass
```sh
npm i -D sass-loader css-loader
```

## Plugins

