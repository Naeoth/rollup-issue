# Issue regex in external configuration

To avoid unresolved dependencies warning on compilation, I use a regex for the external rollup configuration to exclude all the imports which starts with "." (it means all the local import in fact).
It worked perfectly before 2.26.8 but a [change](https://github.com/rollup/rollup/pull/3753) in 2.26.8 broke the trick.
It seems that now, it's impossible to exclude the local import with a regex if you have at least a regex with `/.+/` or `/.*/`.

## Configuration

### Install
```bash
npm install
```

### Reproduce the bug
```bash
npm run build && npm run check-build
yarn add rollup@2.26.7 1>/dev/null 2>/dev/null
npm run build && npm run check-build
```

### Revert the initial behaviour
```bash
yarn add rollup@2.26.8
```

## Expected Behavior

Include the import like "./..." in the bundle with the regex in the external.

## Actual Behavior

Treat the import like "./..." as external module with the regex in the external.
