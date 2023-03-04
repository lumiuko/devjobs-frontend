import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASEURL

const api = axios.create({
  baseURL
})

export default api
