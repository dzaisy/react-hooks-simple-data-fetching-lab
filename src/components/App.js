// create your App component here
import React, {useState, useEffect} from "react";

function App() {
    const [dogImage, setDogImage] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(data => {
            setDogImage(data.message)
            setIsLoading(false)
        })
        .catch(error => console.error('error fetching message', error))
    }, []);
    
    let content = '';
    if (isLoading) {
      content = <p>Loading...</p>;
    } 
    else {
      content = <img src={dogImage} alt="A Random Dog" />;
    }

    return (
        <div>
           {content}
        </div>
    )
}

export default App;