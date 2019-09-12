module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
    'react'
  ],
  settings: {
    'import/resolver': {
      'node': {
        'moduleDirectory': [
          'node_modules',
          'src/'
        ]
      }
    }
  },
  rules: {
    'no-param-reassign': 0,
    'no-shadow': 1,
    'one-var': [
      2,
      {
        'var': 'always'
      }
    ],
    'one-var-declaration-per-line': [
      2,
      'initializations'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        'components': [
          'Link'
        ],
        'specialLink': [
          'to'
        ],
        'aspects': [
          'noHref',
          'invalidHref',
          'preferButton'
        ]
      }
    ],
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 1,
    'react/forbid-prop-types': 0,
    'react/no-find-dom-node': 1,
    'react/prefer-stateless-function': 0,
    'react/prefer-es6-class': 0,
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/img-redundant-alt': 1,
    'jsx-a11y/no-static-element-interactions': 0,
    'linebreak-style': 0,
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    'no-unused-expressions': 0,
    'no-case-declarations': 0,
    'camelcase': 0,
    'object-curly-newline': 0,
    'no-return-assign': 0,
    'import/default': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-cycle': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/click-events-have-key-events': 0
  },
};
