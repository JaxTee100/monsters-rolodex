import React from "react";
import Card from "../card/card.component";
import './card-list.styles.css';


const CardList = ({ monsters }) => {

   
        
       
       
        return(
            <div className="card-list">
                
                {monsters.map((monster) =>(
                    
                //mapping through the monsters gotten as a prop
                 <Card monster={monster} />
                
                 ))} 
            </div>
        )
    

}
export default CardList;