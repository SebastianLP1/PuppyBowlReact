import { useEffect } from "react";

const PuppyList = () => {
    useEffect(() =>{
        const getPuppies = async() => {
        const response = await fetch (` https://fsa-puppy-bowl.herokuapp.com/api/`);
           const responseJson = await response.json();
        console.log(responseJson);
        };
        getPuppies();
    })
    return(
        <h1>Puppy List Works!</h1>
    )
}
    export default PuppyList;