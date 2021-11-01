import React, {useEffect} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    
    if(_token){
      setToken(_token)
    }  

    console.log('i have a token',token);
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <h1>i am logged in</h1>
        ):(
          <Login/>
        )
      }
      </div>
  );
}

export default App;
