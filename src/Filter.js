import React from 'react';
import Select from 'react-select';

const options = [
    {value: 'hot', label: 'Hot'},
    {value: 'new', label: 'New'}
];

const customStyles = {
    option: (provided, state) => {
        const color = state.isSelected ? '#fff' : 'inherit';
        var backgroundColor = 'inherit';
        if (state.isSelected) {
            backgroundColor = '#555';
        } else if (state.isFocused) {
            backgroundColor = '#444';
        }
        return {...provided, color, backgroundColor}
    },
    control: () => ({
//        width: 200,
        height: 20,
        display: 'flex',
    }),
    singleValue: (provided, state) => ({
        ...provided,
        opacity: state.isDisabled ? 0.5 : 1,
        position: 'unset',
        transform: 'unset',
        top: 'unset',
        color: 'inherit',
    }),
    placeholder: (provided) => ({
        ...provided,
        position: 'unset',
        transform: 'unset',
        top: 'unset',
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        height: '100%',
        'margin-top': 0,
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: '#333'
    })
    /**/
}

class Filter extends React.Component {
    state = {
        selectedOption: {value: 'hot', label: 'Hot'},
    };
    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            () => console.log('Option selected:', this.state.selectedOption)
        );
    };

    render() {
        const { selectedOption } = this.state;
        return (
            <Select
                value={selectedOption}
                options={options}
                styles={customStyles}
                onChange={this.handleChange}
            />
        );
    }
}

export default Filter;