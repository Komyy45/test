import { async } from "q";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";


function App() {
  const [prods , setProds] = useState([]);
  useEffect( () => {
    fetch('https://fakestoreapi.com/products')
      .then(res=> res.json())
      .then((json) => setProds(json))
      .catch(err => console.error(err));

      
  } , [])

  return (
      <div className="App">
        <Header />
        <Body prods={prods}/>
      </div>
  );
}

export default App;

