import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts.js'

export function useCatFact () {
    const [fact, setFact] = useState()

    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }

    //recuperar la cita o hecho de gatos al cargar la pagina
    useEffect(refreshFact, [])
    return { fact, refreshFact }

}