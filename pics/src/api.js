import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
          Authorization:'Client-ID FLWsZEzRQkgTJ731U1Odurds2Tmu-gQC8hXO4fykwXQ'
        },
        params:{
           query:term
        }
    })
    console.log(response)
    return response.data.results;
}

export default searchImages;