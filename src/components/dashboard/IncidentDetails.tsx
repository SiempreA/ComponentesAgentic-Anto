import { VStack, Box, Text, Button, HStack } from "@chakra-ui/react";
import AudioPlayer from "../shared/AudioPlayer";
import ImageCard from "../shared/ImageCard";

const mockCards = [
  {
    image: "../../assets/images/accident-1.png",
    title: "Accident Picture.PNG",
    weight: "168kb",
  },
  {
    image: "../../assets/images/accident-2.png",
    title: "Accident Picture.PNG",
    weight: "168kb",
  },
  {
    image: "../../assets/images/pdf.png",
    title: "Police report",
    weight: "254kb",
  },
];

const IncidentDetails = () => {
  return (
    <VStack alignItems="left" gap="28px" p="24px 24px 24px 24px">
      <Text fontSize={20} fontWeight="light">
        Incident Details
      </Text>
      <VStack gap="12px" alignItems="left">
        <Text fontWeight="medium">Description</Text>
        <Text color="black">
          Concerned customer. Provided a detailed account of the accident
          involving his vehicle, attaching photos of the damage along with the
          claims form for the insurer's review.
        </Text>
        <HStack>
          <Text as="span" color="#4B4949" fontWeight="bold">
            Date:
          </Text>{" "}
          01/15/2025{" "}
          <Text as="span" color="#4B4949" fontWeight="bold">
            Hour:
          </Text>{" "}
          3PM Local:{" "}
          <Text as="span" color="#4B4949" fontWeight="bold">
            Avenue
          </Text>{" "}
          Providencia
        </HStack>
      </VStack>
      <VStack gap="12px" alignItems="left">
        <Text fontWeight="medium">Audios transcriptions</Text>
        <Box p={4} border="1px solid #E0E0DE" borderRadius={12}>
          <HStack color="black">
            <Text as="span" color="#4B4949" fontWeight="bold">
              Transcription:
            </Text>{" "}
            Hello, my name is Carlos and I would like to know what the procedure
            is for a car accident. I have all the evidence in hand and would...{" "}
            <Text as="span" color="#6237DF" fontWeight="bold">
              More
            </Text>
            <AudioPlayer />
          </HStack>
        </Box>
      </VStack>
      <VStack gap="12px" alignItems="left">
        <Text fontWeight="medium">Documents</Text>
        <HStack alignItems="left">
          {mockCards.map((card, i) => (
            <ImageCard
              key={i}
              src={card.image}
              fileName={card.title}
              fileSize={card.weight}
            />
          ))}
        </HStack>
      </VStack>
      <Button backgroundColor="#313030" height="60px" borderRadius={50}>
        Analyze the case
      </Button>
    </VStack>
  );
};

export default IncidentDetails;
