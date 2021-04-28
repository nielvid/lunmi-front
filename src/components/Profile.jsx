import React from "react";
import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
    <>
      <Box>
        <Box>
          <Flex justifyContent="center" flexWrap="wrap">
            <Box>
              <Image src="" alt="jdjdjd" />
            </Box>
            <Box>
              <Heading mt="1em" mb="0.5em">
                name
              </Heading>
              <Text>the profile here</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
