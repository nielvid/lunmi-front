import React from "react";

import { Box, Heading, Image, Flex, Text } from "@chakra-ui/react";

import Thrusts from "./Thrusts";
import Vi from "../img/vsion.jpg";
import Mission from "../img/mission.jpg";

export default function Home() {
  return (
    <>
      <Box px="2rem">
        <Box width="100%">
          <Box
            color="#000000"
            fontSize={["1.3em", "1.7em", "2em", " 2.5em"]}
            fontWeight="500"
            ml="0.5em"
            textAlign="center"
            mt="1em"
          >
            <Heading fontSize={["1.5em", "2em", "3em"]} mb="0.5em">
              Welcome to Light Unto Nations
            </Heading>
          </Box>
        </Box>
      </Box>
      <Flex
        justifyContent="space-between"
        flexWrap="wrap"
        px="3em"
        margin="5em auto"
      >
        <Box px="1.5em" py="2em" mR="2.5em" width="55em">
          <Heading
            textTransform="uppercase"
            fontSize={["3em", "4em"]}
            mb="0.5em"
          >
            Our Church
          </Heading>
          <Text fontSize="2.2em" textAlign="justify">
            We are a multi-cultural and multi-generational church committed to
            teaching undiluted word of God. Our vision is to raise you into
            asset of global impact, by equipping you with timeless proven
            principles through every available means. Our Core Values are summed
            up into the acronym LIFE - meaning Leadership Integrity Fellowship
            and Excellence.
          </Text>
        </Box>
        <Flex justifyContent="space-between" flexWrap="wrap">
          <Thrusts>
            <Flex justifyContent="center">
              <Image
                src={Vi}
                borderRadius="80%"
                height="19em"
                width="19em"
                alt=" aa"
              />
            </Flex>

            <Heading pt="1em" fontSize="2.5rem" fontWeight="500">
              Our Vision
            </Heading>
            <Text fontSize="2rem">...raising assets of global Impacts</Text>
          </Thrusts>
          <Thrusts>
            <Flex justifyContent="center" mR="1em">
              <Image
                src={Mission}
                borderRadius="80%"
                height="19em"
                width="19em"
                alt=" aa"
              />
            </Flex>
            <Heading pt="1em" fontSize="2.5rem" fontWeight="500">
              Our Mission
            </Heading>
            <Text fontSize="2rem" textDecoration="s">
              ... equipping you with timeless proven <br />
              principles through every available means.
            </Text>
          </Thrusts>
        </Flex>
        .{" "}
      </Flex>
    </>
  );
}
