# Step to create a Webpack 4 project
1. initialize the project
  ```
  npm init -y
  ```
2. install webpack
  ```
  npm install --save-dev webpack webpack-cli
  ```
3. install style loader
  ```
  npm install --save-dev style-loader css-loader
  ```
4. install mini-css-extract-plugin
  ```
  npm install --save-dev mini-css-extract-plugin
  ```
5. install html-webpack-plugin
  ```
  npm install --save-dev html-webpack-plugin
  ```
6. install dev-server
  ```
  npm install --save-dev webpack-dev-server
  ```
7. install clean-webpack-plugin
  ```
  npm install --save-dev clean-webpack-plugin
  ```
8. install typescript
  ```
  npm install --save-dev typescript ts-loader
  ```
9. install react
  ```
  npm install --save react react-dom
  npm install --save-dev @types/react @types/react-dom
  ```
9. if you want to use babel to transform TypeScript to plain JavaScript 
  ```
  npm install --save-dev @babel/core @babel/cli @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-typescript
  npm install --save-dev babel-loader
  npm install --save-dev @babel/preset-react
  ```

  For different configuration:
  - only use ts-loader
  - only use babel-loader
  - babel-loader and ts-loader can work together.

10. install postcss-loader
  ```
  npm install --save-dev postcss-loader
  npm install --save-dev autoprefixer
  ```
11. install file-loader
  ```
  npm install --save-dev file-loader
  ```
12. install tslib
  ```
  npm install --save tslib
  ```
13. install webpack-merge
  ```
  npm install --save-dev webpack-merge
  ```
14. install nuglifyjs-webpack-plugin
  ```
  npm install --save-dev uglifyjs-webpack-plugin 
  ```
15. install copy-webpack-plugin
  ```
  npm install --save-dev copy-webpack-plugin
  ```
16. install sass-loader
  ```
  npm install --save-dev sass-loader node-sass
  ```
17. install url-loader
  ```
  npm install --save-dev url-loader
  ```