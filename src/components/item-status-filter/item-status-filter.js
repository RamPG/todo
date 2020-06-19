import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {
    state = {
        filterButtons: [
            {name: 'all', label: 'All'},
            {name: 'active', label: 'Active'},
            {name: 'done', label: 'Done'}
        ]
    }

    changeFilter = (evt) => {
        this.props.onFilterChange(evt.target);
    }

    render() {
        const buttons = this.state.filterButtons.map((item) => {
            return (
                <button type="button"
                        onClick={() => this.props.onFilterChange(item.name)}
                        key={item.name}
                        className={this.props.filter === item.name ? "btn btn-info" : "btn btn-outline-secondary"}>{item.label}
                </button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}
