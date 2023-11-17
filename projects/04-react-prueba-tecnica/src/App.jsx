import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'
import { Otro } from './components/Otro.jsx';
import '/style.scss'


export function App () {

    const {fact, refreshFact} = useCatFact()
    const { imageUrl } = useCatImage ({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>

            <button onClick={handleClick}>Get new fact</button>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`Retrieve first 3 words in top sentence about cat facts: "${fact}"`} />}
            </section>

            <Otro />

        </main>
    )
}
