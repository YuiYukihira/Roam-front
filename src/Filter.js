import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class Filter extends React.Component {
    state = {
        selectedOption: 'Hot',
    }
    handleChange = (selectedOption) => {
        this.setState(
            {selectedOption},
            () => console.log('Option selected: ', this.state.selectedOption)
        );
    };

    render() {
        const { selectedOption } = this.state;
        return (
            <Dropdown>
                <Dropdown.Toggle id="sort-drop">{selectedOption}</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="Hot" onSelect={this.handleChange}>Hot</Dropdown.Item>
                    <Dropdown.Item eventKey="New" onSelect={this.handleChange}>New</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    };
}

export default Filter;