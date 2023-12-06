import { useState } from 'react';
import './App.css'
import PuppyList from "./PuppyList"
import PuppyDetails from "./PuppyDetails"
import { Routes, Route, Link } from "react-router-dom";

function App( ) {
const [ShowDetails, setShowDetails]  = useState(false)

  return (

<>
<h1>Puppy Bowl Page</h1>
{
 ShowDetails ?   <PuppyDetails/> : <PuppyList setShowDetails ={setShowDetails}/>
}
</>
);

}

export default App
