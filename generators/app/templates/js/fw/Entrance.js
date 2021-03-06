'use strict';

import Splash from 'splash-screen';
import React from 'react';
import Application from 'js/application/Application.jsx';

class Entrance {

    constructor() {
        require('font-awesome/css/font-awesome.css');
        require('less/main.less');
    }

    beforeStart() {
        let injectTapEventPlugin = require('react-tap-event-plugin');
        //Needed for onTouchTap
        //Can go away when react 1.0 release
        //Check this repo:
        //https://github.com/zilverline/react-tap-event-plugin
        injectTapEventPlugin();
    }

    _destroySplash() {
        Splash.destroy();
    }

    launch() {
        React.render(<Application onLoad={this._destroySplash}/>, document.body);
    }

    run() {
        this.beforeStart();
        this.launch();
    }

}

export default Entrance;
