## Webpack
### Hướng dẫn cài đặt webpack

#### Cài đặt webpack. Run cmd
```bash
    npm install --save-dev webpack
```
### Tạo file webpack.config.js
```bash
    touch webpack.config.js
```
### Biến đổi ES6(ES2015) thành ES5
```bash
    npm install --save-dev babel-loader babel-core babel-preset-env
    or
    npm install --save-dev @babel/core @babel/preset-env
```
### Chạy webpack
```bash
    npm install -g webpack
```

### Buil code. Run
```bash
    webpack
```
### Cài đặt webpack-cli global - nếu lỗi
```bash
    npm i -D webpack-cli -g
```
### CSS loader
### Module load css vào js
```bash
    npm install --save-dev style-loader css-loader
```