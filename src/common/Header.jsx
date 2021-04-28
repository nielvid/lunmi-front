import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, List, Image } from "@chakra-ui/react";
// import { ReactComponent as Logo } from "../img/logo.svg";
import LgLogo from "../img/lightlogo.png";
import CommonBtn from "./CommonBtn";

export default function Header() {
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
        p="1em 3em"
        position="fixed"
        top="0"
        zIndex="3"
      >
        <Flex justifyContent="space-between" w="100%" alignItems="center">
          <Box width="5em">
            <Image src={LgLogo} alt="Light Unto Nations Logo" />
          </Box>
          <Flex fontSize="2rem">
            <List pr="2em" onClick={Clicked}>
              <Link to="/">Home</Link>
            </List>
            <List pr="2rem" onClick={Clicked}>
              <Link to="/">About</Link>
            </List>
            <List pr="2rem" onClick={Clicked}>
              <Link to="/">Sermon</Link>
            </List>
            <List pr="2rem" onClick={Clicked}>
              <Link to="/">Ministries</Link>
            </List>
            <List pr="2rem" onClick={Clicked}>
              <Link to="/event">Event</Link>
            </List>
            <List pr="2rem" onClick={Clicked}>
              <Link to="/">Contact</Link>
            </List>
            <Box>
              {" "}
              <CommonBtn padding="0.5em 0.8em" background="red">
                Give Online
              </CommonBtn>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box mb={["3em", "5em"]} position="relative" top="6em">
        {" "}
      </Box>
    </>
  );
}
