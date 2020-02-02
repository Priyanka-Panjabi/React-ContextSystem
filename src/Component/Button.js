import React,{Component} from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends Component{
    static contextType=LanguageContext;                     //   to hookup context object to class component it is to be named ContextType only
    render(){
        let text=this.context==="English"?"Submit":"Darj Kare";
        return(
        <button className="ui primary button ">{text}</button>
        )
        
    }
}

//we can also add context type property to class by
// Button.contextType=LanguageContext
export default Button