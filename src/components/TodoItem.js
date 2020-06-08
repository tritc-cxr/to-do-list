import React, { Component } from 'react'

export default class TodoItem extends Component {



    render() {

        const { title, handleDelete, handleEdit, completed, handleSuccess } = this.props

        return (
            <li className="text-capitalize list-group-item d-flex justify-content-between my-2">
                <h6 style={completed ? { textDecoration: "line-through", color: "grey" } : null}>{title}</h6>
                <div className="todo-icon">

                    <span className="mx-2 text-success" onClick={handleSuccess}>
                        <i className="fas fa-clipboard-check fa-lg"></i>
                    </span>

                    <span className="mx-2 text-success" onClick={handleEdit}>
                        <i className="fas fa-edit fa-lg"></i>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fas fa-trash-alt  fa-lg"></i>
                    </span>
                </div>
            </li>
        )
    }
}
