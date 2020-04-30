'use strict'

const isWin = process.platform === 'win32';
const remote = require('electron').remote;
let dirname = __dirname;

if (isWin == true) {
    dirname = dirname.replace(/\\/g, '/');
}

exports.decorateConfig = (config) => {
    const pluginConfig = Object.assign({
        flipped: true,
    }, config.hypermatchaControls);

    const windowControls = config.showWindowControls;

    if (windowControls === false) {
        return config;
    }

    let isLeft = windowControls === 'left';

    return Object.assign({}, config, {
        css: `
            ${config.css || ''}
            .header_windowHeader {
                height: 22px;
                left: ${isLeft ? '65px' : '0'};
                width: calc(100% - 64px);
            }
            .header_windowControls {
                display: none;
            }
            .header_appTitle {
                margin-left: -56px;
            }
            .matcha_header {
                position: fixed;
                top: 0;
                ${isLeft ? 'left: 0;' : 'right: 0;'}
                height: 22px;
                width: 64px;
            }
            .matcha_actions {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
            }
            .matcha_header .matcha_close ,
            .matcha_header .matcha_minimize ,
            .matcha_header .matcha_maximize {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                position: absolute;
                top: 6px;
                background-position: -6px;
            }

            .matcha_header .matcha_close {
                background-image: url('${dirname}/icons/close.svg');
                left: ${pluginConfig.flipped ? '8px' : '53px'};
            }
            .matcha_header .matcha_close:hover {
                background-image: url('${dirname}/icons/close_hover.svg');
            }
            .matcha_header .matcha_close:active {
                background-image: url('${dirname}/icons/close_pressed.svg');
            }

            .matcha_header .matcha_minimize {
                background-image: url('${dirname}/icons/minimize.svg');
                left: 32px;
            }
            .matcha_header .matcha_minimize:hover {
                background-image: url('${dirname}/icons/minimize_hover.svg');
            }
            .matcha_header .matcha_minimize:active {
                background-image: url('${dirname}/icons/minimize_pressed.svg');
            }

            .matcha_header .matcha_maximize {
                background-image: url('${dirname}/icons/maximize.svg');
                left: ${pluginConfig.flipped ? '53px' : '8px'};
            }
            .matcha_header .matcha_maximize:hover {
                background-image: url('${dirname}/icons/maximize_hover.svg');
            }
            .matcha_header .matcha_maximize:active {
                background-image: url('${dirname}/icons/maximize_pressed.svg');
            }
        `
    })
};

exports.decorateHeader = (Hyper, { React }) => {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                window: null,
                maximized: false
            }

            this.closeApp = this.closeApp.bind(this);
            this.minimizeApp = this.minimizeApp.bind(this);
            this.maximizeApp = this.maximizeApp.bind(this);
        }

        closeApp() {
            this.state.window.close();
        }

        minimizeApp() {
            this.state.window.minimize();
            this.state.maximized = false;
        }

        maximizeApp() {
            if (this.state.maximized == true) {
                this.state.window.unmaximize();
                this.state.maximized = false;
            } else {
                this.state.window.maximize();
                this.state.maximized = true;
            }
        }

        render() {
            return (
                React.createElement(Hyper, Object.assign({}, this.props, {
                    customChildren: React.createElement('div', { className: 'matcha_header' },
                        React.createElement('div', { className: 'matcha_actions' },
                            React.createElement('span', { className: 'matcha_close', onClick: this.closeApp }),
                            React.createElement('span', { className: 'matcha_minimize', onClick: this.minimizeApp }),
                            React.createElement('span', { className: 'matcha_maximize', onClick: this.maximizeApp })
                        )
                    )
                }))
            )
        }

        componentDidMount() {
            this.state.window = remote.getCurrentWindow();
        }
    };
};
