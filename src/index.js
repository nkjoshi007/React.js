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
import Dark from './Dark';
import Clickcount from './Clicksamecount';
import List from './Rendering_lists';
import Profileimg from './Profile1';
import Respondevents from './Events_respond';
import Mail from './Mail';

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
  <Dark />
  <Clickcount />
  <List />
  <Profileimg />
  <Respondevents/>
  <Mail/>
  </>
  

);

