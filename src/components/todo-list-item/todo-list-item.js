import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

    state = {
        done: false,
        important: this.props.important
    }
    strikeOut = () => {
        this.setState((prevState) => {
            return {
                done: !prevState.done
            }
        })
    }
    highlightImportant = () => {
        this.setState((prevState) => {
            return {
                important: !prevState.important
            }
        })
    }

    render() {
        const label = this.props.label;
        let itemClass = "todo-list-item";
        const style = {
            color: this.state.important ? 'steelblue' : 'black',
            fontWeight: this.state.important ? 'bold' : 'normal'
        };
        if (this.state.done) {
            itemClass += " done";
        }
        return (
            <span className={itemClass}>
              <span
                  className="todo-list-item-label"
                  style={style}
                  onClick={this.strikeOut}>
                {label}
              </span>

              <button type="button"
                      onClick={this.highlightImportant}
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
