import { Container } from '@mui/material'
import Header from './components/Header'
import PostsList from './components/PostsList'

function App() {
  return (
    <>
      <Header />
      <Container maxWidth='lg'>
        <PostsList />
      </Container>
    </>
  )
}

export default App
