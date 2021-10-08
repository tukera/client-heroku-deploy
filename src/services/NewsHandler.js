import axios from 'axios'

class NewsApi {
  constructor() {
    const storedToken = localStorage.getItem('authToken')

    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: { Authorization: `Bearer ${storedToken}` }
    });
  }

  getAllNews = () => this.api.get('/news')
}

export default NewsApi;