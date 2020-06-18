import React from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list"
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import './app.css';

export default class App extends React.Component {
    maxId = 1;
    state = {
        todoData: [
            this.createTodoItem("Drink Coffee"),
            this.createTodoItem("Make Awesome App"),
            this.createTodoItem("Have a lunch")
        ],
        term: ""
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    updateTerm = (text) => {
        this.setState({
            term: text
        })
    }
    deleteItem = (id) => {
        const newArray = this.state.todoData.filter((item) => item.id !== id)
        this.setState(() => {
            return {
                todoData: newArray
            }
        })
    }
    addItem = (text) => {
        const newTodoItem = this.createTodoItem(text)
        this.setState((prevState) => {
            return {
                todoData: [...prevState.todoData, newTodoItem]
            }
        });
    }
    toggleElement = (prevState, id, key) => {
        const index = prevState.todoData.findIndex((item) => item.id === id);
        const oldItem = prevState.todoData[index];
        const newItem = {...oldItem, [key]: !oldItem[key]};
        return [
            ...prevState.todoData.slice(0, index),
            newItem,
            ...prevState.todoData.slice(index + 1)
        ];
    }
    toggleImportant = (id) => {
        this.setState((prevState) => {
            return {
                todoData: this.toggleElement(prevState, id, "important")
            }
        })
    }
    toggleDone = (id) => {
        this.setState((prevState) => {
            return {
                todoData: this.toggleElement(prevState, id, "done")
            }
        })
    }

    searchItems = (items, search) => {
        if (search.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
    }

    render() {
        const items = this.searchItems(this.state.todoData, this.state.term)
        const doneCount = this.state.todoData.filter((item) => item.done).length;
        const activeCount = this.state.todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader toDo={activeCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearch={this.updateTerm}
                    />
                    <ItemStatusFilter/>
                </div>
                <TodoList
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.toggleImportant}
                    onToggleDone={this.toggleDone}
                    todos={items}
                />
                <ItemAddForm
                    onAdded={this.addItem}
                />
            </div>
        );
    }
}