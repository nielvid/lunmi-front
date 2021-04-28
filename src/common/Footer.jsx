import React from "react";
import { Box, Heading, Flex, Text, Input } from "@chakra-ui/react";
import CommonBtn from "./CommonBtn";

export default function Footer() {
  return (
    <>
      <Box width="100%" background="#1b1143" color="white" py="4em">
        <Flex justifyContent="space-around" flexWrap="wrap">
          <Box mx="3em" my="3em" id="location">
            <Heading textAlign="center" fontSize="2.5em">
              Location
            </Heading>
            <Box textAlign="center" my="3em">
              <Heading fontSize="2em">House of Impact</Heading>
              <Text fontSize="1.6em">
                165, Igando-Ikotun Road, Bakare B/stop, Ikotun, Lagos.
              </Text>
            </Box>

            <Box textAlign="center" my="3em">
              <Heading fontSize="2em">City of Life</Heading>
              <Text fontSize="1.6em">
                22, Kudaki Road, Cele B/stop, Cele-Egbe, Lagos.
              </Text>
            </Box>
            <hr />
          </Box>

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

          <Box mx="3em" my="3em" id="location">
            <Heading textAlign="center" fontSize="2.5em">
              Follow us
            </Heading>
            <Box textAlign="center" my="3em">
              <Heading fontSize="2em">Social Media Icons</Heading>
            </Box>
            <Box textAlign="center" my="3em">
              <Heading fontSize="2em">Sign up to recieve Weekly sermon</Heading>
              <Flex>
                <Input
                  type="text"
                  placeholder="Your Email"
                  background="white"
                  height="2em"
                  color="#000000"
                  fontSize="2em"
                />
                <CommonBtn padding="2em" fontSize="1em">
                  Signup
                </CommonBtn>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
