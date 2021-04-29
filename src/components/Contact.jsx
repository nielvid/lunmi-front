import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Location from "./Location";

export default function Contact() {
  return (
    <>
      <Box py={["4em", "1em"]} w="100%" my="3em">
        <Box
          w="100%"
          mt={["-.4em", "1.2em", "1.4em", "2em"]}
          textAlign="center"
          textDecoration="underline"
        >
          {" "}
          <Heading fontSize="3em"> CONTACT US</Heading>
        </Box>

        <Flex
          justifyContent="space-evenly"
          flexWrap="wrap"
          px={["1em", "2em", "3em"]}
          m="2em auto"
        >
          <Box
            w={["90%", "45%"]}
            textAlign="center"
            verticalAlign="middle"
            fontSize={["1em", "1.4em", "1.6em", "1.8em"]}
            borderRadius="10px"
            border="0.1em solid white"
            boxShadow="lg"
            p="2"
            rounded="md"
            bg="white"
          >
            <Box
              as="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.753461214131!2d3.2504923499250715!3d6.552778324618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b851c05acd95f%3A0xa3e6b9c9b3fb3a55!2sAlmond%20Center!5e0!3m2!1sen!2sng!4v1619704250432!5m2!1sen!2sng"
              width={["100%", "100%"]}
              height="25em"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="jsx-a11y/iframe-has-title"
            />
          </Box>

          <Box
            w={["90%", "35%"]}
            border="0.1em solid white"
            boxShadow="lg"
            rounded="md"
            bg="white"
            pt={["-.4em", "1.2em", "1.4em", "2em"]}
            px={["1em", "1em", "3em"]}
          >
            <Box w="100%">
              <Location />
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
