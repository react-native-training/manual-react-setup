# Manual & Minimal Babel + Webpack Setup

## To download this config

1. clone repo   
```
git clone https://github.com/react-native-training/manual-react-setup.git
```

2. cd into directory   
```
cd manual-react-setup
```

3. install dependencies using npm or yarn   
```
yarn OR npm i
```

## To set this up from Scratch

1. Create directory and create package.json   
```
mkdir react-boilerplate
cd react-boilerplate
npm init -y
```

2. Create basic sub directories   
```
mkdir dist
cd dist
touch index.html
```

3. Create index.html   
```
<!DOCTYPE html>
<html>
  <head>
      <title>React Webpack Babel Setup</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

### Webpack Setup

4. Install webpack (from root of directory)   
```
npm install --save-dev webpack webpack-dev-server
```

5. Add start script to package.json   
```
"scripts": {
  "start": "webpack-dev-server --progress --colors --hot --config ./webpack.config.js",
  ...
}
```

6. Create webpack.config.js   
```
touch webpack.config.js
```

7. Add to webpack.config.js   
```
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
```

8. Create main app subdirectories (from root folder)   
```
mkdir src
cd src
touch index.js
```

9. Add test console.log to index.html   
```
console.log('React Webpack Babel Setup Working!');
```

10. Test the application   
```
npm start
```

11. Add hot realoading to webpack   
```
npm install --save-dev react-hot-loader
```

12. Add new entries to webpack.config.js   
```
module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // new
    'webpack/hot/only-dev-server', // new
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true // new
  }
};
```

13. Update index.js to add hot reloading   
```
console.log('My Minimal React Webpack Babel Setup');

module.hot.accept(); // new
```

14. Test the application   
```
npm start
```

### Babel Setup   

15. Install babel dependencies   
```
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```

16. If you would like Experimental features, install preset-stage-2   
```
npm install --save-dev babel-preset-stage-2
```

17. Create .babelrc   
```
touch .babelrc
```

18. Add configuration to .babelrc   
```
{
  "presets": [
    "es2015",
    "react",
    "stage-2" // if you installed babel-preset-stage-2
  ]
}
```

19. Add babel configuration to webpack.config.js   
```
...
module: {
  loaders: [{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'react-hot-loader!babel-loader'
  }]
},
resolve: {
  extensions: ['*', '.js', '.jsx']
},
...
```

20. Add style loader and css loader to webpack.config.js   
```
npm i css-loader style-loader --save-dev
```

21. Update webpack.config.js to add style and css configuration   
```
module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    },
    { // new
      test: /\.css$/,
      exclude: /^node_modules$/,
      loader: 'style-loader!css-loader',
    }
  ]
},
```

22. Install React (from root directory)   
```
npm i --save react react-dom
```

23. Update src/index.js to render application   
```
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'React Webpack Babel Setup Complete!';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
```

