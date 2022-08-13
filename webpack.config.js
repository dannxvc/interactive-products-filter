/*para obtener las siguientes librerias tengo que instalarlas
usando npm */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
/*primer requerimiento de webpack es q exportemos la configuracion
podemos hacerlo de esta manera*/
module.exports = {
    /*archivo principal q tendra acceso a los otros archivos
    si usamos javascript tenemos que borrar el script de nuestro html*/
    entry: ['./index.js'],
    /*pedimos q cree un archivo de js, webpack lo llama main
    le colocamos content hash porque somo codigos*/
    output: {
        filename: '[name].[contenthash].js',
        //nombre tipico para codigo comprimido listo para distribuir
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    plugins: [
        /*1 todo el css en un solo archivo
        2 borrar los archivo de la carpeta dist
        3 cual es el html q usaremos*/
        new MiniCssExtractPlugin({ filename: "[name].[hash].css" }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './index.html' })
    ],
    module: {
        /*
        test busca todos los archivos de html y mimificarlo*/
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        //extraer el css en sus propios archivos
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    //interpreta los archivos de import o url
                    'css-loader',
                ],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: 'asset/resource'
            }
        ],
    },
    optimization: {
        minimizer: [
            //minimizar css y js
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    },

}