import './Header.css'
import React, { Component } from 'react'

export default class Main extends Component {
    handle = (e) => {
        e.target.classList.toggle("red");
    }  

    render() {  
        return (
            <header className="header">
                <div className="h2 font-weight-bold">Instagram</div>
                <div className="input-group col-3">
                    <span className="input-group-text"><i className="fa fa-search"></i></span>
                    <input type="text" class="form-control" id="formGroupExampleInput"
                        placeholder={`Buscar`}></input>
                </div>
                <div>
                    <i className="icons fa fa-home"></i>
                    <i className="icons fa fa-comments">
                        <div className="notifications badge">2</div>
                    </i>
                    <i className="icons fa fa-compass"></i>
                    <i onClick={(e) => this.handle(e)} className="icons fa fa-heart px-1"></i>
                </div>
            </header>
        )
    }
}