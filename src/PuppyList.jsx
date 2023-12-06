import { useEffect, useState } from "react";

const PuppyList = () => {
    const [AllPuppyList, setAllPuppyList] = useState([]);
    useEffect(() => {
        const getPuppies = async () => {
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players`);
            const responseJson = await response.json();
            const allPuppies = responseJson.data.players
            console.log(allPuppies);
            setAllPuppyList(allPuppies);
            
            
        };
        getPuppies();
    }, [])
    return (
      <>
            <h1>Puppy List Works!</h1>
            {
                AllPuppyList.map((singlePuppy) => { 
                console.log(singlePuppy);
                return <li>{singlePuppy.name}</li>
                })
            }
        </>
    )
}
export default PuppyList;