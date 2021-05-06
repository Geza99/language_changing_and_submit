import React,{useContext} from 'react';
import LanguageContext from '../Context/LanguageContext';

const Field=()=> {
    const language=useContext(LanguageContext);
    const text = language ==='english' ? 'New post name' : 'Kérem az uj üzenetet';
    return (
        <div className="ui field">
            <label>{text}</label>
            <input type='text' />
        </div>
    )
}

export default Field;