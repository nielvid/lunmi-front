/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
import { speaker } from "../utils/queries.js";

export default function Profile() {
  const [state, setstate] = useState();
  const params = useParams();
  // eslint-disable-next-line no-console
  const { slug } = params;

  useEffect(async () => {
    try {
      const data = await speaker(slug);
      setstate(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Box>
        <Box>
          <Flex justifyContent="center" flexWrap="wrap" py="4em">
            <Box px="1em">
              <Image src={state?.data?.image} alt="jdjdjd" borderRadius="5em" />
            </Box>

            <Box px="2em" w={["100%", "50%"]}>
              <Heading mb="0.5em" fontSize={["2em", "3.5em"]} px="1em">
                {state?.data?.fullname}
              </Heading>
              <Text fontSize="2em" px="1em" textAlign="justify">
                {state?.data?.profile}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
