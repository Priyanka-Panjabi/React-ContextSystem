import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';


class App extends Component {
    state = {
        language: "English"
    }
    onlanguageChange = (language) => {
        this.setState({ language: language });
    }
    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language
                    <i className="flag us" onClick={() => this.onlanguageChange('English')} />
                    <i className="flag india" onClick={() => this.onlanguageChange('Hindi')} />
                </div>
                <ColorContext.Provider value="red">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>

            </div>
        )
    }
}

export default App
