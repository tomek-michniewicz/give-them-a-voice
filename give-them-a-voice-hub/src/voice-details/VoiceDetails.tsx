import {
  Box,
  Button,
  Center,
  Heading,
  Spinner,
  Stack,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { voiceRecordingsAtom } from "../App";
import { ANALYSIS } from "../data";
import Paragraphs from "../paragraphs/Paragraphs";
import { AnalysisUI, dataService } from "../services/data-service";

import "./VoiceDetails.css";

export interface VoiceDetailsProps {
  uid: string | null;
}

function VoiceDetails(props: VoiceDetailsProps) {
  const [analysisList, setAnalysisList] = useState<AnalysisUI[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const toast = useToast();
  const [voiceRecordings ] = useAtom<any[]>(voiceRecordingsAtom);

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

  const voice = voiceRecordings.find((voice) => voice.uid === props.uid);

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
      <Paragraphs text={voice?.transcription} />

      {analysisList.length > 0 &&
        analysisList.map((item, idx) => {
          return (
            <Box key={idx}>
              <Heading as="h4" size="md" mt={8} mb={4}>
                {item.name}
                <Tooltip hasArrow label={item.prompt}>
                  <svg
                    style={{ display: "inline", marginLeft: "4px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 96 960 960"
                    width="18"
                  >
                    <path d="M453 776h60V536h-60v240Zm26.982-314q14.018 0 23.518-9.2T513 430q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447 430q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2Zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Zm.234-60Q622 916 721 816.5t99-241Q820 434 721.188 335 622.375 236 480 236q-141 0-240.5 98.812Q140 433.625 140 576q0 141 99.5 240.5t241 99.5Zm-.5-340Z" />
                  </svg>
                </Tooltip>
              </Heading>
              <Paragraphs text={item.response} />
            </Box>
          );
        })}

      <Box>
        <Heading as="h4" size="md" mt={8} mb={4}>
          Run Analysis
        </Heading>
        <Stack
          direction="row"
          spacing={4}
          mt={4}
          style={{ position: "relative" }}
        >
          {isAnalyzing && (
            <Stack direction="row" id="loading">
              <Spinner thickness="3px" color={"blue.400"} />
              <Text ml={2}>Working..</Text>
            </Stack>
          )}
          {ANALYSIS.map((analysis) => {
            return (
              <Button
                colorScheme="blue"
                key={analysis.name}
                onClick={async () => {
                  setIsAnalyzing(true);
                  try {
                    const result = await dataService.runAnalysis(
                      analysis,
                      voice!.transcription
                    );

                    const response: AnalysisUI = {
                      ...analysis,
                      response:
                        result.choices?.[0].message.content || "No response..",
                    };
                    const newList = [...analysisList, response];
                    setAnalysisList(newList);
                  } catch (error: any) {
                    toast({
                      title: error.message,
                      position: "top",
                      status: "error",
                      variant: "subtle",
                    });
                  } finally {
                    setIsAnalyzing(false);
                  }
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
