#Статьи:
1. https://tocode.ru/curses/nastroika-webpack4/
2. https://habr.com/ru/post/524260/

#Структура проекта
[корень]
папка SRC
в папке SRC файл index.js

1. Инициализация проекта
   npm init -y

-y - установка значений по умолчанию (чтоб вопросов не задавал)

2. Установка webpack 5
   npm i -D webpack webpack-cli webpack-serve

webpack - сборщик модулей и ресурсов

webpack-cli - интерфейс командной строки для вебпака

webpack-serve - 

webpack-dev-server - 

-D или --save-dev - установка в devDependencies

#Востановление нужных пакеджей
npm i

В файле package.json создать скрипт
"build": "webpack --mode development"

Запуск скрипта build созданного в файле package.json
npm run build

Установка пакетов для понимания HTML и CSS
npm i -D css-loader html-webpack-plugin mini-css-extract-plugin

Редактирование файла index.js
import app from './public/js/main.js'
import './public/css/style.css'
import './public/css/normalize.css'

Создание и редактирование файла webpack.config.js
let miniCss = require('mini-css-extract-plugin')
let htmlPlugin = require('html-webpack-plugin')

module.exports = {
module: {
rules: [
{
test: /\.css$/,
use: [
{
loader: miniCss.loader,
options: {
publicPath: '../',
hmr: process.env.NODE_ENV === 'development',
},
},
'css-loader',
]
}
]
},
plugins: [
new miniCss({
filename: 'css/[name].css',
chunkFilename: '[id].css',
ignoreOrder: false,
}),
new htmlPlugin({
template: './src/public/index.html'
})
]
}

Установка webpack-dev-server
npm i webpack-dev-server -D

В файле package.json создать скрипт
"dev": "webpack-dev-server"

Добавим флаг --open в скрипт и проект будет атоматически открываться в браузере
"start": "webpack-dev-server --open"
или в файле webpack.config.js дописать блок после блока plugins
devServer: {
open: true,
hot: true,
port: 3000
}

Запуск webpack-serve
npm run start

Теперь проект доступен на localhost:8080 и на лету пересобирается

Остановить webpack-serve
Ctrl+c
