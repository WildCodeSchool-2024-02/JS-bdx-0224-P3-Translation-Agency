import axios from "axios"

const URL = 'http://localhost:3310/api/estimations'

export const createDevis = async (data) => {
    const devis = await axios.post(URL, data);
    return devis;
}


export const getDevis = async () => {
    const devis = await axios.get(URL)
    return devis.data
}