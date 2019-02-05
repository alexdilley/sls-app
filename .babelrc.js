module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '8.10',
        },
      },
    ],
  ],
  plugins: ['source-map-support', '@babel/plugin-transform-runtime'],
};
