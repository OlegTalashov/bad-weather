
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}

module.exports = (api) => {
  const isTest = api.env('test');

  const config =  {
      presets: [
          ["@babel/preset-env", {
              targets: {
                  "browsers": ["last 2 versions", "IE 11"]
              },
              useBuiltIns: "usage"
          }],
          '@babel/preset-typescript'      
      ],
      plugins: [ 
        ["@babel/plugin-proposal-decorators", {legacy: true}],
        "@babel/plugin-transform-typescript",
        "@babel/plugin-proposal-class-properties"
    ]
  };

  if(isTest) {
      api.cache.never();
  }

  return config;
};

