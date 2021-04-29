import React from "react";
import { Box, Text } from "@chakra-ui/react";
import SocialMedia from "../components/SocialMedia";

export default function Footer() {
  return (
    <>
      <Box width="100%" background="#1b1143" color="white" py="1em">
        <SocialMedia />
        <Text textAlign="center" fontSize={["1.4em", "2em"]}>
          &copy; Light Unto Nations Media | 2021
        </Text>
      </Box>
    </>
  );
}
