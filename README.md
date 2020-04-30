# Hyper-matcha-dark-sea-controls! [![npm-version][npm-badge]][npm-link]

A plugin that makes the close, minimize and maximize buttons look like the matcha dark sea window controls. This plugin is tested on linux.

### Install

### Config

It makes use of `showWindowControls` to determine where to place the controls. To move the controls to the left side, change your config to the following:
```javascript
module.exports = {
  config: {
    ...
    showWindowControls: 'left',
    ...
  }
}
```

**Flip controls**  
Default value is `true`

```javascript
module.exports = {
  config: {
    ...
      hyperMacControls: {
        flipped: true,
      }
    ...
  }
}
```

### Changelog
**0.0.1**
- Add matcha dark sea controls

### License

MIT © [krve][author]

[screenshot]: https://cloud.githubusercontent.com/assets/5139119/21655977/766986e0-d2bc-11e6-8182-fd48c55c4416.png
[npm-badge]:  https://img.shields.io/npm/v/hyper-mac-controls.svg?style=flat-square
[npm-link]:   https://www.npmjs.com/package/hyper-mac-controls
[author]:     https://github.com/alfonsocv12
[base-on]:    https://github.com/krve/hyper-mac-controls
