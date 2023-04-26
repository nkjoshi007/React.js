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
import Diffinc from './Diffinc';
import Profilechanger from './Proflechanger';
import Carousel from './Carousel';

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
  <Diffinc/>
  <Profilechanger/>
  <Carousel img1={"https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/9/2021_9$largeimg_1725534029.JPG"} img2={"https://filmfare.wwmindia.com/content/2023/apr/salman-khan-11681297656.jpg"} img3={"https://lagatar24.com/wp-content/uploads/2023/04/Salman.jpg"} img4={"https://static.toiimg.com/thumb/msid-99492423,imgsize-54862,width-400,resizemode-4/99492423.jpg"}/>
  </>
  

);

