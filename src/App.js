import { useState } from "react";
import PostCreate from "./components/PostCreate";
import LanguageContext from './Context/LanguageContext';


function App() {
  const [language, setLanguage] = useState('hungarian')

  return (
    <div style={{color:"green",fontSize:"30px",alignItems:"center",textAlign:"center",fontWeight:"bold"}}>
      Select a language: 
      <i className="flag us"  onClick={() => setLanguage('english')}></i>
      <i className="flag hu" onClick={() => setLanguage('hungarian')}></i>
      <br></br> <br></br>
      <div style={{color:"rgb(208,2,27)",fontSize:"20px",fontWeight:"bold"}}>
        Actual language: {language}
      </div>
      <div style={{color:"red",fontSize:"15px",fontWeight:"bold"}}>
        <LanguageContext.Provider value={language}> 
          
          <PostCreate/>
        
        </LanguageContext.Provider>
       
      </div>
    </div>
  );
}

export default App;