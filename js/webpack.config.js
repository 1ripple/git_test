const webpack = require("webpack");

//出力先パス取得
var path = require('path').resolve("../");

//Coffee//
/*
module.exports = {
  //context:   __dirname+"../htdocs/assets",
  //entry: __dirname+"/javascripts/main.js",  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: __dirname+"/coffee/Index.coffee",  // メインとなるJavaScriptファイル（エントリーポイント）
  output: {  // ファイルの出力設定
    path: path+"/htdocs/assets/js/",  //  出力ファイルのディレクトリ名
    filename: "test.js"  // 出力ファイル名
  },
  resolve: {
    extensions: ['', '.js', '.coffee'], // requireする際に、拡張子を省略するための設定
    root: __dirname+"/coffee/"  // require時にファイルを検索する際のrootパス
  },
  module: {
    loaders: [
      {test: /\.coffee$/, loader: 'coffee-loader'}  // coffeescriptをコンパイルするための設定
    ]
  },
  plugins: [
  	//↓↓↓↓圧縮
    //new webpack.optimize.UglifyJsPlugin()
  ]
};
*/


//Babel//
module.exports = {
  // entry: __dirname+"/es6/Index.es6",  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: {// メインとなるJavaScriptファイル（エントリーポイント）
    //"ディレクトリ/出力ファイル名": "パス"
    "contents": ['babel-polyfill',__dirname+"/es6/Contents.js"] // babel-polyfill はIE11などで必要
    // ,"page/about": __dirname+"/es6/page/About.js"//複数ファイル指定の時
  },
  output: {  // ファイルの出力設定
    path: path+"/htdocs/assets/js/",  //  出力ファイルのディレクトリ名
    filename: "[name].js"  // 出力ファイル名
  },
  // devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.es6', '.coffee'], // requireする際に、拡張子を省略するための設定
    // root: __dirname+"/es6/"  // require時にファイルを検索する際のrootパス
    root: __dirname+"/"  // require時にファイルを検索する際のrootパス
  },
  module: {
    preLoaders: [
      {
        // test: [/\.js$/, /\.es6$/],
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.coffee$/, loader: 'coffee-loader'}
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
  	//↓↓↓↓圧縮
    //new webpack.optimize.UglifyJsPlugin()
  ]
};
