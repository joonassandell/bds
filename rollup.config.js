import { readFileSync } from 'fs';
import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';
import image from '@rollup/plugin-image';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import typescript from 'rollup-plugin-typescript2';
const tsconfig = JSON.parse(readFileSync('./tsconfig.json'));

export default [
  {
    input: ['src/index.ts'],
    output: [
      {
        dir: 'build',
        exports: 'named',
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
      },
    ],
    plugins: [
      del({
        targets: ['build/*'],
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfigOverride: {
          exclude: [...tsconfig.exclude, 'src/stories'],
        },
        useTsconfigDeclarationDir: true,
      }),
      svgr(),
      image({
        exclude: ['/**/*.svg'],
      }),
      postcss({
        extract: false,
        inject: false,
        use: [
          [
            'sass',
            {
              includePaths: ['node_modules'],
            },
          ],
        ],
      }),
    ],
  },
];
