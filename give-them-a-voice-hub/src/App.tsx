import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { atom, useAtom } from 'jotai'
import "./App.css";
import VoiceDetails from "./voice-details/VoiceDetails";
import VoicesList from "./voices-list/VoicesList";
import { db } from "./services/firebase-service";
import { collection, onSnapshot } from "firebase/firestore";

export const voiceRecordingsAtom = atom([])

function App() {
  const [selectedVoiceUid, setSelectedVoiceUid] = useState<string | null>(null);
  const [voiceRecordings, setVoiceRecordings ] = useAtom<any[]>(voiceRecordingsAtom);

  useEffect(() => {
    onSnapshot(collection(db, "voices"), (snap) => {
      const results = snap.docs.map((doc) => {
        return doc.data();
      });
      setVoiceRecordings(results);
    });

  }, []);



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
