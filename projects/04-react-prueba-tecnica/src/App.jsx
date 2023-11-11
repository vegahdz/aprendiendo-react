import { useState, useEffect } from 'react'
import '/style.scss'

const CAT_ENDPOINT_RANDOM_FACT =`https://catfact.ninja/fact`
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}`
const CAR_PREFIX_URL = `https://cataas.com/cat/says/`;
export function App () {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()


    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            setFact(fact)

            const threeFirstWords = fact.split(' ', 3).join(' ')

            fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
                .then(res => res.json())
                .then(response => {
                    // console.log(response)
                    const { _id } = response
                    setImageUrl(`${threeFirstWords}`)
                })

        })
    }, [])

    return (
        <main>
            <h1>App de gatitos</h1>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={`${CAR_PREFIX_URL}${imageUrl}`} alt={`Retrieve first 3 words in top sentence about cat facts: "${fact}"`} />}
            </section>
        </main>
    )
}
