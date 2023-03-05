import {
  Box, Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { VOICES } from "../data";

export interface VoicesListProps {
  onSelect: (uid: string) => void
}

function VoicesList(props: VoicesListProps) {

  //usestate hook to store the selected voice uid
  const [selectedVoiceUid, setSelectedVoiceUid] = useState<string | null>(null);

  const onSelect = (uid: string) => {
    props.onSelect(uid)
    setSelectedVoiceUid(uid);
  };

  return (
    <Box>
      {VOICES.map((voice) => (
        <Box key={voice.uid} className="clickable" px={3} py={2} bgColor={(selectedVoiceUid == voice.uid) ? "blue.50" : "none"} onClick={() => onSelect(voice.uid)}>
          <Text pb={1} fontWeight="600">
            {voice.date}
          </Text> 
                  
          <Text color={"gray.500"}>
            {voice.uid}
          </Text>
        </Box>
      ))}
    </Box>
  );
}

export default VoicesList;
