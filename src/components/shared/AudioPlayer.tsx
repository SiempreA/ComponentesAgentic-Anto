import { HStack, Button, Text } from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/slider";
import { useState } from "react";
import { Icon } from "@iconify/react";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => setIsPlaying((prev) => !prev);

  return (
    <HStack alignItems="center">
      <Button onClick={togglePlayPause} variant="ghost">
        {isPlaying ? (
          <Icon icon="mdi:pause" width="24" height="24" />
        ) : (
          <Icon icon="mdi:play" width="24" height="24" />
        )}
      </Button>

      <Slider aria-label="audio-progress" flex="1" defaultValue={30}>
        <SliderTrack bg="#000000">
          <SliderFilledTrack bg="#000000" />
        </SliderTrack>
        <SliderThumb boxSize={4} />
      </Slider>

      <Text fontSize="sm" minWidth="50px" textAlign="right">
        5:32
      </Text>
    </HStack>
  );
};

export default AudioPlayer;
