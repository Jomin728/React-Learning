import { useEffect,useState } from "react";
import yelp from "../api/yelp";

export default () => {

const [results,setResults] = useState([]);
const searchApi = async (param) =>{

try{
    const response = await  yelp.get('/search',{
        params:{
            limit:50,
            term:param,
            location:'san jose'
        }
       });
       setResults(response.data.businesses)
}
catch(e)
{
    
}
}
useEffect(()=>{searchApi('pizza')},[])

return [results,searchApi];

}

