import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import Hello from './Helo';
import Profile from './img';
import Btn from './Clickbtn';
import Cls from './Cls';
import FizzBuzz from './FizzBuzz';
import Eventr from './events';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
  <>
   <App />
   <Hello />
   <Btn />
   <Eventr />
  <Profile />
  <FizzBuzz />
  <Cls />
  </>
  

);

