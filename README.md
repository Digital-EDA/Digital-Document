启动
```bash
$ yarn install
$ $Env:NODE_OPTIONS="--openssl-legacy-provider"
$ yarn build; node make.js
```

将 `./src/.vuepress/dist` 下文件夹上传到 `https://github.com/Digital-EDA/doc`