import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoTable from './TodoTable'

export default class App extends Component {
    constructor() {
        super()

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <TodoTable/>
            </div>
        )
    }
}