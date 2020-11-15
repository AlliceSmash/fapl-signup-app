import React, {useState, useEffect} from 'react';
import './App.css';
 
import Googlelogin from '../src/Components/google-login';
import Googlelogout from './Components/google-logout';

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
    {!isLoggedIn  &&
    <div className="container-fluid">     
      <Googlelogin />      
    </div>
    }
    {
      isLoggedIn &&
      <div>
        <Googlelogout/>
      </div>
    }
   
    </>
  );
}

export default App;
