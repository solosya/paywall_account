import React     from 'react'
// import { Route, Switch }        from 'react-router-dom'
// import { withRouter }           from 'react-router'
import axios                    from 'axios'
import { ThemeProvider }        from 'styled-components';

// import store                    from './store/store'
import Home                     from './containers/home/index'

import './App.css';

axios.defaults.baseURL = window.location.origin;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['X-CSRF-Token']     = window.csrfToken;
axios.defaults.headers.post['Content-Type']       = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type']        = 'application/x-www-form-urlencoded';
delete window.csrfToken;

// eslint-disable-next-line import/no-webpack-loader-syntax
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./vars.scss');


function App() {
    return (
        <ThemeProvider theme={theme}>
            <div style={{marginTop: "100px", marginBottom:"100px"}} data-env="">
                <Home />
            </div>
        </ThemeProvider>
    );
}

export default App;
