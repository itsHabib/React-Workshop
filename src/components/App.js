import React, { Component } from 'react'
import TodoForm from './TodoForm'

export default class App extends Component {
    constructor() {
        super()

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <TodoForm/>
            </div>
        )
    }
}