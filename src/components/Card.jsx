import React from "react";
import '../style/Card.css';


export default function Card(props){
    const BMI = ()=>{
        console.log(document.getElementById("peso").value/Math.pow(
            (document.getElementById("altura").value)/100
            ,2));
    }

    return (
        <>
            <div className="form">
                <div className="content">
                    <p align="center">{props.title}</p> 
                    <div className="input-group">
                    <input required="" type="number" id="peso" name="number" autocomplete="off" placeholder="00" className="input"/>
                    <label className="user-label">Peso(kg)</label>
                    </div>
                    <div className="input-group">
                    <input required="" type="number" id="altura" name="number" autocomplete="off" placeholder="000"className="input"/>
                    <label className="user-label">Altura(cm)</label>
                    </div>
                    <button onClick={BMI}>Verify</button>
                    <svg className="svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4073ff" d="M56.8,-23.9C61.7,-3.2,45.7,18.8,26.5,31.7C7.2,44.6,-15.2,48.2,-35.5,36.5C-55.8,24.7,-73.9,-2.6,-67.6,-25.2C-61.3,-47.7,-30.6,-65.6,-2.4,-64.8C25.9,-64.1,51.8,-44.7,56.8,-23.9Z" transform="translate(100 100)" className="path"></path>
                    </svg>
                </div>
            </div> 


        </>  
    );
}