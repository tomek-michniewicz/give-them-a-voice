import {
  Box,
  Button,
  Container,
  Fade,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MdFiberManualRecord, MdOutlineStopCircle } from "react-icons/md";
import useRecorder from "./hooks/useRecorder";

import "./App.css";

function App() {
  const { isOpen, onOpen } = useDisclosure();
  let [audioUrl, isRecording, startRecording, stopRecording] = useRecorder();

  const sendRecording = () => {
    onOpen();
  };

  return (
    <>
      <Box w="100%" bg="white" px={2} py={3} mb={8} boxShadow="md">
        <Heading as="h1" size="md" color={"gray.600"} textAlign="center">
          Give Them a Voice - client app
        </Heading>
      </Box>
      <Container
        maxW="container.sm"
        p="4"
        rounded="md"
        bg="white"
        centerContent
      >
        <audio src={audioUrl} controls />
        <Stack direction="row" spacing={4} mt={4}>
          <Button
            leftIcon={<MdFiberManualRecord />}
            size="sm"
            colorScheme="red"
            variant="solid"
            isDisabled={!!isRecording}
            onClick={startRecording}
          >
            Record
          </Button>
          <Button
            leftIcon={<MdOutlineStopCircle />}
            size="sm"
            colorScheme="white"
            variant="outline"
            isDisabled={!isRecording}
            onClick={stopRecording}
          >
            Stop
          </Button>
        </Stack>

        <Button
          colorScheme="twitter"
          isDisabled={audioUrl == ""}
          mt={8}
          onClick={sendRecording}
        >
          Send Recording
        </Button>

        <Fade in={isOpen}>
          <Box p="32px" mt="4" textAlign={"center"}>
            <p>
              Your recording was sent and we will do our best to provide some help.
            </p>
            <p>
              In the meantime, please look at the automatically generated action items and suggestions below. They may be helpful already!
            </p>          
          </Box>
        </Fade>
      </Container>
    </>
  );
}

export default App;
