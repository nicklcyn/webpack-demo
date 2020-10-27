Webpack 本身其實也只是個打包工具而已，大部分的人在建置起始專案時都會選擇使用 CLI 工具（像是 Vue CLI、Create React App），而這些工具都已經配置好 Webpack 了，不需要開發者自己配置。當有配置的需求時，通常也只會更改少部分的設定，並不會通盤了解整個 Webpack 的運作。  

webpack 是 JavaScript 應用程式的模組打包器。它將各模組間的相依關係繪製成[相依圖](https://webpack.js.org/concepts/dependency-graph/)(dependency graph)，依照相依圖解析並處理每一個模組，最後建置成一個或多個 bundle 。

## Entry Points
開發者要跟 webpack 說明哪個模組是<font color="lightblue">**建置相依圖時的起點**</font>，因此需要配置 entry 屬性。

> 預設的Entry point是`./src/index.js`

## Output
 bunlde 要放在哪個路徑以及每個 bundle 要取什麼名字，因此我們需要設定 output 屬性。

> 預設的Output是`./dist/main.js`


## Loaders
  webpack本身只看得懂 JavaScript 與 Json 檔，對於其他資源例如 css，圖片，或者其他的語法集比如jsx，是沒有辦法載入的。 這就需要借助對應的loader將資源轉化、解析，載入進來。

  
## Plugins
plugin 可以在 webpack 建置的過程中，去做一些事情，藉以完成各個時期的工作。

Plugins 使得 webpack 有了更強大的能力，小如建置前清空輸出資料夾、注入環境變數、產生 html 檔案，大如配置最佳化等，都與 Plugins 有關係。

plugin 需要首先被引入，在配置的時候需要 new Pluginin（）生成一個對象。


## Mode
  每個環境相對應的webpack優化，webpack對應的環境有
  + development : 以開發環境為目標，做 Source Map 等以開發便利為導向的最佳化
  + <font color='red'>**\***</font>**production** : 以生產環境為目標，做 Tree Shaking, Minify...等以執行效能為導向的最佳化
  + none

  > production為webpack預先設定環境

## 總結
webpack 的核心目標是打包 JavaScript 應用程式的模組，它把所有的資源都視為模組。

從 Entry 模組開始尋找相依模組以建立相依圖，遇到非 JavaScript(JSON) 的檔案就交給 Loaders 幫忙轉換，最後建立 bundle 檔案並輸出在 Output 路徑下，而這個 bundle 是可以直接被瀏覽器載入。

並且可以使用 Plugins 賦予 webpack 除了打包外的其他能力，例如說 bundle 建置最佳化。

webpack 利用了整個打包流程解決了現代前端工程的模組化及新技術的引入問題，並且還可以做代碼的優化、檢查、分割...等等的處理，使得開發的應用程式層級可以向上提升。

# 實際演練

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
