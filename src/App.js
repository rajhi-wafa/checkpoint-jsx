import React from 'react';
import './style.css';
import FullImage from './imageInSrc.jpg'

import './App.css';

function App() {
  return (
    <div className="App">

      <div style={{border:'solid 1px black', maxWidth:'100vw'}} />  
 
     <h1 className ="titlered”>Your name here</h1>  

     <br>  

       <FullImage/>
       
      

          <img src="/myImage.jpg"/>  

</div>  

<video width="320" height="240" controls>  

   <source src="myVideo.mp4" type="video/mp4"> 

</video> 
     
    </div>
  );
}

export default App;
