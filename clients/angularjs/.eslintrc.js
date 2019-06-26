module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    plugins: ['prettier'],
    parserOptions: {
        "ecmaVersion": 2018,
        "sourceType": "module",
    },
    env: {
        "es6": true,
        "browser": true,
        "node": true,
        "jest": true,
    },
    rules: {
        "no-console": "off",
        "no-unused-vars": "off",
        'prettier/prettier': [
            'error',
            {
                singleQuote: false,
                trailingComma: "es6",
            },
        ],
    },
};