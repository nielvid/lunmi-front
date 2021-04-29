import React from "react";
import { Box, Heading, Flex, List, Link, Image } from "@chakra-ui/react";
import { ReactComponent as Facebook } from "../common/facebook.svg";
import { ReactComponent as Instagram } from "../common/instagram.svg";
import { ReactComponent as Youtube } from "../common/youtube.svg";
import Mixlr from "../img/mixlr_logo.png";

export default function SocialMedia() {
  return (
    <>
      <Box>
        <Heading textAlign="center" fontSize="2.5em">
          Follow us
        </Heading>

        <Flex justifyContent="center" flexWrap="wrap">
          <List
            fontSize="1.8em"
            w="40px"
            m="1em"
            _hover={{ transform: "scale(1.3)" }}
          >
            <Link
              href="https://www.facebook.com/lightuntonationsministries"
              isExternal
            >
              <Facebook fill="white" />
            </Link>
          </List>
          <List
            fontSize="1.8em"
            w="40px"
            m="1em"
            _hover={{ transform: "scale(1.3)" }}
          >
            <Link href="https://www.instagram.com/lightunto_nations" isExternal>
              <Instagram fill="white" width="100%" height="100%" />
            </Link>
          </List>
          <List
            fontSize="1.8em"
            w="43px"
            m="1em"
            _hover={{ transform: "scale(1.3)" }}
          >
            <Link
              href="https://www.youtube.com/channel/UCP9G6VwEGjb2BS8W3kK0O1w"
              isExternal
              _hover={{ transform: "scale(1.12)" }}
            >
              <Youtube fill="white" width="105%" height="105%" />
            </Link>
          </List>
          <List
            fontSize="1.8em"
            w="43px"
            m="1em"
            background="white"
            textAlign="center"
            _hover={{ transform: "scale(1.3)" }}
          >
            <Link href="https://mixlr.com/lightuntonations" isExternal>
              <Image src={Mixlr} alt="mixlr" />
            </Link>
          </List>
        </Flex>
      </Box>
    </>
  );
}
