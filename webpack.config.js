const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin')
const CopyPlugin = require("copy-webpack-plugin");
 
 //const regeneratorRuntime = require("regenerator-runtime");

module.exports = {
   // entry: ['regenerator-runtime/runtime.js', "./src/index.js"],
    mode: 'development',
     
     output: {   //limpia a la hora de hacer  el build
        clean:true
     },

    module: {
        rules: [
            {
                test: /\.html$/,  //si es un archivo html continua lo de debajo
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false  //para minimizar el index.html
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,  //si este test pasa ya el siguiente no sera necesario
                use: ['style-loader', 'css-loader']
            },
            {
                test:/styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use:[
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },

    optimization:{},

    plugins: [
        new HtmlWebPack({
           title: 'Mi WebPack App',
           //filename: './index.html',  //como quiero colocarlo por defecto es index.html
           template: './src/index.html', //cual es el archvio 
        }),

        new MiniCssExtract({
            filename: '[name].[fullhash].css', //[name]: usa el mismo nombre  .[fullhash] :crea un hash en especifico
            ignoreOrder: false
        }),

     
    ]

}