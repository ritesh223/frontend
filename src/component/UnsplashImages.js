import React, { useState, useEffect } from "react";
import axios from "axios";

function UnsplashImages({name}) {
  const [images, setImages] = useState("");
  
let i=0;

  useEffect(() => {
      async function fetchImages() {
          const response = await axios.get(
            `https://pixabay.com/api/?key=36164369-56aa5dd0bdb0b947ad8ad9e0f&q=${name}&image_type=photo&category=${name}&editors_choice=true&per_page=20`
          );
              setImages(response.data.hits[i + 1].previewURL);
              i++;
    }
    fetchImages();
  }, [name]);
  return <img src={images} alt= "Image Unavailable" />;

  
}

export default UnsplashImages;
