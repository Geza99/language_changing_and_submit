import { useContext } from "react";
import languageContext from '../Context/LanguageContext';

const Button=()=> {
    //first possibility
    const language=useContext(languageContext);
    const text = language ==='english' ? 'Submit ' : 'Nyomd meg';
    //ternary operator
    return (
        <button className="ui button primary">
           {/* <OtherContext.Consumer>
                {(value)=>*/}
            <languageContext.Consumer>
                {/*just function declaration is allowed */}
                {(value)=> value==='english' ? 'Submit ' : 'Nyomd meg'}
            </languageContext.Consumer>
             {/* }
            </OtherContext.Consumer>
            */}
        {/*text*/}
        </button>

    );
}

export default Button;