
import React from "react";
import styles from './demo.module.css';
import ad from './img/anime.jpg'; 
import ad1 from "./img/samura.jpg";
import ad3 from "./img/samura1.jpeg";
import ad4 from "./img/samura2.jpeg";

class Join extends React.Component{
    render(){
        return(
            <div>
                <h1>Join us</h1>
                <p>Welcome to the Join page</p>
                <img src={ad} className="img 1" alt="Asus" width={300} height={300}/>
            </div>
        );
    }}

    export default Join;