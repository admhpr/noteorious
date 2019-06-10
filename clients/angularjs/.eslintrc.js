module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    plugins: ['prettier'],
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
    },
    env: {
        "es6": true,
        "browser": true,
        "node": true,
    },
    rules: {
        "no-console": "off",
        "no-unused-vars": "off",
        'prettier/prettier': [
            'error',
            {
                singleQuote: false,
                trailingComma: 'all',
            },
        ],
    },
};