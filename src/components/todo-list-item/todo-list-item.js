import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

    render() {
        const label = this.props.label;
        let itemClass = "todo-list-item";
        const style = {
            color: this.props.important ? 'steelblue' : 'black',
            fontWeight: this.props.important ? 'bold' : 'normal'
        };
        if (this.props.done) {
            itemClass += " done";
        }
        return (
            <span className={itemClass}>
              <span
                  className="todo-list-item-label"
                  style={style}
                  onClick={this.props.onToggleDone}>
                {label}
              </span>

              <button type="button"
                      onClick={this.props.onToggleImportant}
                      className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"/>
              </button>

              <button type="button"
                      onClick={this.props.onDeleted}
                      className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o"/>
              </button>
            </span>
        );
    }
}
