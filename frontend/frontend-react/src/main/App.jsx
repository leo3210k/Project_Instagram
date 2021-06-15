import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import './App.css'

import Header from '../components/template/Header'
import Main from '../components/template/Main'

export default props =>
    <body>
        <Header />
        <Main />
    </body>