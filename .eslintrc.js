// http://eslint.org/docs/user-guide/configuring
var isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        browser: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
    },
    plugins: [
        'html', // required to lint *.vue files
    ],
    root: true,
    rules: {
        'comma-dangle': ['error', 'always-multiline'], // <- force trailing commas on mutliline objects
        'indent': ['error', 4], // <- 4 space indentation
        'keyword-spacing': ['error', { before: true, after: true }], // <- enforce consistant spacing around keywords
        'no-debugger': isProduction ? 2 : 0, // <- only allow debugger in development
        'no-var': ['error'], // <- always use "let" over "var"
        'operator-assignment': ['error', 'always'], // <- enforce shorthand operator assignment ("x += 1" instead of "x = x + 1")
        'quotes': ['error', 'single'], // <- enforce single quotes
        'semi': ['error', 'always'], // <- place semicolon at the end of staments
        'space-before-blocks': ['error', { functions: 'always', keywords: 'always' }], // <- enforce consistant spacing before blocks
        'space-before-function-paren': ['error', 'never'], // <- enforce consistant spacing before function parens
        'space-in-parens': ['error', 'never'], // <- enforce consistent spacing inside parentheses
    },
};
