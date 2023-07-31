import React, { Component } from "react";
import styles from './demo.module.css';
import ad from './img/anime.jpg'; 
import ad1 from "./img/samura.jpg";
import ad3 from "./img/samura1.jpeg";
import ad4 from "./img/samura2.jpeg";
class Home extends Component{
    render(){
        return(
            <div>
                <div>
                    <div>
                        <img src={ad3} className="img1" alt="Asus" width={300} height={300}/>
                        <img src={ad4} className="img2" alt="Iphone" width={300} height={300}/>
                    </div>
                    <br/>
                    <br/>
                    <div>
                    <img src={ad} className="img1" alt="oneplus" width={300} height={300}/>
                    <img src={ad1} className="img2" alt="oneplus" width={300} height={300}/>
                    </div>

                </div>
            </div>
           
           
        );
    }
}

export default Home;