import React from 'react'
import axios from 'axios'
import { useState } from 'react';

const RandomPhoto = () => {
    const [normalState, randomPhotoOnClick] = useState<any>();

    const randomPhotoonClick = () => {
        axios({
            baseURL: "https://api.unsplash.com/photo/random",
            method: "get",
            accessKey: "FLmzO8R7Ph0Ua41rLZbczBYkIn8oAlZXGavckx4wQ-8"
            
          })
          .then((response) => {
            console.log(response.data);
          });


        
        
    }

    console.log(randomPhotoonClick)

    return (
        <div className='randomPhotoContainer'>
            <div className='single-photo-container'>
                <h1>{}</h1>
            </div>
            <button onClick={randomPhotoonClick}  className="submit">{!randomPhotoOnClick ? "Click here for a random photo" : " Click here for another random photo"}</button>


        </div>
    )
}

export default RandomPhoto;