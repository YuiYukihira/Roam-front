import * as React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


export interface FilterProps {default: string};
export class Filter extends React.Component<FilterProps, {}> {
    state = {
        selectedOption: this.props.default,
    };
    handleChange = (selectedOption: string) => {
        this.setState({selectedOption});
    }
    render() {
        const { selectedOption } = this.state;
        return <Dropdown>
            <Dropdown.Toggle id="sort-drop">{selectedOption}</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item eventKey="Hot" onSelect={this.handleChange}>Hot</Dropdown.Item>
                <Dropdown.Item eventKey="New" onSelect={this.handleChange}>New</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>;
    }
}