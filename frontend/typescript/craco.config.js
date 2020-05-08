const CSS_MODULE_LOCAL_IDENT_NAME = '[local]__[hash:base64:5]';

module.exports = {
  style: {
    modules: {
      localIdentName: CSS_MODULE_LOCAL_IDENT_NAME,
    },
  },

  babel: {
    plugins: [
      ['relay'],

      ['@babel/plugin-proposal-export-default-from'],

      [
        'babel-plugin-react-css-modules',
        {
          filetypes: {
            '.scss': {
              syntax: 'postcss-scss',
            },
          },
          generateScopedName: CSS_MODULE_LOCAL_IDENT_NAME,
          attributeNames: { class: 'className' },
          autoResolveMultipleImports: true,
        },
      ],

      [
        'module-resolver',
        {
          alias: {
            'components/*': './src/components/*',
            'lib/*': './src/lib/*',
          },

        },
      ],
    ],
  },
};
