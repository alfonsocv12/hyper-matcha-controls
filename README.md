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
      hypermatchaControls: {
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

[screenshot]: https://user-images.githubusercontent.com/31135704/80696951-72436100-8a95-11ea-9df3-f4af0359eb35.png
[npm-badge]:  https://img.shields.io/npm/v/hyper-matcha-controls.svg?style=flat-square
[npm-link]:   https://www.npmjs.com/package/hyper-matcha-controls
[author]:     https://github.com/alfonsocv12
[base-on]:    https://github.com/krve/hyper-matcha-controls
