import { useEffect, useState } from "react";


const PuppyList = ({setShowDetails, setsinglepuppydetailsURL}) => {
    const [AllPuppyList, setAllPuppyList] = useState([]);
    useEffect(() => {
        const getPuppies = async () => {
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players`);
            const responseJson = await response.json();
            const allPuppies = responseJson.data.players
            setAllPuppyList(allPuppies);
            console.log(allPuppies)
        };
        getPuppies();
    }, [])
    return (
      <>
            <h1>Puppy List</h1>
            {
                AllPuppyList.map((singlePuppy) => { 
               // console.log(singlePuppy);
                return <li onClick ={() =>{
                    setShowDetails(true);
                    setsinglepuppydetailsURL(singlePuppy.breed);
                    }} key = {singlePuppy.name}>
                    {singlePuppy.name}</li>
                })
            }
        </>
    )
}
export default PuppyList;