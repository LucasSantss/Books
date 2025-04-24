import axios from 'axios'

const livrosAPI = axios.create({ baseURL: "https://books-api-coral-zeta.vercel.app/livros" })

async function getLivros() {
    const response = await livrosAPI.get('/')

    return response.data
}

export {
    getLivros
}