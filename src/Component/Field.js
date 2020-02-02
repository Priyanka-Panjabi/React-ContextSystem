import React, { Component } from 'react';

// consuming data with consumer component 
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Field extends Component {
    render() {
        return (

            <ColorContext.Consumer>
            {(color) =>
                <div className="ui field">
                    <label style={{color:color}}>
                        <LanguageContext.Consumer>
                            {(value) => value === "English" ? "Name" : "Naam"}
                        </LanguageContext.Consumer>
                    </label>
                    <input></input>
                </div>
            }

            </ColorContext.Consumer>

        )
    }
}
export default Field;