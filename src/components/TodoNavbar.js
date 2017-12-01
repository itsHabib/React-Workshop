import React, { Component } from 'react'

const TodoNavbar = ({ changeStateFromNav }) => 
    <div className="container-fluid">
        <nav className="navbar navbar-expand navbar-light bg-light">
            <a className="navbar-brand" href="#">Todo App</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" 
                            href="#"
                            onClick={() => changeStateFromNav('Table')}
                        >
                            Table
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" 
                            href="#"
                            onClick={() => changeStateFromNav('Form')}
                        >
                            Add a Todo
                        </a>
                    </li>
                </ul>
            </div>
        </nav> 
    </div>

module.exports = TodoNavbar