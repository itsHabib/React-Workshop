import React, { Component } from 'react'

let dummyData = [
    {
        text: 'Do Laundry',
        date: '10 / 05 / 2017'
    },
    {
        text: 'Take out the trash',
        date: '11 / 07 / 2017'
    },
    {
        text: 'Take a math test',
        date: '05 / 14 / 2017'
    },
    {
        text: 'Create a website',
        date: '09 / 15 / 2017'
    },
    {
        text: 'Create painting for art class',
        date: '12 / 21 / 2017'
    },
    {
        text: 'Finish chat box',
        date: '10 / 05 / 2017'
    },
    {
        text: 'Tell my wife about my day',
        date: '01 / 05 / 2017'
    },
    {
        text: 'Cook a surprise dinner for my husband',
        date: '12 / 04 / 2017'
    },
    {
        text: 'Pick up my new puppy from the rescue',
        date: '03 / 04 / 2017'
    }
]

export default class TodoTable extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            todos: dummyData
        }

    }

    todoComplete(event) {
        let todos = this.state.todos.filter((todo, i) => 
            i != event.target.id
        )
        console.log(todos)
        this.setState({ todos })
    }

    render() {
        return (
            <div className="container">
            <div className="row">
                <h1 className="mt-3">Todo Table</h1>
            </div>
            <div className="row">
            <table className="table table-striped mt-2">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Todo</th>
                        <th scope="col">Date</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.todos.map((todo, i) =>
                        <tr>
                            <th scope="row">{i + 1}</th>
                            <td>{todo.text}</td>
                            <td>{todo.date}</td>
                            <td>
                                <button id={i} 
                                    onClick={this.todoComplete.bind(this)} 
                                    className="btn btn-primary">
                                    Complete
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
        </div>
        )
    }
}