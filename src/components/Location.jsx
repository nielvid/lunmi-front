import React from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";

export default function Location() {
  return (
    <>
      <Box my="3em">
        <Heading fontSize="3em" textAlign="center">
          OUR LOCATIONS
        </Heading>
        <Flex justifyContent="space-between" flexWrap="wrap">
          <Box my="3em" textAlign="center">
            <Heading fontSize="2.8em">House of Impact</Heading>
            <Text fontSize="2em">
              165, Igando-Ikotun Road, Bakare B/stop, Ikotun, Lagos.
            </Text>
          </Box>

          <Box my="3em" textAlign="center">
            <Heading fontSize="2.8em">City of Life</Heading>
            <Text fontSize="2em">
              22, Kudaki Road, Cele B/stop, Cele-Egbe, Lagos.
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
