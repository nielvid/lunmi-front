import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, List } from "@chakra-ui/react";
import { ReactComponent as MenuIcon } from "./menu.svg";

export default function Mobilemenu() {
  const [state, setstate] = useState();
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
          width="85px"
          background="#572CD1"
          height="70vh"
          pl="1em"
          zIndex="3"
          opacity="0.9"
        >
          <List onClick={Clicked}>
            <Link to="/">Home</Link>
          </List>
          <List>
            <Link to="/" onClick={Clicked}>
              About
            </Link>
          </List>
          <List onClick={Clicked}>
            <Link to="/">Sermon</Link>
          </List>
          <List onClick={Clicked}>
            <Link to="/">Ministries</Link>
          </List>
          <List onClick={Clicked}>
            <Link to="/event">Event</Link>
          </List>
          <List onClick={Clicked}>
            <Link to="/">Contact</Link>
          </List>
          <List onClick={Clicked}>
            <Link to="/">Give</Link>
          </List>
        </Box>
      </Box>
      <Box mb="2.9em" position="relative" top="6em">
        {" "}
      </Box>
    </>
  );
}
