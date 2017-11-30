import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoTable from './TodoTable'
import TodoNavbar from './TodoNavbar'

export default class App extends Component {
    constructor() {
        super()

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <TodoNavbar/>
                <TodoTable/>
            </div>
        )
    }
}