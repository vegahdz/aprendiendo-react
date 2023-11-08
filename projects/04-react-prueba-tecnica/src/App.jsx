import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT =`https://catfact.ninja/fact`
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`

export function App () {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()


    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            setFact(fact)

            const firstWord = fact.split(' ', 1).join(' ')
            console.log(firstWord)

            fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
            // fetch(`https://cataas.com/cat?json=true`)
                .then(res => res.json())
                .then(response => {
                    console.log(response)
                    const { _id } = response
                    setImageUrl(`https://cataas.com/cat/says/${firstWord}`)
                })

        })
    }, [])

    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`${fact}`} />}
        </main>
    )
}
