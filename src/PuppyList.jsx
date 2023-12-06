import { useEffect } from "react";

const PuppyList = () => {
    useEffect(() =>{
        const getPuppies = async() => {
        const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players`);
           const responseJson = await response.json();
        console.log(responseJson.data.players);
        };
        getPuppies();
    })
    return(
        <h1>Puppy List Works!</h1>
    )
}
    export default PuppyList;