import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            text: '',
            date: ''
        }
    }

    handleChange(event) {
        this.setState({ text: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        let todos = this.state.todos
        let text = ''
        let date = this.createDateString()
        todos.push({ 
            text: this.state.text,
            date
        })
        this.setState({
            todos,
            text
        })
    }

    displayTodos() {
        console.log(`displaying todos: ${JSON.stringify(this.state)}`)
        let todoElements = (
            <ul className="list-group">
                {this.state.todos.map((todo) => 
                    <li className="list-group-item">
                        <strong>Todo: </strong>{todo.text}<br/>
                        <strong>Date: </strong>{todo.date}
                    </li>
                )}
            </ul>
        )
        return todoElements
    }

    createDateString() {
        let date = new Date()
        let dateString = 
            date.getUTCMonth() + 1 + " / "
            + date.getUTCDate() + " / "
            + date.getUTCFullYear()
        return dateString 
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <h3 id="form-comp-title">Add a Todo</h3>
                    </div>
                </div>
                <form id="todo-form" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <h2>Todo Text</h2>
                                <textarea value={this.state.text}
                                    id="todo-text"   
                                    className="form-control"
                                    placeholder="Enter Text"
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <button type="submit" 
                            className="btn btn-primary"
                            >
                                Create Todo
                            </button>
                        </div>
                        <div className="col-6">
                            <h2 id="todos">Todos</h2>
                                {this.displayTodos()}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}