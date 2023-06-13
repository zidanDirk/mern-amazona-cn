import { useQuery } from 'react-query'
import apiClient from './service'
import './App.css'

function App() {
  const { data, isLoading } = useQuery('hello', async () => {
    const { data } = await apiClient.get('/hello')
    return data
  })
  return (
    <>
        <h1>{ isLoading ? 'loading' : data }</h1>
    </>
  )
}

export default App
