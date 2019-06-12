const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const globImporter = require('node-sass-glob-importer');


module.exports = {
    mode: 'development',
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 9000,
        watchContentBase: true,
        before: function(app) {
            let store = {
                templates: [
                    { id: 1, title: 'test', blocks: [{ id: 1, title: 'test', content: '<b>hi</b>' }]},
                    { id: 2, title: 'test_too', blocks: [{ id: 1, title: 'test', content: '<p>hi</p>' }]}
                ]
            };

            var bodyParser = require('body-parser');    
            app.use(bodyParser.json());

            app.post('/login', function(req, res) {
                res.json({})
            })

            app.get('/reports', function(req, res) {
                res.json(store.templates)
            })

            app.post('/reports/:id', function(req, res) {
                const id = +req.params.id;
                const recievedTemplate = req.body;

                if (!recievedTemplate || typeof recievedTemplate.id !== 'number') {
                    res.status = 400;
                    res.send('bad request');
                    return;
                }

                if (store.templates.find(template => template.id === id)) {
                    store.templates = store.templates.map(template => template.id === id ? recievedTemplate : template );
                    res.send('ok');
                } else {
                    res.status = 404;
                    res.send('template not found');
                }
            })

            app.put('/reports', function(req, res) {
                const recievedTemplate = req.body;

                const maxId = store.templates.reduce((max, template) => 
                    template.id > max ? template.id : max, Number.MIN_VALUE
                );

                const resultTemplate = {
                    ...recievedTemplate,
                    id: maxId
                }

                store.templates.push(resultTemplate);

                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(resultTemplate));
            })
        }
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".sass"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options : {
                            importer: globImporter()
                        }

                    }
                ]
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};