import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { VOICES } from "../data";

export interface VoiceDetailsProps {
  uid: string | null;
}

function VoiceDetails(props: VoiceDetailsProps) {
  // When nothing is selected, show a message
  if (!props.uid) {
    return (
      <Center>
        <Text color={"gray.500"}>None selected</Text>
      </Center>
    );
  }

  const voice = VOICES.find((voice) => voice.uid === props.uid);
  const transcriptionParagraphs = voice?.transcription.split("\n");

  return (
    <Box>
      <Heading as="h4" size="md" mb={4}>
        Recording
      </Heading>
      <audio controls src={voice?.recording}>
        <a href={voice?.recording}>Download audio</a>
      </audio>

      <Heading as="h4" size="md" mt={8} mb={4}>
        Transcription
      </Heading>
      {transcriptionParagraphs?.map((paragraph, idx) => (
        <Text mb={2} key={idx}>
          {paragraph}
        </Text>
      ))}
    </Box>
  );
}

export default VoiceDetails;
