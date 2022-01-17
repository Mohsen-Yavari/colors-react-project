import React,{ useState } from 'react';
import SingleColor from './components/SingleColor';
//styles
import "./components/color.css";


//npm i value.js for colors:
import Values from 'values.js';





function App() {
  const [color,setColor] = useState("");
  const [error , setError] = useState(false); 
  const [list,setList] = useState(new Values("#ff7777").all(10));
  
  const HandelSubmit = (e) => {
      e.preventDefault();
      try {
          let colors =new Values(color).all(10);
          setList(colors)
      }catch(error) {
          setError(true)
          console.log(error)
      }
  };
      return <>
       <section className="container">
      <h3>color Generator :</h3>
      <form onSubmit={HandelSubmit}>
        <input 
        type="text" 
        placeholder="Type color" 
        value={color}
        onChange={(e) => setColor(e.target.value)} 
        className={`${error ? "error" : null}`}
        
         />
        <button className="btn" type="submit">Get Colors</button>
      </form>
  
    </section>
    <section className="colors">
      {list.map((color,index)=> {
        return(
            <SingleColor 
            key={index} 
            {...color} 
            index={index}
            hexColor={color.hex} 
            />
        );  
      })}
    </section>
      </>
}

export default App;
