import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'fa5504bdf83021e0995b5d968014d92e',
    language: 'pt-BR',
    page: 1
  }
})

export default api
