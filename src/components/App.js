import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoTable from './TodoTable'
import TodoNavbar from './TodoNavbar'

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            mainComponent: 'Form',
            todos: []
        }
    }

    renderComponent(componentToRender) {
        switch (componentToRender) {
            case 'Table':
                return <TodoTable todos={this.state.todos}
                                  todoComplete={this.todoComplete.bind(this)}
                        />
                break
            case 'Form':
                return <TodoForm todos={this.state.todos}
                                 addTodo={this.addTodo.bind(this)}
                        />
                break
        }
    }
    changeStateFromNav(component) {
        this.setState({ mainComponent: component })
    }

    addTodo(todo) {
        let todos = this.state.todos
        todos.push(todo)
        this.setState({ todos })
    }

    todoComplete(event) {
        let todos = this.state.todos.filter((todo, i) => 
            i != event.target.id
        )
        this.setState({ todos })
    }

    render() {
        return (
            <div>
                <TodoNavbar 
                    changeStateFromNav={this.changeStateFromNav.bind(this)}
                />
                {this.renderComponent(this.state.mainComponent)}
            </div>
        )
    }
}