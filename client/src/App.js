import './App.css';
import { useEffect, useState } from "react"

function App() {
  const [messageFromAPI, setMessageFromAPI] = useState("");
  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch("http://localhost:3001/api/test/hello")
      const resdata = await res.json()
      setMessageFromAPI(resdata.message)
    } 
    fetchData();
    console.log(messageFromAPI)
  }, [messageFromAPI])
  return (
    <div className="App">
      <div className="banner">
        <div className="container">
          <img className="aws" alt="AWS" src="https://www.drupal.org/files/project-images/aws-logo.jpg"></img>
          <img className="mist" alt="MIST" src="https://wearemist.in/images/logoLight.png"></img>
        </div>
        <div className="api-res">
        {messageFromAPI && <p>{messageFromAPI}</p>}
      </div>
      </div>
    </div>
  );
}

export default App;
