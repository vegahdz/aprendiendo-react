import { useState, useEffect } from 'react'

const CAR_PREFIX_URL = `https://cataas.com/cat/says/`;

export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    //recuperar la imagen de gatos cada vez que tenemos una cita nueva
    useEffect(() => {
        if(!fact) return

        const threeFirstWords = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
            .then(res => res.json())
            .then(response => {
                const { _id } = response
                setImageUrl(`${threeFirstWords}`)
            })
    }, [fact])

    return { imageUrl: `${CAR_PREFIX_URL}${imageUrl}` }
}