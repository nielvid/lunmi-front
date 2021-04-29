import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, List } from "@chakra-ui/react";

export default function Mobilemenu() {
  const [state, setstate] = useState(false);
  const Clicked = () => {
    setstate(true);
  };

  return (
    <>
      <Box background="#1b1143" color="white" w="100%" p="1em 2em">
        <Box
          fontSize="1.5rem"
          d={state ? "none" : "block"}
          position="absolute"
          top="2.8em"
          left="0"
          width="105px"
          background="black"
          zIndex="3"
          color="white"
        >
          <Box>
            <List
              onClick={Clicked}
              py="0.7em"
              px="0.7em"
              _hover={{ background: "gray" }}
            >
              <Link to="/">Home</Link>
            </List>
          </Box>
        </Box>
      </Box>
      <Box mb="2.9em" position="relative" top="6em">
        {" "}
      </Box>
    </>
  );
}
