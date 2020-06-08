import React from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuid } from "uuid";

class App extends React.Component {

  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
    completed: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
      completed: this.state.completed
    }

    const updateItem = [...this.state.items, newItem];

    this.setState({
      items: updateItem,
      item: "",
      id: uuid(),
      editItem: false,
    })
  }

  clearList = () => {
    this.setState({
      items: [],
    })
  }

  handleDelete = (id) => {
    const filteredItem = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItem,
    })
  }

  handleEdit = (id) => {
    const filteredItem = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItem,
      item: selectedItem.title,
      editItem: true,
      id: id,
      completed: selectedItem.completed,
    })
  }

  handleSuccess = (id) => {
    let newArray = this.state.items;
    let index = this.state.items.findIndex(elm => elm.id === id);

    newArray[index].completed = !newArray[index].completed;
    this.setState({ items: newArray });
  }


  render() {
    return (
      <div className="container" >
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h2 className="text-captitalize text-center">
              To-do things
          </h2>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleSuccess={this.handleSuccess}
            />
          </div>
        </div>
      </div>
    )
  };

}

export default App;
