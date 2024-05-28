import { useState } from "react"
import SinglePhoto, { PhotoCard } from "../components/PhotoCard"
import RandomPhoto from "../components/RandomPhoto"
import axios from "axios"

const FetchCall = () => {
    const [photo, setPhoto] = useState<PhotoCard | null>()

    const randomPhotoOnClick = async () => {
        const response = await fetch ("https://api.unsplash.com/search/photos/random&client_id=FLmzO8R7Ph0Ua41rLZbczBYkIn8oAlZXGavckx4wQ-8")
        const data = await response.json()
        const randomResult = data.results[0]
        setPhoto(randomResult)
       
    }


    
  return (
    <div>
        <h1>Random Photo of the Day</h1>
        {!photo ? "Click for a random photo" :
                <SinglePhoto
                    title={photo.title} 
                    picture={photo.picture} 
                />}
            <button onClick={RandomPhoto}>{!photo? "Click for a random photo" : "Click for another random photo"}</button>


    </div>
  )
}

export default FetchCall

