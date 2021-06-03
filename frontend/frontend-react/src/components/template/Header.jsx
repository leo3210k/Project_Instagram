import './Header.css'
import React from 'react'

export default props =>
    <header className="header">
        <div className="h2 font-weight-bold">Instagram</div>
        <div className="input-group col-3">
            <span className="input-group-text"><i className="fa fa-search"></i></span>
            <input type="text" class="form-control" id="formGroupExampleInput"
                placeholder={`Buscar`}></input>
        </div>
        <div>
            <i className="icons fa fa-home"></i>
            <i className="icons fa fa-comments"></i>
            <i className="icons fa fa-compass"></i>
            <i className="icons fa fa-heart teste"></i>
        </div>
    </header>