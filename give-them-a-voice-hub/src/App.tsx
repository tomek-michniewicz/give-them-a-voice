import { Button, Container, Heading, Text } from '@chakra-ui/react'
import './App.css'

function App() {

  return (
    <Container>
      <Heading>Hello!</Heading>
      <Text my={4}>
        give-them-a-voice-hub
      </Text>
      <Button colorScheme='blue'>Ok</Button>
    </Container>
  )
}

export default App
