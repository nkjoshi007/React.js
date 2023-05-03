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
import Qna from './Qna';
import Todolist from './Todolist';
import Context from './Context';
import Memo from './Memo';
import Ref from './Ref';
import Effect from './Effect';
import Reducer from './Reducer';
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
  
  <Carousel img1={"https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/9/2021_9$largeimg_1725534029.JPG"} img2={"https://filmfare.wwmindia.com/content/2023/apr/salman-khan-11681297656.jpg"} img3={"https://lagatar24.com/wp-content/uploads/2023/04/Salman.jpg"} img4={"https://static.toiimg.com/thumb/msid-99492423,imgsize-54862,width-400,resizemode-4/99492423.jpg"} img5={"https://i.scdn.co/image/ab6761610000e5eb8e8f4609471349b4bfdbf774"} img6={"https://www.pinkvilla.com/english/images/2023/02/1675681417_salman.jpg"} img7={"https://navbharattimes.indiatimes.com/thumb/99023014/salman-khan-99023014.jpg?imgsize=53182&width=1200&height=900&resizemode=75"} img8={"https://static.toiimg.com/thumb/msid-87994265,imgsize-34104,width-800,height-600,resizemode-75/87994265.jpg"} img9={"https://starsunfolded.com/wp-content/uploads/2013/08/Salman-Khan-picsss.jpg"}/>
  <Qna Sawal1={"where is India ?"} Ans={"west"} Hint={"only Direction"}/>
  <Todolist />
  <Context/>
  <Memo/>
  <Ref/>
  <Effect/>
  <Reducer/>
  </>
  

);
