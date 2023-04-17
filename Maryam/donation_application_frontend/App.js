import './App.css';
import React, {useEffect, useState} from "react";
import "./db.json";


function App() {
  const [value, setValue] = useState("");
  const [result, setResults] = useState([]);
  
  useEffect(() => {
    if (value.length > 0) {
      fetch("https://taawun-bcab1-default-rtdb.asia-southeast1.firebasedatabase.app/.json").then(
        response => response.json()

      ).then(responseData =>{
        setResults([]);
        let searchQuery = value.toLowerCase();
        for(const key in responseData)
        {
          let ngo = responseData[key].name.toLowerCase();
          if(ngo.slice(0,searchQuery.length).indexOf(searchQuery)!==-1){
            setResults(prevResult =>
              {
                return [prevResult,responseData[key].name]
              })
          }
        }
      }).catch(error =>
        {
          console.log(error)
        })
    }else{
      setResults([]);
    }

  }, [value]);

  return (
    <div className='search'>
      <input
        type='text'
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder='Search...'
      />
      <div>
      {result.length > 0 ? (
          result.map((result, index) => (
            <a href="#" key={index}>
              <div>{result}</div>
            </a>
          ))
        ) : (
          <div>No results found..</div>
        )}
      </div>
    </div>
  );
}

export default App;
