import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component {
    state = {
        label: ""
    }
    onChangeInput = (evt) => {
        this.setState({
            label: evt.target.value
        })
        this.props.onSearch(this.state.label);
    }

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   onChange={this.onChangeInput}
                   placeholder="type to search"/>
        );
    }
}
