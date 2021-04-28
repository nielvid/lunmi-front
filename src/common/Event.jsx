import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, List } from "@chakra-ui/react";

export default function Event({ event, date, time }) {
  return (
    <>
      <Box my="1em" mx="2em">
        <Flex justifyContent="space-between">
          <Box>
            <List
              fontSize={["1.8em", "2.5rem"]}
              color="#c60000"
              _hover={{ color: "#1b1143" }}
            >
              <Link to="/">{event}</Link>
            </List>
          </Box>
          <Box>
            <Text fontSize={["1.2em", "1.8rem"]}>{date}</Text>
            <Text fontSize={["1.2em", "1.8rem"]}>{time}</Text>
          </Box>
        </Flex>
        <hr style={{ border: "1px dotted red", height: "0.5em" }} />
      </Box>
    </>
  );
}
