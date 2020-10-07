import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'auto',
  },
  plugins: [nodeResolve({ modulesOnly: true })],
  external: [/^[^.].+/],
}
