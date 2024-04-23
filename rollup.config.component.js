import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import typescript from 'rollup-plugin-typescript2';

export default args => {
  let { component } = args;
  if (typeof component === 'boolean') component = 'Avatar';
  const components = component
    .split(',')
    .map(c => `src/components/${c}/index.ts`);
  const tsconfigOverride = {
    include: ['src/types/custom.d.ts', ...components],
  };

  return [
    {
      input: components,
      output: [
        {
          dir: 'build',
          exports: 'named',
          format: 'esm',
          preserveModules: true,
          preserveModulesRoot: 'src',
          sourcemap: true,
        },
      ],
      plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
          tsconfigOverride,
          useTsconfigDeclarationDir: true,
        }),
        svgr(),
        image({
          exclude: ['/**/*.svg'],
        }),
        postcss({
          extract: false,
          inject: false,
        }),
      ],
      watch: {
        include: 'src/**/*.{ts,tsx}',
      },
    },
  ];
};
