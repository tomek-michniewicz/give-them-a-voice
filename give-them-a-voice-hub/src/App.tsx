import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import VoiceDetails from "./voice-details/VoiceDetails";
import VoicesList from "./voices-list/VoicesList";

function App() {
  // Uses useState hook to store the selected voice
  const [selectedVoiceUid, setSelectedVoiceUid] = useState<string | null>(null);

  const onSelect = (uid: string) => {
    setSelectedVoiceUid(uid);
  };

  return (
    <Container maxW="container.xl" boxShadow="md" p="6" rounded="md" bg="white" mt={8}>
      <Flex>
        <Box flex="1" mr="24px">
          <VoicesList onSelect={onSelect} />
        </Box>
        <Box flex="2">
          <VoiceDetails uid={selectedVoiceUid} />
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
