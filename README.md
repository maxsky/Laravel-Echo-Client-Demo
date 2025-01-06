# Laravel-Echo-Client-Demo

For Debug Laravel Echo Server

用于调试 Laravel/Lumen WebSocket 即时通讯服务

## Usage

`yarn` 或 `npm install` 后在根目录运行 `vite` 或 `yarn dev` 或 `npm run dev`

**`reverb`** 分支使用了 **高版本** `yarn`，需要执行下方命令：

```bash
corepack enable

corepack -g install yarn@latest

yarn set version stable

yarn install
```

由于神奇网络的原因，如果无法安装高版本 `yarn` 可以删掉 `package.json` 中的 `packageManager` 部分采用 `yarn v1` 安装

默认地址：[http://127.0.0.1:5173](http://127.0.0.1:5173)

## For `reverb` branch

仅需要修改 `js/app.js` 中的 `REVERB_APP_KEY`、连接地址/端口和 `CHANNEL_NAME`、`EVENT_NAME` 即可

## For `laravel-echo-server` branch

使用旧版本 `laravel-echo-server` 服务端时需注意 `package.json` 中 `socket.io-client` 版本必须为 `^2`

因 `laravel-echo-server` 中并未使用高版本，此处如果使用高版本客户端会出现无法连接等兼容问题

详情见：[The client is not compatible with the version of the server](https://socket.io/docs/v4/troubleshooting-connection-issues#the-client-is-not-compatible-with-the-version-of-the-server)
