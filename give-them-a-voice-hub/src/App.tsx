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
    <>
      <Box w="100%" bg="white" px={2} py={3} mb={8} boxShadow="md">
        <Heading as="h1" size="md" color={"gray.600"} textAlign="center">
          Give Them a Voice - hub
        </Heading>
      </Box>
      <Container maxW="container.xl" p="6" rounded="md" bg="white" mt={8}>
        <Flex>
          <Box flex="1" mr="24px">
            <Heading as="h4" size="sm" mb={4} color={"gray.600"}>
              Recordings List
            </Heading>
            <VoicesList onSelect={onSelect} />
          </Box>
          <Box w="1px" bgColor={"gray.200"} />
          <Box flex="2" ml="32px">
            <VoiceDetails uid={selectedVoiceUid} />
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default App;
