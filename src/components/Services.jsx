import React from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";

export default function Services() {
  return (
    <>
      <Box mx="3em" my="3em" id="services">
        <Heading textAlign="center" fontSize="2.5em">
          Service Times
        </Heading>
        <Box id="service">
          <Flex mt="3em" alignItems="center">
            <Box fontSize="2.5em" mr="1em">
              Sunday:{" "}
            </Box>
            <Flex>
              <Box fontSize="1.6em" mr="1em">
                Leadership Devt. Service
              </Box>
              <Text fontSize="1.6em" mr="1em" textAlign="center">
                {" "}
                Time:- 8:00am
              </Text>
            </Flex>
          </Flex>
        </Box>

        <Box id="service">
          <Flex mt="3em" alignItems="center">
            <Box fontSize="2.5em" mr="1em">
              Sunday:{" "}
            </Box>
            <Flex>
              <Box fontSize="1.6em" mr="1em">
                Worship(Wisdom) Service
              </Box>
              <Text fontSize="1.6em" mr="1em" textAlign="center">
                {" "}
                Time:- 9:00am
              </Text>
            </Flex>
          </Flex>
        </Box>

        <Box id="service">
          <Flex mt="3em" alignItems="center">
            <Box fontSize="2.5em" mr="1em">
              Wednesday:{" "}
            </Box>
            <Flex>
              <Box fontSize="1.6em" mr="1em">
                Prayer(Power) Service
              </Box>
              <Text fontSize="1.6em" mr="1em" textAlign="center">
                {" "}
                Time:- 6:30pm
              </Text>
            </Flex>
          </Flex>
        </Box>
        <hr />
      </Box>
    </>
  );
}
