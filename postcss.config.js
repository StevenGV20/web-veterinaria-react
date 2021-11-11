'use strict';

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('postcss-nested-ancestors'),
        require('postcss-nested'),
        require('autoprefixer')
    ],
};
