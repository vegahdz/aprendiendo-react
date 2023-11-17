const CAT_ENDPOINT_RANDOM_FACT =`https://catfact.ninja/fact`

//recuperar la cita o hecho de gatos al cargar la pagina
export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const { fact } = data
    return fact
}

