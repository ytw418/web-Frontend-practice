module.exports = {
    env: {
        browser: true,
        es2020: true,
        jest: true,
    },
    extends: ['standard'],
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: {
        'no-var': 'error',
        'max-len': [
            'error',
            {
                code: 130,
                ignoreUrls: true,
            },
        ],
        semi: ['error', 'always'],
        indent: ['error', 4],
        'comma-dangle': ['error', 'always-multiline'],
        'one-var': ['error', 'consecutive'],
    },
};
