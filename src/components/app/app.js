import React from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list"
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import './app.css';

export default class App extends React.Component {
    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ]
    }
    maxId = this.state.todoData.length;
    deleteItem = (id) => {
        const newArray = this.state.todoData.filter((item) => item.id !== id)
        this.setState(() => {
            return {
                todoData: newArray
            }
        })
    }
    addItem = (text) => {
        const newArray = this.state.todoData;
        newArray.push({
            label: text,
            important: false,
            id: ++this.maxId
        })
        this.setState(() => {
            return {
                todoData: newArray
            }
        })
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    onDeleted={this.deleteItem}
                    todos={this.state.todoData}
                />
                <ItemAddForm
                    onAdded={this.addItem}
                />
            </div>
        );
    }
}