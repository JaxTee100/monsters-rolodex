import React from "react";
import './search-box.styles.css'


const SearchBox =({onSearchChange, placeholder, classname}) =>{

        

        return(
            <input 
                className={`search-box ${classname}`}
                type="search" 
                placeholder={placeholder}
                onChange={onSearchChange}
            />
        )
    
}


export default SearchBox;