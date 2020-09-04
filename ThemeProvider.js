import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export const ThemeContext = React.createContext('light');

class ThemeProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            ...this.state,
            theme: 'light' 
        }
    }

    toggleTheme = () => {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light',
        })
    }
    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                <TouchableOpacity onPress={this.toggleTheme}>
                    <Text>toggle theme</Text>
                </TouchableOpacity>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeProvider