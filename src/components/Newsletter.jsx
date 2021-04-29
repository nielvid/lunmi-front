import React from "react";
import { Box, Heading, Flex, Input } from "@chakra-ui/react";
import CommonBtn from "../common/CommonBtn";

export default function Newsletter() {
  return (
    <>
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
    </>
  );
}
