import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASEURL
const api = axios.create({ baseURL })

export async function useLoaderFetch(url) {
  const res = await api.get(url)
  return res.data
}

export default api
