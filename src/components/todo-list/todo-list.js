import React from 'react';

import TodoListItem from "../todo-list-item";
import './todo-list.css';

export default class TodoList extends React.Component {
    render() {
        const elements = this.props.todos.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <li key={id}
                    className="list-group-item">
                    <TodoListItem
                        {...itemProps}
                        onDeleted={() => this.props.onDeleted(id)}
                        onToggleImportant={() => this.props.onToggleImportant(id)}
                        onToggleDone={() => this.props.onToggleDone(id)}
                    />
                </li>
            );
        });
        return (
            <ul className="list-group todo-list">
                {elements}
            </ul>
        );
    }
}
