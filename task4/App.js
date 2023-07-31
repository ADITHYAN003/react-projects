import React from 'react';
//import './style.css';
import styles from './demo.module.css';
import ad from './img/anime.jpg'; 
import ad1 from "./img/samura.jpg";
import ad3 from "./img/samura1.jpeg";
import ad4 from "./img/samura2.jpeg";
class Inlinexample extends React.Component{
  render()
{
    return(
      <div className="App">
      <h1 className={styles.App}>Anime</h1>
      <h2></h2>
      <Reactstyle/>
      <h3></h3>
      
      </div> 
      
    );
}
}

class Reactstyle extends React.Component{
    render(){
        return(
            <div>
                <h3>The destoryer of my life.</h3>
                <img className='img1' src={ad} width="500"/>
                <img className='img2' src={ad1} width="500"/>
                <div>
                    <video width="1000" autoPlay loop controls className='video'>
                        <source src = "./vid/goku.mp4" type = "video/mp4"/>
                    </video>
                </div>
                <img className='img3' src={ad3} width="500"/>
                <img className='img4' src={ad4} width="500"/>
          </div>
          
        );
        }
    }
export default Reactstyle;