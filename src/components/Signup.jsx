/* eslint-disable no-console */
import React from "react";

import { Link } from "react-router-dom";
import { Box, Flex, Heading, Text, List } from "@chakra-ui/react";

import Speakers from "./Speakers";
import Ola from "../img/ola.jpeg";
import Ann from "../img/ann.jpeg";
import Jef from "../img/jef.jpeg";

export default function Signup() {
  /* const submit = (e) => {
    e.preventDefault();

    const res = axios.post("https://lunmi-back.herokuapp.com/register");
    // eslint-disable-next-line no-console
    console.log(res);
  };
*/

  return (
    <>
      <Box width="100%" padding="4em 0">
        <Box width="100%" margin="2em auto">
          <Box mb="4em">
            <Heading
              fontSize={["3.5rem", "4.5rem", "6rem"]}
              color="#1b1143"
              textAlign="center"
            >
              Worker&apos;s Fest 1.0
            </Heading>
          </Box>
          <Flex justifyContent="space-between" flexWrap="wrap">
            <Box
              mx={["2em", "5em"]}
              px={["0", "3em"]}
              fontSize={["1.8em", "2.5em"]}
              textAlign="justify"
              mb="2em"
            >
              <Heading py="1em">Fast-Track Your way to the top</Heading>
              <Text>
                Top 9 Secrets of Climbing Any Organisational Ladder with Speed
                by the PRO&#39;s
              </Text>
              <Text>
                Are you really game for this? Do you desire to climb to the top
                of your organisational ladder? Do you often get sidetracked at
                work while others get promoted? Do you know, it only takes about
                15years to climb to the top of any organisation ladder? Do you
                also know you can become that exceptional fast-growing, top
                earner &lsquo;overnight&lsquo;?
              </Text>
            </Box>
            <Box
              mx={["2em", "5em"]}
              px={["0", "3em"]}
              fontSize={["1.8em", "2.5em"]}
              textAlign="justify"
              mb="2em"
            >
              <Heading py="1em">Yes, You Can!</Heading>
              <Text>
                That&#39;s why you can&#39;t afford to miss this meeting.
                It&#39;s a one-day event you will ever be grateful you attended.
                Our vision is to help you fast-track your growth, where others
                simply halt. We will not only show you how to keep your job but
                also how to quickly climb up and become one of the decision
                makers in your organisation. Our Facilitators are
                live-by-example key officers of their organisations.
              </Text>
            </Box>
          </Flex>
          <List
            textAlign="center"
            fontSize={["2em", "4em"]}
            color="white"
            background="red"
            w="40%"
            mt="1em"
            mx="auto"
            _hover={{ transform: "scale(1.3)" }}
          >
            <Link to="/register">Register Now</Link>
          </List>
          <Box textAlign="center" mt="4em" mb="1.5em">
            <Heading fontSize={["2.5em", "3.5em"]} textDecoration="underline">
              Meet the Event Speakers
            </Heading>
          </Box>
          <Flex
            id="speakers"
            justifyContent="space-between"
            flexWrap="wrap"
            px="2em"
            py="3em"
            margin="2em auto"
          >
            <Box>
              {" "}
              <Speakers speaker="Olawale Stevens" image={Ola} />
              <Heading fontSize="1.7em">
                President, Workplace Success Initiative{" "}
              </Heading>
              <Text fontSize="2em" textAlign="center">
                <Link to="/speaker/Olawale-Stevens">Read Profile</Link>
              </Text>
            </Box>
            <Box>
              {" "}
              <Speakers speaker="Ann Stevens" image={Ann} />
              <Heading>CEO of the Just Ladies Int&apos;l </Heading>
              <Text fontSize="2em" textAlign="center">
                <Link to="/speaker/Ann-Stevens">Read Profile</Link>
              </Text>
            </Box>
            <Box>
              {" "}
              <Speakers speaker="Jeffrey Ehikioya Itepu" image={Jef} />
              <Heading>CEO of Pertinence Properties </Heading>
              <Text fontSize="2em" textAlign="center">
                <Link to="/speaker/Jeffrey-Ehikioya-Itepu">Read Profile</Link>
              </Text>
            </Box>

            <Box>
              {" "}
              <Speakers
                speaker="BOSEDE OLUSOLA-OBASA"
                image="https://res.cloudinary.com/nigerianlegion/image/upload/v1619561162/bose_imf0w8.jpg"
              />
              <Heading fontSize="1.7em">
                CEO, 1st Royal Character & Values Limited{" "}
              </Heading>
              <Text fontSize="2em" textAlign="center">
                <Link to="/speaker/BOSEDE-OLUSOLA-OBASA">Read Profile</Link>
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
