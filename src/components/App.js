import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoTable from './TodoTable'
import TodoNavbar from './TodoNavbar'

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            mainComponent: 'Form'
        }
    }

    renderComponent(componentToRender) {
        switch (componentToRender) {
            case 'Table':
                return <TodoTable/>
                break
            case 'Form':
                return <TodoForm/>
                break
        }
    }
    changeStateFromNav(component) {
        this.setState({ mainComponent: component })
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