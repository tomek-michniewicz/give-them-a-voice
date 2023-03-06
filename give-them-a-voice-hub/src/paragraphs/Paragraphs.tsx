import { Text } from "@chakra-ui/react";

export interface ParagraphsProps {
  text: string;
}

function Paragraphs(props: ParagraphsProps) {
  const paragraphs = props.text.split("\n");

  return (
    <>
      {paragraphs?.map((paragraph: string, idx: number) => (
        <Text mb={2} key={idx}>
          {paragraph}
        </Text>
      ))}
    </>
  );
}

export default Paragraphs;
