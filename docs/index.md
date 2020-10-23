# 安裝
```sh
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```
  >webpack 4+ 需要再安裝 webpack-cli

```sh
#也可以選擇安装 beta 版本
npm install --save-dev webpack@next
# 或特定的 tag/分支
npm install --save-dev webpack/webpack#<tagname/branchname>
```

# bundle
```sh
mkdir src
touch ./src/index.js
npx webpack
```

# Core Concept
  - Entry
  - Output
  - Loaders
  - Plugins
  - Mode

## Entry Points
  webpack 打包的起始檔案，可以設定多個起始檔案，預設的Entry point是`./src/index.js`

```sh
npm install --save lodash
```
```json
//package.json
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "Demo for webpack",
  "repository": "https://github.com/nicklcyn/webpack-demo.git",
  "license": "MIT",
  "private": true,
  "scripts": {
    "build": "webpack"
  },
  "devDependencies": {
    "webpack": "^4.44.2",
    "webpack-cli": "^3.3.12"
  },
  "dependencies": {
    "lodash": "^4.17.20"
  }
}
```


## Output
  webpack 打包輸出的target file，可以產生多個，預設的Output是`./dist/main.js`

  
  
  
  ```javascript
  

  ```

## Loaders
  webpack本身只能打包Javascript文件，對於其他資源例如 css，圖片，或者其他的語法集比如jsx，是沒有辦法載入的。 這就需要對應的loader將資源轉化，載入進來。
  loader就是一個export出來的function。
  
## Plugins
  plugin 可以在 webpack 運行到某個時刻的時候，去做一些事情。
  plugin 需要首先被引入，在配置的時候需要 new Pluginin（）生成一個對象。

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
  html-webpack-plugin
  clean-webpack-plugin
