import React from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list"
import ItemStatusFilter from "../item-status-filter";

import './app.css';

export default class App extends React.Component {
    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ]
    }
    deleteElement = (id) => {
        const newTodo = this.state.todoData.filter((item) => item.id !== id)
        this.setState(() => {
            return {
                todoData: newTodo
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
                    onDeleted={this.deleteElement}
                    todos={this.state.todoData}
                />
            </div>
        );
    }
}