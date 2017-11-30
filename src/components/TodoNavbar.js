import React, { Component } from 'react'

export default class TodoNavbar extends Component {
    constructor(props) {
        super()

        this.state = {}
    }
    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand navbar-light bg-light">
                    <a className="navbar-brand" href="#">Todo App</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Table</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Add a Todo</a>
                            </li>
                        </ul>
                    </div>
                </nav> 
            </div>
        )
    }
}