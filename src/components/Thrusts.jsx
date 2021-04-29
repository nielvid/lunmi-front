import React from "react";
import { Box } from "@chakra-ui/react";

export default function Thrusts({ children }) {
  return (
    <>
      <Box
        textAlign="center"
        mx="1.8em"
        border=" 1px solid #00000"
        boxShadow="1px 1px 2px 2px #1b1143;"
        my="1em"
        py="2.5em"
        px="2.5em"
        borderRadius="2em"
        _hover={{ transform: "scale(1.12)" }}
      >
        {children}
      </Box>
    </>
  );
}
