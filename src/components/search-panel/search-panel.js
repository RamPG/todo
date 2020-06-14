import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component {
    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="type to search"/>
        );
    }
}
