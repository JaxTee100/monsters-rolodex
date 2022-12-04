import React, {useState, useEffect} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";




const App = () => {
  //pure and impure functions
  //a pure function depends on the values passed in the argument and does not rely on any value from the outside
  //side effects outside the scope of the function



  //states
  const [searchField, setSearchField] = useState("")
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  const [bgColor, setBgColor] = useState({
    color1: "",
    color2: "",
    color3: "",
    color4: "",
    color5: "",
    color6: ""
  })
  




  
  //aniother side effect
  useEffect(()=>{
    
      let letter = "abcdef0123456789"
      let xColor = letter.charAt(Math.floor(Math.random() * letter.length))
      let yColor = letter.charAt(Math.floor(Math.random() * letter.length))
      let zColor = letter.charAt(Math.floor(Math.random() * letter.length))
      let aColor = letter.charAt(Math.floor(Math.random() * letter.length))
      let bColor = letter.charAt(Math.floor(Math.random() * letter.length))
      let cColor = letter.charAt(Math.floor(Math.random() * letter.length))
      setBgColor(prev => {
        return {
          ...prev,
          color1: xColor,
          color2: yColor,
          color3: zColor,
          color4: aColor,
          color5: bColor,
          color6: cColor
  
        }
      })
      
    
  }, [])

  //sideeffects
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')//fetch data from the site

    .then((response) => response.json())//convert to json 

    .then((users) =>
       setMonsters(users));

  }, []);

  useEffect(() =>{
    const newFilteredMonsters = monsters.filter((monster) =>{
      return monster.name.toLocaleLowerCase().includes(searchField);
   });


   setFilteredMonsters(newFilteredMonsters)

  }, [monsters, searchField])
  
  
  
  //functions
  const onSearchChange = (event) =>{
   
            
          const searchFieldString = event.target.value.toLocaleLowerCase();
          setSearchField(searchFieldString)
        }
  



  


  return(
          <div className="App" style={{backgroundColor: `#${bgColor.color1}${bgColor.color2}${bgColor.color3}${bgColor.color4}${bgColor.color5}${bgColor.color6}`}}>
            <h1 className="app-title">Monsters Rolodex</h1>
            <SearchBox 
              onSearchChange = {onSearchChange} 
              placeholder="search Monsters"
              classname = "monster-search-box"
            />
            
            <CardList monsters={filteredMonsters} />


            {//tried something random
            <h1>{bgColor.color1}{bgColor.color2}{bgColor.color3}{bgColor.color4}{bgColor.color5}{bgColor.color6}</h1>}
            <button>Change</button>
          </div>
        )
}


export default App;






