import React, { Component } from 'react'
import TodoItem from "./TodoItem"

export default class TodoList extends Component {
    render() {

        const { items, clearList, handleDelete, handleEdit, handleSuccess } = this.props

        return (
            <ul className="list-group list-group-flush my-5">
                <h3 className="text-capitalize text-center">
                    To-do list
                </h3>

                {items.map(item => {
                    return (
                        <TodoItem
                            key={item.id}
                            title={item.title}
                            completed={item.completed}
                            handleSuccess={() => handleSuccess(item.id)}
                            handleDelete={() => handleDelete(item.id)}
                            handleEdit={() => handleEdit(item.id)}
                        />
                    )
                })}

                <button
                    type="button"
                    className="btn btn-danger btn-block text-capitalize mt-5"
                    onClick={clearList}
                >Clear list</button>
            </ul>
        )
    }
}
