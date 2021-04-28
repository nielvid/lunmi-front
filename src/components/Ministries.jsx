import React from "react";
import { Box, Heading, Image, Flex, Text } from "@chakra-ui/react";
import Min from "../img/m.jpg";

export default function Ministries() {
  return (
    <>
      <Box width="100%" margin="8em auto">
        <Flex px="2em" justifyContent="flex-start" flexWrap="wrap">
          <Box px="0.5em" py="2em" textAlign="center">
            <Image src={Min} alt="asjj" />
            <Heading textTransform="uppercase">
              Couple&apos;s Fellowship
            </Heading>
            <Text>Our men are ...</Text>
          </Box>
          <Box px="0.5em" py="2em" textAlign="center">
            <Image src={Min} alt="asjj" />
            <Heading textTransform="uppercase">Youth Fellowship</Heading>
            <Text>Our men are ...</Text>
          </Box>
          <Box px="0.5em" py="2em" textAlign="center">
            <Image src={Min} alt="asjj" />
            <Heading textTransform="uppercase">Children&apos;s Church</Heading>
            <Text>Our men are ...</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
