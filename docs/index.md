Webpack 本身其實也只是JavaScript 應用程式的模組打包工具而已，將所有的資源都視為模組。它將從 Entry 模組開始尋找相依模組以製成[相依圖](https://webpack.js.org/concepts/dependency-graph/)(dependency graph)，依照相依圖解析並處理每一個模組。

若遇到非 JavaScript(JSON) 的檔案就交給 Loaders 幫忙轉換，最後建立一個或多個 bundle 檔案並輸出在 Output 路徑下，這些 bundle 是可以直接被瀏覽器載入。

Webpack 利用了整個打包流程解決了現代前端工程的模組化及新技術的引入問題，並且還可以做代碼的優化、檢查、分割...等等的處理，使得開發的應用程式層級可以向上提升。

大部分的人在建置起始專案時都會選擇使用 CLI 工具（像是 Vue CLI、Create React App），而這些工具都已經配置好 Webpack 了，不需要開發者自己配置。當有配置的需求時，通常也只會更改少部分的設定，並不會通盤了解整個 Webpack 的運作。  

## Entry Points
開發者要跟 webpack 說明哪個模組是**建置相依圖時的起點**，因此需要配置 entry 屬性。

> 預設的Entry point是`./src/index.js`

## Output
 bunlde 要放在哪個路徑以及每個 bundle 要取什麼名字，因此我們需要設定 output 屬性。

> 預設的Output是`./dist/main.js`

## Loaders
  webpack本身只看得懂 JavaScript 與 Json 檔，對於其他資源例如 css，圖片，或者其他的語法集比如jsx，是沒有辦法載入的。 這就需要借助對應的loader將資源轉化、解析，載入進來。

  
## Plugins
plugin 可以在 webpack 建置的過程中，去做一些事情，藉以完成各個時期的工作，使得 webpack 有了更強大的能力，小如建置前清空輸出資料夾、注入環境變數、產生 html 檔案，大如配置最佳化等，都與 Plugins 有關係。

plugin 需要首先被引入，在配置的時候需要 new Pluginin（）生成一個對象。

## Mode
  每個環境相對應的webpack優化，webpack對應的環境有
  + development : 以開發環境為目標，做 Source Map 等以開發便利為導向的最佳化
  + **\*production** : 以生產環境為目標，做 Tree Shaking, Minify...等以執行效能為導向的最佳化
  + none

  > production為webpack預先設定環境

# 實際例子: Zero config

## 建立空白專案
```sh
mkdir webpack-demo
cd webpack-demo
npm init -y
```
### 修改*package.json*
```json
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "Demo for webpack",
  "repository": "https://github.com/nicklcyn/webpack-demo.git",
  "license": "MIT",
- "main": "index.js",
+ "private": true,   //設定npm 專案不公開
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}
```

## 安裝 webpack 
```sh
npm install webpack webpack-cli --save-dev
```
  > webpack 4+ 需要再安裝 webpack-cli

### *package.json*
```json
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "Demo for webpack",
  "repository": "https://github.com/nicklcyn/webpack-demo.git",
  "license": "MIT",
  "private": true, 
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
+   "build": "webpack"     //新增script build
  },
  "devDependencies": {
    "webpack": "^4.44.2",
    "webpack-cli": "^3.3.12"
  }
}
```
```sh
#也可以選擇安装 beta 版本
npm install --save-dev webpack@next
# 或特定的 tag/分支
npm install --save-dev webpack/webpack#<tagname/branchname>
```
## Bundle
```sh
mkdir src
touch ./src/index.js #增加預設檔案
npm run webpack
```

# Webpack Configuration
### *webpack.config.js* 各選項
```javascript
{
  mode: "production", // 模式：none|production|development，預設值為 "production"
  entry: "./app/entry", // 入口： webpack 建置作業的起始模組，預設值為 "./src/index.js"
  output: {
      // 輸出：配置如何輸出 webpack
  },
  module: {
      // 模組：處理各個模組（檔案） 如何載入，依照對應的規則設定 loader 配置
  },
  resolve: {
      // 解析：配置如何解析模組，像是路徑、別名等設定
  },
  performance: {
      // (略)效能：提示使用者 bundle 目前的情況，以促使使用者改善 bundle 的效能
  },
  devtool: "source-map", // devtool: 設定是否及如何生成 source map ，source map 可以解決 bundle 在 debug 時造成行數與原檔案 miss mapping 的問題
  context: __dirname, // 內容：根目錄位置，此為絕對路徑，會被 entry, module.rules.loader 等選項使用於路徑的解析上
  target: "web", // 目標： 設定 bundle 的目標環境，它會依照環境會 bundle 做相對應的處理
  externals: ["react", /^@angular/], // 外部擴展：從相依中排除此選項設定的模組
  stats: "errors-only", // (略)stats：控制輸出資訊
  devServer: {
      // webpack-dev-server 的設定
  },
  watch: true, // 是否啟用監聽模式
  watchOptions: {
      // 設定監聽模式的選項
  }
  plugins: [
      // 插件：設定插件的配置
  ],
  optimization: {
      // 最佳化：設定 Code split, Tree Shaking優化配置 
  }
}
```

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
