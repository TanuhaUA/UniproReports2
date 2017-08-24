module.exports = {
    entry: './source/js/app.coffee',
    output: {
        filename: './public/js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.coffee$/,
                exclude: /node-modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.coffee$/,
                loader: 'coffee-jsx-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.coffee']
    },
    watch: true
};