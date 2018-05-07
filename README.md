# webpack版本：4.6.0

## 配置文件包含：
- postcss：自动添加浏览器私有前缀
- sass：sass转css
- less：less转css
- babel：es6转es5
- extract-text-webpack-plugin：分离出独立的css文件
- babel-polyfill：由于babel只转换语法，不转换新的api，因此需要用babel-polyfill转换新的api
- core.js：上面的babel-polyfill一次性转换所有新的api，会导致文件过大。core.js可以按需转换新的api

新增：
- webpack-dev-Server：打开本地服务器，并能够实时加载(但不会自动打包成新文件，需要同时开启`npm run watch`，或者关闭服务器后运行`npm run build`)
- postcss.config.js 规则更新：只有在`npm run build`时才压缩css(启动cssnano),其他模式下不压缩css代码
- ExtractTextPlugin 规则更新：在`npm run start`时关闭该插件，样式内联到style标签内(因为webpack-dev-Server不支持css的热替换)；其他模式下生成css文件，需要在HTML中用link标签引入
- purifycss：去除无用css，默认关闭

## 常用指令
- `npm run dev` 打包成开发环境文件（未压缩的）
- `npm run build` 打包成生产环境文件（代码压缩）
- `npm run watch` 监视文件变化并打包成新文件
- `npm run start` 打开本地服务器调试(能够实时加载，但不会自动打包成新文件，需要同时开启`npm run watch`，或者关闭服务器后运行`npm run build`)