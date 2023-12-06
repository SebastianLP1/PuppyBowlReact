import { useState } from 'react';
import './App.css'
import PuppyList from "./PuppyList"
import PuppyDetails from "./PuppyDetails"

function App( ) {
const [ShowDetails, setShowDetails]  = useState(false)
const [singlepuppydetailsURL, setsinglepuppydetailsURL] = useState(``)

  return (
<>
<h1>Puppy Bowl Page</h1>
{
 ShowDetails ?   <PuppyDetails/> : <PuppyList setShowDetails ={setShowDetails} setsinglepuppydetailsURL={setsinglepuppydetailsURL}/>
}
{
  console.log(setsinglepuppydetailsURL)
}
</>
);

}

export default App
