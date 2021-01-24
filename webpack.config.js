const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    return {
        //production - оптимизация для продакшна
        //development - оптимизация для разработки
        //none - без оптимизации
        mode: 'none', 
        
        // Эта опция определяет, будут ли и как создаваться исходные карты
        devtool: false, 
        
        //точка входа
        entry: {
            bundle: './src/index.js'
        },
        
        //точка выхода
        output: {
            filename: 'js/[name].js',
            path: path.resolve(__dirname, './dist'),
            publicPath: './dist'
        },

        devServer: {
            overlay: true
        },

        plugins: [
            //каждый плагин - это конструктор
            new HtmlWebpackPlugin({
                template: './src/pages/index.html',
                title: 'Учебный проект FSD frontend education program',
                favicon: './src/assets/favicon.ico'
            }) 
        ]
    };
};