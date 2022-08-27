import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs.js';

export const useFetchGifs = ( category ) => {
    const [ images, setImages ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    const getImages = async () => {
        const gifImages = await getGifs(category);
        setImages(gifImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}