import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import npm from 'rollup-plugin-npm';
import { basename } from 'path';
import { convert, plugins } from './dist/esnext.es6';

const cjs = plugins.find(plugin => plugin.name === 'modules.commonjs');

export default {
  entry: 'test/test.js',
  plugins: [
    json(),
    npm({
      main: true,
      jsnext: true
    }),
    {
      transform(code, id) {
        if (id.indexOf('node_modules/') >= 0) {
          console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', id);
          return convert(code, { plugins: [cjs] });
        }
      }
    },
    babel({
      babelrc: false,
      presets: ['es2015-rollup'],
      plugins: ['syntax-flow', 'transform-flow-strip-types']
    })
  ],
  format: 'cjs',
  dest: 'build/test-bundle.js'
};
