import api from '../../services/api'
import { Background } from './styles'

function Home() {
  async function getMovies() {
    const data = await api.get('/movie/popular')

    console.log(data)
  }
  getMovies()

  return (
    <Background img="https://image.tmdb.org/t/p/original//xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg">
      <h1>Home</h1>
      <p>Essa é a Home</p>
    </Background>
  )
}

export default Home
