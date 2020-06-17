import React from 'react';

import "./item-add-form.css";

export default class ItemAddForm extends React.Component {
    state = {
        label: ""
    }
    onChangeInput = (evt) => {
        this.setState({
            label: evt.target.value
        })
    }
    onSubmitInput = (evt) => {
        evt.preventDefault();
        this.props.onAdded(this.state.label);
        this.setState({
            label: ""
        })
    }

    render() {
        return (
            <form
                onSubmit={this.onSubmitInput}
                className="item-add-form d-flex"
            >
                <input
                    type="text"
                    className="form-control"
                    onChange={this.onChangeInput}
                    placeholder="What needs to be done"
                    value={this.state.label}
                />
                <button type="submit"
                        className="btn btn-outline-secondary">
                    Add
                </button>
            </form>
        )
    }
}