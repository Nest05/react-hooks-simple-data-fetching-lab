// create your App component here
import React, {useState, useEffect} from 'react'

const App = () => {
    
        const [dogImage, setdogImage] = useState([]);
        const [isLoaded, setIsLoaded] = useState(false);
      
        useEffect(() => {
          fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
            console.log(data)
              setdogImage(data.message);
              setIsLoaded(true);
            });
        }, []);
      
        // if the data hasn't been loaded, show a loading indicator
        if (!isLoaded) return <h3>Loading...</h3>;
      
  return (
    <div>
      <img src={dogImage} alt='A Random Dog' />
    </div>
  )
}

export default App
