import { Box, Button, Center, Heading, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ANALYSIS, VOICES } from "../data";
import {
  AnalysisResponse,
  AnalysisUI,
  dataService,
} from "../services/data-service";

export interface VoiceDetailsProps {
  uid: string | null;
}

function VoiceDetails(props: VoiceDetailsProps) {
  const [analysisList, setAnalysisList] = useState<AnalysisUI[]>([]);

  useEffect(() => {
    setAnalysisList([]);
  }, [props]);

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

      {analysisList.length > 0 &&
        analysisList.map((item, idx) => {
          return (
            <Box key={idx}>
              <Heading as="h4" size="md" mt={8} mb={4}>
                {item.name}
              </Heading>
              <Text mb={2}>{item.response}</Text>
            </Box>
          );
        })
      }

      <Box>
        <Heading as="h4" size="md" mt={8} mb={4}>
          Run Analysis
        </Heading>
        <Stack direction="row" spacing={4} mt={4}>
          {ANALYSIS.map((analysis) => {
            return (
              <Button
                colorScheme="blue"
                key={analysis.name}
                onClick={async () => {
                  const result = await dataService.runAnalysis(analysis);
                  const response: AnalysisUI = {
                    ...analysis,
                    response: result.choices?.[0].message.content || "No response..",
                  };
                  const newList = [...analysisList, response];
                  setAnalysisList(newList);
                }}
              >
                {analysis.name}
              </Button>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}

export default VoiceDetails;
