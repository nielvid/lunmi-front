import React from "react";
import { Box, Image, Heading } from "@chakra-ui/react";

export default function Speakers({ image, speaker }) {
  return (
    <Box>
      <Box textAlign="center">
        <Image
          src={image}
          alt={speaker}
          borderRadius="2.5em"
          _hover={{ transform: "scale(1.12)" }}
        />
        <Heading mt="1em" mb="0.5em">
          {speaker}
        </Heading>
      </Box>
    </Box>
  );
}
