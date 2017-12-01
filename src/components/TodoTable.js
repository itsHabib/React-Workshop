import React, { Component } from 'react'

export default class TodoTable extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
            <div className="row">
                <h3 className="mt-3">Todo Table</h3>
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
                    {this.props.todos.map((todo, i) =>
                        <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{todo.text}</td>
                            <td>{todo.date}</td>
                            <td>
                                <button id={i} 
                                    onClick={this.props.todoComplete} 
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