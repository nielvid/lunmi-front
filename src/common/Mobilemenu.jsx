import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, List } from "@chakra-ui/react";
import { ReactComponent as MenuIcon } from "./menu.svg";

export default function Mobilemenu() {
  const [state, setstate] = useState(true);
  const Clicked = () => {
    setstate(!state);
  };

  return (
    <>
      <Box
        background="#1b1143"
        color="white"
        w="100%"
        p="1em 2em"
        position="fixed"
        top="0"
        zIndex="3"
      >
        <MenuIcon width="8%" onClick={Clicked} />

        <Box
          fontSize="1.5rem"
          d={state ? "none" : "block"}
          position="absolute"
          top="2.8em"
          left="0"
          width="105px"
          background="#1b1143"
          height="50vh"
          zIndex="3"
          opacity="0.9"
        >
          <Box pl="1em">
            <List
              onClick={Clicked}
              py="0.7em"
              px="0.7em"
              _hover={{ background: "gray" }}
            >
              <Link to="/">Home</Link>
            </List>
            <List py="0.5em" px="0.7em" _hover={{ background: "gray" }}>
              <Link to="/" onClick={Clicked}>
                About
              </Link>
            </List>
            <List
              onClick={Clicked}
              py="0.5em"
              px="0.7em"
              _hover={{ background: "gray" }}
            >
              <Link to="/">Sermon</Link>
            </List>
            <List
              onClick={Clicked}
              py="0.5em"
              px="0.7em"
              _hover={{ background: "gray" }}
            >
              <Link to="/">Ministries</Link>
            </List>
            <List
              onClick={Clicked}
              py="0.5em"
              px="0.7em"
              _hover={{ background: "gray" }}
            >
              <Link to="/events">Events</Link>
            </List>
            <List
              onClick={Clicked}
              py="0.5em"
              px="0.7em"
              _hover={{ background: "gray" }}
            >
              <Link to="/contact">Contact</Link>
            </List>
            <List
              onClick={Clicked}
              py="0.5em"
              px="0.7em"
              _hover={{ background: "gray" }}
            >
              <Link to="/">Give Online</Link>
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
