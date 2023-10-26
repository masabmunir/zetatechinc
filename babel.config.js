module.exports = {
    presets: [
        [
            "@babel/preset-react",
            {
                throwIfNamespace: false
            }
        ]
    ],

    // rules: [
    //
    //     {
    //         test: require.resolve('jquery'),
    //         use: [
    //             {
    //                 loader: 'expose-loader',
    //                 options: 'jQuery',
    //             },
    //             {
    //                 loader: 'expose-loader',
    //                 options: '$',
    //             },
    //         ],
    //     },
    // ],
};
